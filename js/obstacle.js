class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.random() * (this.gameScreen.offsetWidth - 100);
        this.top = 600;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement('img');

        this.element.scr = "/images/redCar.png";
        this.element.style.position = "abolute";

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += 3;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
}