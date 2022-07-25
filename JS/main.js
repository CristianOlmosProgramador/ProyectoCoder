'use strict'; 


// Declarar variables globales. 

let nombreAlumno;
let apellidoAlumno; 
let nota1; 
let nota2; 
let nota3; 
let arrNotas = [];
let menu; 
let seleccionUsuario;
let resultado;
let promedio;
let aprueba;


// Realizo Menú para mostrar por alert.
menu = `Menú principal Registro Digital Tuescuelita.com 
        1. Ingreso de alumnos
        2. Ingreso de asistencia alumnos
        3. Ingreso de Notas
        4. Ingreso de observaciones 
`

// Trabajaremos por mientras solo con la opción 3
seleccionUsuario = parseInt(prompt(menu));

while(isNaN(seleccionUsuario)){
    alert("Opción invalida intente nuevamente!")
    seleccionUsuario = parseInt(prompt(menu));
}

// Para selección de menú, por ahora solo ejecutaremos el número 3.

switch (seleccionUsuario) {
    case 1:
        alert("Menú ingreso de alumnos");
        break;
    case 2:
        alert("Menú Ingeso asistencia de alumnos");
        break;
    case 3:
        alert("Menú Ingreso de notas");
        informacionAlumnos();
        break;
    case "/":
        alert("Menú Ingreso de observaciones");
        break;
    default:
        alert("no ingreso a ningun menú");
        break;
}


function informacionAlumnos(){

    nombreAlumno =   prompt("Ingrese nombre del alumno");
    apellidoAlumno = prompt("Ingrese apellido del alumno");

    console.log(nombreAlumno +" "+ apellidoAlumno);
  
    // Rango de notas mientras que 10 sea la calificación más baja y 70 la calificación más alta.

         nota1 = parseInt(prompt("Ingrese la primera calificación"));
         
     while(nota1 < 10 || nota1 > 70 || isNaN(nota1)){
                alert("Ingrese una calificación válida");
                alert(" Por favor ingrese una calificación de 10 a 70");
                nota1 = parseInt(prompt("Ingrese nuevamente la primera calificación... Rango de 10 a 70"));    
         }
     
         arrNotas.push(nota1);

         nota2 = parseInt(prompt("Ingrese la segunda calificación"));

      while(nota2 < 10 || nota1 > 70 || isNaN(nota2)){
               alert("Ingrese una calificación válida");
               alert(" Por favor ingrese una calificación de 10 a 70");
               nota2 = parseInt(prompt("Ingrese nuevamente la segunda calificación... Rango de 10 a 70"));    
        }
    
        arrNotas.push(nota2);

        nota3 = parseInt(prompt("Ingrese la tercera calificación"));
         
         while(nota3 < 10 || nota3 > 70 || isNaN(nota3)){
                alert("Ingrese una calificación válida");
                alert(" Por favor ingrese una calificación de 10 a 70");
                nota3 = parseInt(prompt("Ingrese nuevamente la tercera calificación... Rango de 10 a 70"));    
         }
     
         arrNotas.push(nota3);
    
       resultado = obtenerNotas(arrNotas);
       promedio = obtenerPromedio(resultado);  
    
       switch (true) {
        case promedio < 40:
            aprueba = 'REPROBADO';
             break;
        case promedio >= 40 && promedio <= 70:
             aprueba = 'APROBADO';
             break;
        default:
            aprueba = 'OCURRIO UN ERROR INESPERADO';
             break;
   }

   console.log(aprueba);

   alert("Estimado Profesor, las siguientes calificaciones : "+ arrNotas[0]+ "," + arrNotas[1]+","+  arrNotas[2]+" "+ " para el alumno " + nombreAlumno + " " + apellidoAlumno + " tienen como promedio final : " + promedio + " y su situación final es : " +aprueba);

}

// Realizo función para obtener notas del array y sumar sus elementos.
  function obtenerNotas(arrNotas){
    let suma = 0;
    arrNotas.forEach (function(numero){
        suma += numero;
    });
    return suma;

}

//Función para obtener el promedio pasando un número como parámetro.
function obtenerPromedio(numero){
    return numero / 3;
}




