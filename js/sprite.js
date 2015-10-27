/*
File: sprite.js

This file contains the functions used to create sprites

*/

var sprite = {
	newSprite : function () {
		return {
			"native": this.newProperties(Math.floor(Math.random() * 800) ,Math.floor(Math.random() * 600),50,50), 
			"display": this.newProperties(0,0,0,0),
			"percentage": this.newProperties(0,0,0,0),
			"$dom": null, //The dom selector of the sprite
			//Calculates the actual display position based on the percentages
			"calculateDisplayFromNative": function (perc) {
				this.display.x = this.native.x * perc; 
				this.display.y = this.native.y * perc; 
				this.display.width = this.native.width * perc; 
				this.display.height = this.native.height * perc; 

				console.log("Calculating display coords");
				if ( this.$dom != null ) {
					var dom = this.$dom; //Convenience
					dom.css({
						"width": this.display.width,
						"height": this.display.height,
						"top": this.display.y,
						"left": this.display.x
						});
				}
			},
			"calculateNativeFromDisplay": function (perc) {

			},
			//Converts this to a div
			"toHTML": function() {
				this.$dom = $("<div class='sprite'></div>");
				return this.$dom;
			}
		};
	},
	newProperties: function(x, y, width, height) {
		return {
			"x": x, //x position
			"y": y, //y position
			"width": width, //width
			"height": height, //height
		};
	}
}
