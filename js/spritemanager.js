/*
File: spritemanager.js

This file contains the spritemanager.

*/

var spriteManager = {
	_sprites : [], //Each sprite is a layer
	_percentage: 1,
	addSprite: function() {
		//Create new sprite
		var newSprite = sprite.newSprite();
		this._sprites.push(newSprite);
		//Add object to canvas
		canvas.$canvas.append(newSprite.toHTML());
		//Update sprite display properties
		newSprite.calculateDisplayFromNative(this._percentage);
	},

	updatePercentage: function (percentage) {
		this._percentage = percentage;
		for ( var i in this._sprites ) {
			var sprite = this._sprites[i];
			sprite.calculateDisplayFromNative(percentage);
		}
	}
};