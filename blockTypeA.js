class blockTypeA
{
    constructor(x, y, width, height)
    {
        var options = 
        {
            
            density:1,
            restitution:0.6,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display()
      {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("lightblue");
        rect(pos.x, pos.y, this.width, this.height);
      }
}