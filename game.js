
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
                paddle.x += -15;
            }

                // if A is pressed
            if (65 === event.keyCode) {
                paddle.x += -15;
            }

            // if right arrow is pressed
            if (39 === event.keyCode) {
                paddle.x += 15;
            }

             // if D is pressed
            if (68 === event.keyCode) {
                paddle.x += 15;
            }

            stage.update();
        });
    });
}


