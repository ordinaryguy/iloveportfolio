let draw_interval;

    let balls = [];

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext('2d');

    class Ball {
        constructor (pos_x, pos_y) {
            this.x = pos_x;
            this.y = pos_y;
            this.sx = Math.floor(Math.random() * 10) + 1;
            this.sy = Math.floor(Math.random() * 10) + 1;
        }

        update() {
            if (this.x < 0 || this.x > canvas.scrollWidth) { this.sx = -this.sx; }
            if (this.y < 0 || this.y > canvas.scrollHeight) { this.sy = -this.sy; }
            this.x += this.sx;
            this.y += this.sy;
        }

        draw(context) {
            context.beginPath();
            context.fillStyle="#000000";
            context.arc(this.x, this.y, 10, 0, Math.PI*2, true);
            context.closePath();
            context.fill();
        }
    }

    function addBall(px, py, sx, sy) {
        balls.push(new Ball(px, py, sx, sy));
    }

    function animate() {
        context.clearRect(0,0, canvas.scrollWidth, canvas.scrollHeight);
        balls.forEach((ball) => {
            ball.update();
            ball.draw(context);
        });
    }

    function toggle_animation() {
        button_text = 'start';
        if (!draw_interval) {
            draw_interval = setInterval(animate, 10);
            button_text = 'stop';
        } else {
            clearInterval(draw_interval);
            draw_interval = null;
        }
        document.getElementById('start_stop_button').value = button_text;
    }
