
class ball {
    constructor(x, y, radius) {
        var opt = {
            'isStatic': false,
            'restution': 0.3,
            'friction': 0.5,
            ' density': 1.4
        }
        this.x = x;
        this.y = y;
        this.r = radius
        this.image = loadImage("paper.jpg");
        this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, opt);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("pink");
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }


}

