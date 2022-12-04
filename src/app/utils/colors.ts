export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function randomColors(n: number) {
  const items = [];

  for (let i = 0; i < n; i++) {
    items.push(randomColor());
  }
  
  return items;
}
