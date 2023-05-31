class Ball{

    ballDia = 15;
    ballX
    ballY
    constructor(position=[0,0], radius, color=[0,0,0]) {
        let [r,g,b] = color
        this.ballColor = `rgb(${r},${g},${b})`
        this.ballDia = radius
        this.ballX = position[0]
        this.ballY = position[1]

    }
    moveBall(){

    }
    drawBall(){
        context.fillStyle = this.ballColor;
        context.beginPath()
        context.arc(this.ballX, this.ballY, this.ballDia, 0, Math.PI *2)
        context.fill()
    }
    changeSize(diffrence=0){
        this.ballDia+=diffrence
        this.drawBall()
    }

}