class Game {

    constructor() {

    }

    getState() {
        var location = database.ref('gameState')
        location.on('value', function (data) {
            gameState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    start() {
        if (gameState===0) {
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(500,200);
        car3=createSprite(1000,200);
        car4=createSprite(1500,200);
        cars=[car1,car2,car3,car4];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if (allPlayers!==undefined) {
            var y_position=130;
            for (var i in allPlayers) {
                if (i==="player"+player.index) {
                    fill ("red");
                } else {
                    fill ("black");
                }
             y_position+=20;
             textSize(15);
             text(allPlayers[i].name+":"+ allPlayers[i].distance, 120, y_position);
            }

        }

        if (keyIsDown(UP_ARROW) && player.index!==null) {
            player.distance+=50;
            player.update();
        }

        drawSprites();
    }
}