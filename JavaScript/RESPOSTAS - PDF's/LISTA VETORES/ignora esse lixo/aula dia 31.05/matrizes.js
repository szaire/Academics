var mat = [];

var n = 3;
var m = 2;
var s = 0;

for (let i = 0; i < n; i++) {
      mat[i] = [];
      for (let j = 0; j < m; j++) {
            mat[i][j] = parseInt(Math.random() * 10);
      }
}

for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
            s = s +  mat[i][j]; 
      } 
}

for (let i = 0; i < mat[i].length; i++) {
      document.write(`${mat[i]}<br>`);
}

document.write(s + "<br>");