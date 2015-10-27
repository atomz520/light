/*
File: selectiongadget.js

This file contains all the properties of the selection gadget
*/

var selectionGadget = {
	selectedSprite: null,
	$resize: null,
	$origin: null,
	$rotate: null,
	init: function (resize, origin, rotate) {
		this.$resize = $(resize);
		this.$origin = $(origin);
		this.$rotate = $(rotate);

		this.$resize.hide();
		this.$origin.hide();
		this.$rotate.hide();

		this.$origin.draggable();
		this.$resize.draggable();
	},
	//To be called on drag or on resize
	update: function () {
		if ( this.selectedSprite == null ) return;

		var pos = this.selectedSprite.display;
		pos.x += canvas._offsetX + 10; //TODO: Remove this magic number
		pos.y += canvas._offsetY;
		this.$rotate.css({ "left": pos.x, "top": pos.y });
		this.$resize.css({ "left": (pos.x + pos.width), "top": (pos.y+pos.height) });
		this.$origin.css({ "left": (pos.x + pos.width/2), "top": (pos.y+pos.height/2) });
	},
	setSelected : function ( selected ) {
		this.selectedSprite = selected;
		this.update();

		this.$resize.show();
		this.$origin.show();
		this.$rotate.show();
	}
};