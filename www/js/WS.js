/**
 * websocket.js
 * 对websocket的简单绑定
 */
var ws = {
  host:"192.168.12.243",
  port:"15926",
  obj:null,
  connect_times:0,
  catch_error:false,
  _msg_json:{
    "type"    : "",
    "content" : {
        "eventname":null,
        "timestamp":0,
        "avgs":{}
    }
  },
  init:function(){
    this.tryConnect();
  },
  tryConnect:function(){
    var link = 'ws://'+this.host+':'+this.port+'/test';
    // var link = 'ws://'+this.host+':'+this.port+'/';
    this.close();
    try{
      ws.obj = new WebSocket(link);
      ws.obj.onopen    =ws.whenOpen;
      ws.obj.onclose   =ws.whenClose;
      ws.obj.onmessage =ws.whenMsg;
      ws.obj.onerror   =ws.whenERR;
    }
      catch(ex){
        alert('tryError'+err.description);
    }
  },
  send:function(msg){
    // alert(msg.toJSONString());
    if (typeof(msg)=="object") {
      msg = msg.toJSONString();
    };
    this.obj.send(msg);
  },
  sendKey:function(action,keycode){
    this._msg_json.type="KEY";
    this._msg_json.content.eventname=action;
    this._msg_json.content.timestamp=new Date().getTime();
    this._msg_json.content.avgs.keycode=keycode;
    this.send(this._msg_json);
  },
  sendCMD:function(action,cmdname){ 
    this._msg_json.type="CMD";
    this._msg_json.content.eventname=action;
    this._msg_json.content.timestamp=new Date().getTime();
    this._msg_json.content.avgs.cmdname=cmdname;
    this.send(this._msg_json);
  },
  close:function(){
    try{
      this.obj.close();
    }
    catch(ex){
      this.obj=null;
      return;
    }
  },
  whenOpen:function(msg){
    app.showTouch();
  },
  whenClose:function(msg){
    ws.connect_times+=1;
    if(ws.connect_times>5){
      ws.connect_times=0;
      app.showIpInput();
      return;
    }
    ws.tryConnect();
  },
  whenMsg:function(msg){},
  whenERR:function(err){
    this.catch_error=true;
  }
} 
