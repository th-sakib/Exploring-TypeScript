// the process of refining types to more specific types than declared is called narrowing

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") { //typeof is part of type guards
    return " ".repeat(padding) + input;
                    
  }
  return padding + input;
    
}

// instance of // it help us to understand if the value is instance of a class or not
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}