function sendCMD(msg){
    // alert(msg);
    top.ws.sendCMD('down',msg);
}
function sendKey(msg){
    // alert(msg);
    top.ws.sendKey('down',msg);
}
var conf_vod={
    "title":"手机遥控测试",
    "footer":"点击使用对应的功能",
    "showbackbutton":false,
    "0": {
        "text": "直播", 
        "action": 'sendCMD("DIRECTPLAY")'
    }, 
    "1": {
        "text": "点播", 
        "action": 'sendCMD("VODPLAY")'
    }, 
    "2": {
        "text": "静音", 
        "action": 'sendCMD("mute")'
    }, 
    "3": {
        "text": "«", 
        "action": 'sendKey()'
    }, 
    "4": {
        "text": "↑", 
        "action": 'sendKey(38)'
    }, 
    "5": {
        "text": "»", 
        "action": 'sendKey()'
    }, 
    "6": {
        "text": "←", 
        "action": 'sendKey(37)'
    }, 
    "7": {
        "text": "ok", 
        "action": 'sendKey()'
    }, 
    "8": {
        "text": "→", 
        "action": 'sendKey(39)'
    }, 
    "9": {
        "text": "返回", 
        "action": 'sendKey(8)'
    }, 
    "10": {
        "text": "↓", 
        "action": 'sendKey(40)'
    }, 
    "11": {
        "text": "键盘", 
        "action": 'sendKey()'
    }, 
    "12": {
        "text": "＞||", 
        "action": 'sendKey()'
    }, 
    "13": {
        "text": "■", 
        "action": 'sendKey()'
    }, 
    "14": {
        "text": "数字", 
        "action": 'ChangePage(conf_num)'
    }
};


var conf_num={
    "0": {
        "text": "", 
        "action": ''
    }, 
    "1": {
        "text": "", 
        "action":""
    }, 
    "2": {
        "text": "", 
        "action":""
    }, 
    "3": {
        "text": "1", 
        "action": 'sendKey(49)'
    }, 
    "4": {
        "text": "2", 
        "action": 'sendKey(50)'
    }, 
    "5": {
        "text": "3", 
        "action": 'sendKey(51)'
    }, 
    "6": {
        "text": "4", 
        "action": 'sendKey(52)'
    }, 
    "7": {
        "text": "5", 
        "action": 'sendKey(53)'
    }, 
    "8": {
        "text": "6", 
        "action": 'sendKey(54)'
    }, 
    "9": {
        "text": "7", 
        "action": 'sendKey(55)'
    }, 
    "10": {
        "text": "8", 
        "action": 'sendKey(56)'
    }, 
    "11": {
        "text": "9", 
        "action": 'sendKey(57)'
    }, 
    "12": {
        "text": "#", 
        "action": 'sendKey(23)'
    }, 
    "13": {
        "text": "0", 
        "action": 'sendKey(48)'
    }, 
    "14": {
        "text": "*", 
        "action": 'sendKey(42)'
    }
};