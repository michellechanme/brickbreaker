
function init () {
    $(function () {
        //Create a stage by getting a reference to the canvas
        var stage = new createjs.Stage("demoCanvas");
        //Create a Shape DisplayObject.
        var paddle = new createjs.Shape();
        paddle.graphics.beginFill("blue").drawRect(0, 0, 100, 15);
        //Set position of Shape instance.
        paddle.x = 200;
        paddle.y = 365;
        //Add Shape instance to stage display list.
        stage.addChild(paddle);
        //Update stage will render next frame
        stage.update();

        $('body').on("keydown", function( event ) {
            console.log(event.keyCode)
            
            // if left arrow is pressed
            if (37 === event.keyCode) {
                if (paddle.x <= 400 - 10 && paddle.x >= 0 + 10) {
                    paddle.x += -10;
                } else if (paddle.x === 400) {
                    paddle.x += -10;
                }
                
            }

            // if right arrow is pressed
            if (39 === event.keyCode) {
                if (paddle.x <= 400 - 10 && paddle.x >= 0 + 10) {
                    paddle.x += 10;
                } else if (paddle.x === 0) {
                    paddle.x += 10;
                }
            }

            stage.update();
        });
    });
}


