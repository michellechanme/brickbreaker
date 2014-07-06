
function init () {
    $(function () {
        
        //Create a stage by getting a reference to the canvas
        var stage = new createjs.Stage("demoCanvas");
        
        //Create a Shape DisplayObject.
        var paddle = new createjs.Shape();
        paddle.graphics.beginFill("black").drawRect(0, 0, 100, 15);
        //Set position of Shape instance.
        paddle.x = 170;
        paddle.y = 410;
        //Add Shape instance to stage display list.
        stage.addChild(paddle);
        //Update stage will render next frame
        stage.update();
       
        $('body').on("keydown", function( event ) {
            console.log(event.keyCode)

            // CANVAS WIDTH IS 400
            
            // if left arrow is pressed
            if (37 === event.keyCode) {
                if (paddle.x <= 300 && paddle.x >= 0) {
                    paddle.x += -20;
                } else if (paddle.x === 0) {
                    paddle.x += -20;
                }
                
            }

            // if right arrow is pressed
            if (39 === event.keyCode) {
                if (paddle.x <= 300 && paddle.x >= 0) {
                    paddle.x += 20;
                } else if (paddle.x === 0) {
                    paddle.x += 20;
                }
            }

        stage.update();

        });

        var ball = new createjs.Shape();
        ball.graphics.beginFill("black").drawCircle(0, 0, 8);
        ball.x = paddle.x + 50;
        ball.y = paddle.y - 10;
        stage.addChild(ball);

        stage.update();

        //Create a Shape DisplayObject.
        var brick = new createjs.Shape();
        paddle.graphics.beginFill("white").drawRect(0, 0, 60, 15);
        brick.x = 30;
        brick.y = 30;
        stage.addChild(brick);

        //Update stage will render next frame
        stage.update();

    });
}