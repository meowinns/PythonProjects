export function decodedValue(colors: string[]): number {
  const firstColor = COLORS.indexOf(colors[0]);
  const secondColor = COLORS.indexOf(colors[1]);
  
  /*This is just in case there is an invalid color sent*/
  if (firstColor === -1 || secondColor === -1){
    throw new Error("Invalid Color");
  }
  
  return firstColor * 10 + secondColor; 
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]
