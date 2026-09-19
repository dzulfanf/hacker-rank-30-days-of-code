function main() {
  const n = parseInt(readLine().trim(), 10);

  let max = n.toString(2).split(0).reduce((max, group) => Math.max(max, group.length), 0)

  console.log(max)
}