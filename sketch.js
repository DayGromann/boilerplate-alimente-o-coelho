
//namespacing dos módulos
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;
var solo;

function preload(){



}

function setup() {
  createCanvas(500,700)
  engine = Engine.create();
  world = engine.world;
  solo = new Ground(width/2, height - 20, width, 30);
}

function draw() {
  background(51);
  
  solo.show();
}

