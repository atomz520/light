/*
File: script.js

This file contains all the default functionality for the application

*/

$(document).ready ( function (e) {
	canvas.init("div#canvasHolder", "div#canvas");
	$(window).resize();
});

$(window).resize ( function (e) {
	canvas.resize();
});