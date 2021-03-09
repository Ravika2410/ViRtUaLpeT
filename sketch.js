var foodObj;
var b,u;
var fd;
var db;
var fc=0;
var am;
var dog,d;

function preload()
{
    d=loadImage("d.png");
}

function setup()
{
    createCanvas(1000,500);

    fd=createButton("feed");
    am=createButton("add");

    db=firebase.database();
    foodObj=new food();

    dog=createSprite(800,250);
    dog.addImage(d);
    dog.scale=0.8;

}

function draw()
{
    background("#59FF00");

    getCount();

    fd.position(300,70);
   fd.mousePressed(function()
{
    console.log(37);
    fc-=1;
    db.ref("/").update({"foodCount":fc});
}
);

    am.position(450,70);
    am.mousePressed(function()
{
    fc+=1;
    db.ref("/").update({"foodCount":fc});
}
);

   // text(fc,400,250);
    foodObj.display();

    textSize(30);
    stroke("red");
    text("Your Virtual Pet",300,40);

    drawSprites();
}

async function getCount()
{
    await db.ref("foodCount").on("value",function(d){fc=d.val()},function(){});
    console.log(fc);
}