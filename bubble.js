class Bubble{

    ballDia = 15;
    ballX
    ballY
    constructor(position=[0,0], radius, color=[0,0,0,1]) {
        let [r,g,b,a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.ballDia = radius
        this.ballX = position[0]
        this.ballY = position[1]

    }
    move(){

    }
    draw(){
        context.fillStyle = this.ballColor;
        context.beginPath()
        if (this.ballDia < 0) this.ballDia = 0
        context.arc(this.ballX, this.ballY, this.ballDia, 0, Math.PI *2)
        context.fill()
    }
    changeSize(diffrence=0){
        this.ballDia+=diffrence
        this.draw()
    }
    changeColor(color=[0,0,0,1]){
        let [r,g,b,a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.draw()
    }
    setSize(size=0){
        this.ballDia = size
        this.draw()
    }

}