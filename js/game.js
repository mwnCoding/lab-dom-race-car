class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
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
        this.obstacles.push(new Obstacle(this.gameScreen));

        for (const obstacle of this.obstacles) {
            if (this.player.didCollide(obstacle)) {
                this.lives -= 1;
                this.removeObstacle(obstacle);
            }

            if (obstacle.top > this.gameScreen.offsetHeight + obstacle.height) {
                this.score += 1;
                this.removeObstacle(obstacle);
            }

            if (this.lives <= 0) {
                this.endGame();
            }
        }
    }

    endGame() {
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "flex";
    }

    removeObstacle(obstacle) {
        if (this.obstacles.includes(obstacle)) {
            this.obstacle.remove();
            this.obstacles = this.obstacles.filter(currentElement => {
                return currentElement !== obstacle;
            })
        }
    }


}