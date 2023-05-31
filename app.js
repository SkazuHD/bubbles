const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

let water = new Ball([400, 400], 10, [0,0,255])
water.drawBall()
setInterval(()=>{
    water.changeSize(5)
}, 2000)