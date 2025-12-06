//* Enum
//* Enum is way to define a set of **named constants**.

/*
 * * problem without enum
 * * let's say we want to deal with direction.
 * * Without enum we have to check every direction from direction type.
 * * While make the dev experienve a bit hactic and error-prone
 * */

type DirectionWithoutEnum = "up" | "down" | "left" | "right";

function move(direction: DirectionWithoutEnum) {
  if (direction === "up") {
    console.log("move up");
  }
  if (direction === "down") {
    console.log("move down");
  }
  if (direction === "left") {
    console.log("move left");
  }
  if (direction === "right") {
    console.log("move right");
  }
}

/*
 * * By using enum we can use the dot notation to access the values.
 * * it makes the code less error-prone
 * */
enum Direction {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  Right = "Right",
}

function moveMaker(direction: Direction) {
  if (direction === Direction.UP) {
    console.log("move up");
  }
  if (direction === Direction.DOWN) {
    console.log("move down");
  }
  if (direction === Direction.LEFT) {
    console.log("move left");
  }
  if (direction === Direction.Right) {
    console.log("move right");
  }
}
