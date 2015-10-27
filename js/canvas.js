/*
File: canvas.js

This file contains the canvas object as well as it's properties.
*/

var canvas = {
	_nativeWidth: 800,
	_nativeHeight: 600,
	_aspectRatio: 0,
	_displayWidth: 0,
	_displayHeight: 0,
	_offsetX: 0,
	_offsetY: 0,
	_$canvasHolder: null,
	$canvas: null,
	percentage: 1,
	/* Sets the canvas holder and canvas selectors */
	init : function ( canvasHolder, canvas ) {
		this._$canvasHolder = $(canvasHolder);
		this.$canvas = $(canvas);
		this._aspectRatio = this._nativeWidth / this._nativeHeight;

	},
	/* Called upon resize, will automatically resize the canvas within the holder*/
	resize : function () {
		var holderX = this._$canvasHolder.width();
		var holderY = this._$canvasHolder.height();
		if ( holderX > holderY * this._aspectRatio ) { //Height is the limiting factor
			this._displayHeight = holderY;
			this._displayWidth = this._displayHeight * this._aspectRatio;
		} else { //Width is the limiting factor
			this._displayWidth = holderX;
			this._displayHeight = this._displayWidth / this._aspectRatio;
		}

		this._offsetX = (holderX - this._displayWidth) * 0.5;
		this._offsetY = (holderY - this._displayHeight) * 0.5;

		this.$canvas.css({
			"height": this._displayHeight,
			"width": this._displayWidth,
			"top": this._offsetY,
			"left": this._offsetX
			});

		this.percentage = this._displayWidth / this._nativeWidth;
	}
};