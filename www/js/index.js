$(document).ready( function () {
  
	document.addEventListener("deviceready", init , false);
}
);


function init() {
	if(navigator.network.connection.type == Connection.NONE) {
		navigator.notification.alert("You are OffLine!");
		window.location = "offline.html";
	}else {
		navigator.notification.alert("You are OnLine!");
		window.location = "online.html";
	}
}