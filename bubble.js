class Bubble{

    radius
    ballX
    ballY
    scale
    constructor(position=[0,0], radius, color=[0,0,0,1] ,scale=1) {
        let [r,g,b,a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.radius = radius
        this.ballX = position[0]
        this.ballY = position[1]
        this.scale = scale


    }
    move(){

    }
    draw(){
        context.fillStyle = this.ballColor;
        context.beginPath()
        let size = this.radius*this.scale
        if (size<0){
            size=0
            console.error(this, "Size is negative")
        }
        context.arc(this.ballX, this.ballY, size, 0, Math.PI *2)
        context.fill()
        context.closePath()
    }

    changeColor(color=[0,0,0,1]){
        let [r,g,b,a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.draw()
    }
    //Changes the size of the bubble by a diffrence
    changeSize(diffrence=0){
        this.radius+=diffrence
        this.draw()
    }

    //Sets the size of the bubble absolute
    setSize(size=0){
        this.radius = size
        this.draw()
    }

    //Sets the position of the bubble
    setPosition(position=[0,0]){
        this.ballX = position[0]
        this.ballY = position[1]
        this.draw()
    }


}