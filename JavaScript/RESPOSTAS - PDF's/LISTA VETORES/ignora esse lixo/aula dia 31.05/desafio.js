var mat = [];
 
var n = 3;
var m = 2;
 
for (let i = 0; i < n; i++) {
      mat[i] = [];
      for (let j = 0; j < m; j++) {
            mat[i][j] = parseInt(Math.random() * 10);
      }
}
 
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        document.write(mat[i][j] + " "); 
    } 
	document.write("<br>");
}
 
var s = 0;
 
for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
            s = s +  mat[i][j]; 
      } 
}
 
document.write("<br>" + s + "<br><br>");
document.write(s/(n*m));
 
//identificar o maior elemento de cada linha 
//identificar o maior elemento de toda a matriz
//identificar o maior elemento de cada coluna