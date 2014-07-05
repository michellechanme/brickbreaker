function init () {
    //Create a stage by getting a reference to the canvas
    var stage = new createjs.Stage("demoCanvas");
    //Create a Shape DisplayObject.
    var paddle = new createjs.Shape();
    paddle.graphics.beginFill("blue").drawRect(0, 0, 150, 20);
    //Set position of Shape instance.
    paddle.x = 250;
    paddle.y = 250;
    //Add Shape instance to stage display list.
    stage.addChild(paddle);
    //Update stage will render next frame
    stage.update();
}