// enum Direction {
//   UP = "up",
//   DOWN = "down",
//   LEFT = "left",
//   Right = "Right",
// }
//* Enum coverts into a iife which is memory consuming task

const Direction = {
  Up: "UP",
  Down: "DOWN",
  Left: "LEFT",
  Right: "RIGHT",
} as const; //* as const make the object properties readonly
//* readonly is a modifier which make properties immutable

function movemaker(direction: typeof Direction[keyof typeof Direction]) {
  if (direction === Direction.Up) {
    console.log("move up");
  }
  if (direction === Direction.Down) {
    console.log("move down");
  }
  if (direction === Direction.Left) {
    console.log("move left");
  }
  if (direction === Direction.Right) {
    console.log("move right");
  }
}
/*
  `keyof typeof Direction`
  what this means?
  1. Direction = {
    Up: "UP",
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT",
  } 
  2. typeof Direction:
    type Direction = {
      Up: "UP",
      Down: "DOWN",
      Left: "LEFT",
      Right: "RIGHT",
    }
  3. keyof typeof direction:
    Up | Down | Left | Right => keys
  4. typeof Direction[keyof typeof Direction]
      - typeof Direction[Up | Down | Left | Right]
      - returns the values: UP | DOWN | LEFT | RIGHT
  */
