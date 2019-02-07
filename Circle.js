class Circle {

  constructor(r, posX, posY, colorShift = 1){
    this.radius = r;
    this.positionX = posX;
    this.positionY = posY;
    this.colorR = 0;
    this.colorG = 255;
    this.colorB = 125;
    this.color = 'rgb('+this.colorR+','+this.colorG+','+this.colorB+')';
    this.colorShifter = colorShift;
  }

  show(){
    ellipse(this.positionX,this.positionY,2*this.radius,2*this.radius);
    fill(this.color);
    stroke(218, 234, 239);
  }

  colorshift(){
    if(this.colorR < 255){
      this.colorR = this.colorR + this.colorShifter;
    }
    else if(this.colorG > 0){
      this.colorG = this.colorG - this.colorShifter;
    }
    this.color = 'rgb('+this.colorR+','+this.colorG+','+this.colorB+')';
    fill(this.color);
    //console.log(this.color);
  }

  isRed(){
    if(this.colorR == 255 && this.colorG == 0){return true;}
    else{return false;}
  }

  getPosX(){return this.positionX;}
  getPosY(){return this.positionY;}
  getRadius(){return this.radius;}


}
