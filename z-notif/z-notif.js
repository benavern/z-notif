////////////////////////////
//		  Z-Notif		  //
//	by Benjamin Caradeuc  //
//	http://caradeuc.info  //
////////////////////////////

var ZNotif = function(type, text, duration, prepend){
	// args
	this.type = type || "note";
	this.text = text || "Hello, World!";
	this.duration = duration || 3000;
	this.prepend = prepend;
	// vars
	this.notifWrapper = document.getElementById("notif-wrapper");
	this.timer;
	// autocall
	this.checkWrapper().launch();
};

ZNotif.prototype.launch = function(){
	var self = this;
	
	switch(self.type){
		case "success":
			self.success();
			break;
		case "warning":
			self.warning();
			break;
		case "error":
			self.error();
			break;
		// case "note":
		default:
			self.note();
			break;
	}
};

ZNotif.prototype.checkWrapper = function(){
	var self = this;
	
	if(!self.notifWrapper){
		self.notifWrapper = document.createElement("div");
		self.notifWrapper.id = "notif-wrapper";
		self.notifWrapper.style.position = "fixed";
		self.notifWrapper.style.top = "20px";
		self.notifWrapper.style.right = "20px";
		self.notifWrapper.style.width = "auto";
		self.notifWrapper.style.background = "none transparent";
		document.body.appendChild(self.notifWrapper);
	}
	return self;
};

ZNotif.prototype.createNotif = function(callback){
	var self = this;
	
	var notif = document.createElement("div");
	var notifContent = document.createTextNode(self.text);
	notif.appendChild(notifContent);
	notif.style.padding = "0.5rem 1rem";
	notif.style.margin = "0.5rem";
	notif.style.borderRadius = "4px";
	notif.style.cursor = "pointer";
	notif.addEventListener('click', function(){
		self.remove(this);
	});
	
	callback(notif);
};

ZNotif.prototype.remove = function(node){
	var self = this;
	
	clearTimeout(self.timer);
	node.parentNode.removeChild(node);
	
};

ZNotif.prototype.defferedRemove = function(node, time){
	var self = this;
	
	self.timer = setTimeout(function(){
		self.remove(node);
	},time);
};

ZNotif.prototype.note = function(){
	var self = this;
	
	if(self.prepend !== false){
		self.text = "Note: " + self.text;
	}
	this.createNotif(function(notif){
		notif.style.background = "#d9edf7";
		notif.style.color = "#3a87ad";
		notif.style.border = "1px #bce8f1 solid";
		self.notifWrapper.appendChild(notif);
		self.defferedRemove(notif, self.duration);
	});
};

ZNotif.prototype.success = function(){
	var self = this;
	
	if(self.prepend !== false){
		self.text = "Success: " + self.text;
	}
	this.createNotif(function(notif){
		notif.style.background = "#dff0d8";
		notif.style.color = "#468847";
		notif.style.border = "1px #d6e9c6 solid";
		self.notifWrapper.appendChild(notif);
		self.defferedRemove(notif, self.duration);
	});
};

ZNotif.prototype.warning = function(){
	var self = this;
	
	if(self.prepend !== false){
		self.text = "Warning: " + self.text;
	}
	
	self.createNotif(function(notif){
		notif.style.background = "#fcf8e3";
		notif.style.color = "#c09853";
		notif.style.border = "1px #fbeed5 solid";
		self.notifWrapper.appendChild(notif);
		self.defferedRemove(notif, self.duration);
	});
};

ZNotif.prototype.error = function(){
	var self = this;
	
	if(self.prepend !== false){
		self.text = "Error: " + self.text;
	}
	
	self.createNotif(function(notif){
		notif.style.background = "#ffeeee";
		notif.style.color = "#ff5555";
		notif.style.border = "1px #ffdddd solid";
		self.notifWrapper.appendChild(notif);
		self.defferedRemove(notif, self.duration);
	});
};
