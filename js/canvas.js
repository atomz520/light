/*
File: canvas.js

This file contains the canvas object as well as it's properties.
*/

var canvas = {
	_nativeWidth: 800,
	_nativeHeight: 600,
	_aspectRatio: 0,
	_actualWidth: 0,
	_actualHeight: 0,
	_offsetX: 0,
	_offsetY: 0,
	_$canvasHolder: null,
	_$canvas: null,
	/* Sets the canvas holder and canvas selectors */
	init : function ( canvasHolder, canvas ) {
		this._$canvasHolder = $(canvasHolder);
		this._$canvas = $(canvas);
		this._aspectRatio = this._nativeWidth / this._nativeHeight;

	},
	/* Called upon resize, will automatically resize the canvas within the holder*/
	resize : function () {
		var holderX = this._$canvasHolder.width();
		var holderY = this._$canvasHolder.height();
		if ( holderX > holderY * this._aspectRatio ) { //Height is the limiting factor
			this._actualHeight = holderY;
			this._actualWidth = this._actualHeight * this._aspectRatio;
		} else { //Width is the limiting factor
			this._actualWidth = holderX;
			this._actualHeight = this._actualWidth / this._aspectRatio;
		}

		this._offsetX = (holderX - this._actualWidth) * 0.5;
		this._offsetY = (holderY - this._actualHeight) * 0.5;

		this._$canvas.css({
			"height": this._actualHeight,
			"width": this._actualWidth,
			"top": this._offsetY,
			"left": this._offsetX
			});
		
	}
};