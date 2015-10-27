/*
File: script.js

This file contains all the default functionality for the application

*/

$(document).ready ( function (e) {
	canvas.init("div#canvasHolder", "div#canvas");
	selectionGadget.init("#gadget-resize","#gadget-origin","#gadget-rotate");
	$(window).resize();

	$("#addItem").click( function(e) {
		spriteManager.addSprite();
	});
});

$(window).resize ( function (e) {
	canvas.resize();
	selectionGadget.update();
	spriteManager.updatePercentage(canvas.percentage);
});