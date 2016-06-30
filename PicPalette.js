/*
* Copyright (c) 2016, Hemant Kr. Singh
* All rights reserved. (MIT Licensed)
*
* PicPalette.js - an image quantization lib
*/


var PicPalette = function (){};

PicPalette.prototype.getPalette = function (srcImg,numOfColors){
    
    //Loading image to buffer canvas and extracting pixels
    var img = new Image();
    img.src = srcImg;
    var Canvas = document.createElement('canvas');
   

    img.onload = function (){
    Canvas.width = img.width;
    Canvas.height = img.height;
    var ctx = Canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    var pixels = ctx.getImageData(0, 0, Canvas.width, Canvas.height);
     //storing the Uint8ClampedArray
    
    this.pixelArray = ctx.getImageData(0, 0, Canvas.width, Canvas.height).data;
    console.log(pixels);

    this.pixels = [];
    i=0;
    for(x=0;x<img.width;x++){
        for(y=0;y<img.height;y++){
        currentPos = y * img.height * 4 + x * 4; //maps x,y to Uint8ClampedArray pos
        this.pixels[i++] = [this.pixelArray[currentPos],this.pixelArray[currentPos+1],this.pixelArray[currentPos+2]]
        }
    }

    console.log(this.pixels);

    };
   

};

