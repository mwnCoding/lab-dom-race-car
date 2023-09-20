class Player {
    constructor (left, top, width, height, imageSource) {
        this.gameScreen = document.getElementById('gameScreen');
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element =  this.document.createElement("img");

        this.element.src = imageSource;
        this.element.style.position = "absolute"

        this.element.style.left = this.left;
        this.element.style.top = this.top;
        this.element.style.width = this.width;
        this.element.style.height = this.width;

        this.gameScreen.appendChild(this.element);
        
    }

    move() {
        this.top += this.directionY;
        this.left += this.directionX;

        if (this.left < this.width + 10) {
            this.left = this.width + 10;
        }

        if (this.top < this.height + 10) {
            this.top = this.height + 10;
        }

        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }

        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}`;
        this.element.style.left = `${this.left}`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top 
            ) {
            return true;
        }
        else {
            return false;
        }
    }

    
}