/*
File: sprite.js

This file contains the functions used to create sprites

*/

var sprite = {
	_curID: 0,
	newSprite : function () {
		return {
			"id": this._curID++,
			"native": this.newProperties(Math.floor(Math.random() * 800/20) * 20, Math.floor(Math.random() * 600/20) * 20,50,50), 
			"display": this.newProperties(0,0,0,0),
			"percentage": this.newProperties(0,0,0,0),
			"$dom": null, //The dom selector of the sprite
			"_perc": 1,
			//Calculates the actual display position based on the percentages
			"calculateDisplayFromNative": function (perc) {
				this._perc = perc;
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
			"calculateNativeFromDisplay": function () {
				var dom = this.$dom; //Convenience
				this.display.x = dom.position().left;
				this.display.y = dom.position().top; 
				this.display.width = dom.width(); 
				this.display.height = dom.height(); 
				this.native.x = this.display.x / this._perc;
				this.native.y = this.display.y / this._perc;
				this.native.width = this.display.width / this._perc;
				this.native.height = this.display.height / this._perc;
			},
			//Converts this to a div
			"toHTML": function() {
				this.$dom = $("<div class='sprite'></div>");
				this.$dom.attr("id", "sprite-"+this.id);
				return this.$dom;
			},
			"initDraggable" : function() {
				var spriteObject = this;
				this.$dom.draggable({
						containment: "parent",
						drag: function() {
							spriteObject.calculateNativeFromDisplay();
							selectionGadget.setSelected(spriteObject);
						}
					}
				);
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
