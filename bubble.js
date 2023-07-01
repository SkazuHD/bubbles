class Bubble {

    radius
    ballX
    ballY
    scale
    text
    isHovered

    constructor(position = [0, 0], radius, color = [0, 0, 0, 1], scale = 1, text = "") {
        this.text = text
        let [r, g, b, a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.radius = radius
        this.ballX = position[0]
        this.ballY = position[1]
        this.scale = scale
        this.addHover();

    }

    move() {

    }

    draw(scale = this.scale, outline = false) {
        let size = this.radius * scale
        if (size < 0) {
            size = 0
            console.error(this, "Size is negative")
        }
        if (outline){
            if (this.isHovered)return
            this.isHovered = true
            context.fillStyle = "rgba(0,0,0, .5)"
            context.beginPath()
            context.arc(this.ballX, this.ballY, size+5, 0, Math.PI * 2)
            context.fill()
            context.closePath()

            let image =new Image(400, 400)
            image.src = "https://images.unsplash.com/photo-1493329025335-18542a61595f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
            image.onload = () =>{
                let posx = this.ballX - (this.radius * this.scale)
                let posy = this.ballY - (this.radius * this.scale)
                console.log(posx, posy)
                setTimeout(()=>{
                    context.drawImage(image, posx , posy, this.radius * 2 * this.scale ,this.radius * 2 * this.scale)

                },10)


            }
        }else this.isHovered = false

        context.fillStyle = this.ballColor;
        context.beginPath()

        context.arc(this.ballX, this.ballY, size, 0, Math.PI * 2)
        context.fill()
        context.closePath()


    }

    changeColor(color = [0, 0, 0, 1]) {
        let [r, g, b, a] = color
        this.ballColor = `rgba(${r},${g},${b},${a})`
        this.draw()
    }

    //Changes the size of the bubble by a diffrence
    changeSize(diffrence = 0) {
        this.radius += diffrence
        this.draw()
    }

    //Sets the size of the bubble absolute
    setSize(size = 0) {
        this.radius = size
        this.draw()
    }

    //Sets the position of the bubble
    setPosition(position = [0, 0]) {
        this.ballX = position[0]
        this.ballY = position[1]
        this.draw()
    }

    //Add hover effect to the bubble
    addHover() {
        canvas.addEventListener('mousemove', (e) => {
            //Only works on 1:1 canvas ratio
            let rect = canvas.getBoundingClientRect();
            let mouseX = e.clientX - rect.left
            let mouseY = e.clientY - rect.top
            let distance = [mouseX - this.ballX, mouseY - this.ballY]
            distance = Math.sqrt(distance[0] * distance[0] + distance[1] * distance[1])

            if (distance < this.radius * this.scale) {

                const event = new Event('bubbleHover')
                event.bubble = this
                canvas.dispatchEvent(event)

                this.draw(this.scale, true)
            } else {
                const event = new Event('bubbleHover')
                event.bubble = null
                // canvas.dispatchEvent(event)
            }
        })
    }


}