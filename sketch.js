const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//declarando as variáveis para fruta, corda, conexão e solo:
var solo, fruta, link, corda;
var mais_leve;
var ligacao;

var cor = "green";

function setup() {
    createCanvas(1500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;
    //criar o objeto da classe Ground
    solo = new Ground(width/2, 680, width, 40);


    //criar o corpo da fruta
    fruta = Bodies.circle(250,100,20);
    



    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
}

function draw() {
    background("cyan");

    //mostrar o solo
    solo.show();



    fill(cor);
    //mostrar a fruta   
    ellipse(fruta.position.x, fruta.position.y, 20);

    Engine.update(engine);
}

function mouseDragged(){
    cor="red";  
    Body.setPosition(fruta, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    cor = "green";
}