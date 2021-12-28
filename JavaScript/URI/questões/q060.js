prompt = () => {
      return lines.shift();
}

let vetor = [];

for (let i = 1; i <= 6; i++) {
      let num = parseInt(prompt());
      if (num > 0) {
            vetor.push(num);
      }
}

console.log(`${vetor.length} valores positivos`);