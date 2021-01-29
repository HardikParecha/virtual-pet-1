
var dog,happyDog,database,foodS,foodStock,readStock;
var Dog;

function preload()
{
dog = loadImage("dogImg.png")
happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  Dog=createSprite(400,350,30,30)
  Dog.addImage(dog);
  Dog.scale=0.3;

  foodStock=database.ref('foodS');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

}



