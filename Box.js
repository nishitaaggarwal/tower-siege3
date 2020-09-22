class box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle  (x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("can.png")
      this.visiblity=255
      World.add(world,this.body);
    }
    display(){
  
      push();
      if(this.body.speed <3){
        fill("yellow")
        imageMode(CENTER);
        image( this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      
      } else{
        World.remove(world,this.body);
        this.visiblity=this.visiblity-5
        tint(255,this.visiblity)
        imageMode(CENTER);
        image( this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      
      }
      pop();
    }
    score()
    {
      if(this.visiblity<0 && this.visiblity>-200){
        score++
      }
    }
}