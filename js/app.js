var NOTIFICATION = {
	note 	: function (texte, duration, prepend){
		new ZNotif("note", texte, duration, prepend);
	},
	success : function (texte, duration, prepend){
		new ZNotif("success", texte, duration, prepend);
	},
	warning : function (texte, duration, prepend){
		new ZNotif("warning", texte, duration, prepend);
	},
	error 	: function (texte, duration, prepend){
		new ZNotif("error", texte, duration, prepend);
	}
};



window.onload = function(){
	var test1 = document.getElementById("test1");
	test1.addEventListener('click', function(e){
		new ZNotif();
		e.preventDefault;
	});
	
	
	var test2 = document.getElementById("test2");
	test2.addEventListener('click', function(e){
		e.preventDefault;
		new ZNotif("success", "I successfully made a beautiful notification!");
	});
	
	var test3 = document.getElementById("test3");
	test3.addEventListener('mouseover', function(e){
		e.preventDefault;
		new ZNotif("Warning", "My cat will eat your mouse pointer!", 1000);
	});
	
	var test4 = document.getElementById("test4");
	test4.addEventListener('keyup', function(e){
		var newtext = "" + test4.value;
		e.preventDefault;
		new ZNotif("error", newtext, 500, false);
	});
};