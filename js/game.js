class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.scoreElement = document.getElementById("score");
        this.livesElement = document.getElementById("lives");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            30,
            50,
            "/images/car.png"
            );
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        
        this.gameLoop();
    }

    gameLoop() {
        if (!this.gameOver) {
            this.update();
            window.requestAnimationFrame(() => this.gameLoop());
        }
        else {
            return;
        }
    }

    update() {
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                this.lives -= 1;
                obstacle.element.remove();
                this.obstacles.splice(i, 1)
                i--;
            } else if (obstacle.top > this.height ) {
                this.score += 1;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
            }
        }

        this.livesElement.innerText = `${this.lives}`;
        this.scoreElement.innerText = `${this.score}`;

        if (this.lives === 0) {
            this.endGame();
        }

        if (this.obstacles.length < 1 && Math.random() > 0.98) {
            console.log("newObstacle");
            this.obstacles.push(new Obstacle(this.gameScreen));
          }
    }

    endGame() {
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}