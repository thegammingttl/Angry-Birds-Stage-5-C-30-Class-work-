class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.Visibility = 255
    this.image = loadImage("sprites/enemy.png");
  }

display () {
  console.log( this.body.speed )

  if (this.body.speed < 4 ) {
    super.display()

  }   
  else {
    push(); 
    this.Visiblity = this.Visiblity - 1;
     tint(255,this.Visiblity); 
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
  }
}
};