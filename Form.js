class Form {
    constructor() {
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

    display() {
        var title = createElement('h2', "Car Racing Game");
        title.position(displayWidth/2-50, 0);
        this.input.position(displayWidth/2-50, 160);
        this.button.position(displayWidth/2+10, 200);
        
        this.button.mousePressed(()=> {
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2, 160);
        })
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();        
    }
}