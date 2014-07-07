
function init () {
    $(function () {
        
        //Create a stage by getting a reference to the canvas
        var stage = new createjs.Stage("demoCanvas");
        
        //Create a Shape DisplayObject.
        var paddle = new createjs.Shape();
        paddle.graphics.beginFill("black").drawRect(0, 0, 100, 15);
        //Set position of Shape instance.
        paddle.x = 200;
        paddle.y = 415;
        //Add Shape instance to stage display list.
        stage.addChild(paddle);
        //Update stage will render next frame
        stage.update();
       
        $('body').on("keydown", function( event ) {
            console.log(event.keyCode)

            // CANVAS WIDTH IS 400
            
            // if left arrow is pressed
            if (37 === event.keyCode) {
                //if (paddle.x <= 300 && paddle.x >= 0) {
                if (paddle.x >= 0) {//if the paddle is not all the way to the left
                    //if (paddle.x <= 400 - 10)
                    paddle.x += -20;//move left
                } 
                
            }

            // if right arrow is pressed
            if (39 === event.keyCode) {
                //if (paddle.x <= 300 - 20 && paddle.x >= 0) {
                if (paddle.x <= 300) {//if the passle is not all the way to the right
                    //if (paddle.x <= 390)
                    paddle.x += 20;//move right
                } 

            }

        stage.update();

        });

        var ball = new createjs.Shape();
        ball.graphics.beginFill("black").drawCircle(0, 0, 8);

        ball.x = paddle.x + 50;
        ball.y = paddle.y - 10;
        stage.addChild(ball);

        // // variables needed to move ball
        // var ballXSpeed:Number = 10; //X Speed of the Ball
        // var ballYSpeed:Number = 10; //Y Speed of the Ball

        // // stage.addChild(ballXSpeed);
        // // stage.addChild(ballYSpeed);

        // // moving the ball
        // ball.x += ballXSpeed;
        // ball.y += ballYSpeed;

        // if(ball.x >= Stage.width-ball.width) {
        // //if the ball hits the right side
        // //of the screen, then bounce off
        // ballXSpeed *= -1;
        // }

        // if(ball.x <= 0){
        //     //if the ball hits the left side
        //     //of the screen, then bounce off
        //     ballXSpeed *= -1;
        // }

        // if(ball.y >= Stage.height-ball.height){
        //     //if the ball hits the bottom
        //     //then bounce up
        //     ballYSpeed *= -1;
        // }

        // if(ball.y <= 0){
        //     //if the ball hits the top
        //     //then bounce down
        //     ballYSpeed *= -1;
        // }


        stage.update();

        //Create a Shape DisplayObject.
        var brick = new createjs.Shape();
        paddle.graphics.beginFill("black").drawRect(0, 0, 60, 15);
        brick.x = 30;
        brick.y = 30;
        stage.addChild(brick);

        //Update stage will render next frame
        stage.update();

    });
}