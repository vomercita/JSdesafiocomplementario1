//DESAFIO COMPLEMENTARIO

let tabla = Number (prompt (`Elige un número para ver su tabla de multiplicación`))
let hasta = Number (prompt (`Elige hasta qué número quieres multiplicar`))

for (let i = 1;i<=hasta;i++) 
{
    document.write (tabla + " x " + i +" = " + (tabla * i) + "<br>")
} 

