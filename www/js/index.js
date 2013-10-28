var app = {
    // Application Constructor
    iframe:null,
    init: function() {
        this.iframe=document.getElementById('container');
        this.showStateConnecting();
        // this.bindEvents();
        ws.init();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        ws.init(); 
    },
    // app action
    showIpInput:function(){
        this.iframe.src="ip_input.html";
    },
    showTouch:function(){
        this.iframe.src="touch.html";
    },

    showNum:function(){
        this.iframe.src="num.html";
    },
    
    showVod:function(){
        this.iframe.src="vod.html";
    },
    
    showStateConnecting:function(){
        this.iframe.src="connecting.html";
    }
};
