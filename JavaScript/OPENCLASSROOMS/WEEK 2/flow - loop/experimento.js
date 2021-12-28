class User {
      constructor(name, age, gender, job) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.job = job;
      }
}

let n = parseInt(prompt(`Type the quantity of workers in here`));
let worker = [];

for (let i = 0; i < n; i++) {
      let name = prompt(`Name of worker ${i+1}:`);
      let age = prompt(`Age of worker ${i+1}:`);
      let gender = prompt(`Gender of worker ${i+1}:\n- F for female\n- M for male`);
      let job = prompt(`Job of worker ${i+1}:`);

      worker.push(new User(name, age, gender, job));
}

worker.forEach((valor, i) => {
      document.write(`O nome é ${valor.name}<br>`);
      document.write(`A idade é ${valor.age}<br>`);
      document.write(`O genero é ${valor.gender == "F" ? "Mulher" : "Homem"}<br>`);
      document.write(`O trabalho é ${valor.job}<br><br>`);
});

document.write(worker);