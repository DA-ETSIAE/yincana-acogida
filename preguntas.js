const est2numb = new Map([
        ["Avión", 1],
        ["Hall Edifico C", 2],
        ["Hangar", 3],
        ["Aula Iberia", 4],
        ["Centro de Cálculo", 5],
        ["Aula Airbus", 6],
        ["Edificio B", 7],
        ["Secretaría", 8],
        ["Helicóptero", 9],
        ["Aula Miguel Ángel Barcala", 10],
        ["E3", 11],
        ["Cafetería", 12],
        ["Asociaciones", 13],
        ["Publicaciones", 14],
        ["E1", 15],
        ["Claustro", 16],
        ["E2", 17],
        ["A015", 18],
        ["Biblioteca A", 19]]);


var preguntas_avion = ['Pregunta1'];
var preguntas_hallc = ['Pregunta2'];
var preguntas_hangar = ['Pregunta3'];
var preguntas_iberia = ['Pregunta4'];
var preguntas_cdc = ['Pregunta5'];
var preguntas_airbus = ['Pregunta6'];
var preguntas_edifb = ['Pregunta7'];
var preguntas_secretaria = ['Pregunta8'];
var preguntas_helicoptero = ['Pregunta9'];
var preguntas_barcala = ['Pregunta10'];
var preguntas_e3 = ['Pregunta11'];
var preguntas_cafeteria = ['Pregunta12'];
var preguntas_asociaciones = ['Pregunta13'];
var preguntas_publicaciones = ['Pregunta14'];
var preguntas_e1 = ['Pregunta15'];
var preguntas_claustro = ['Pregunta16'];
var preguntas_e2 = ['Pregunta17'];
var preguntas_a015 = ['Pregunta18'];
var preguntas_biblioteca = ['Pregunta19'];


var matriz_preguntas = [
  preguntas_avion,
  preguntas_hallc,
  preguntas_hangar,
  preguntas_iberia,
  preguntas_cdc,
  preguntas_airbus,
  preguntas_edifb,
  preguntas_secretaria,
  preguntas_helicoptero,
  preguntas_barcala,
  preguntas_e3,
  preguntas_cafeteria,
  preguntas_asociaciones,
  preguntas_publicaciones,
  preguntas_e1,
  preguntas_claustro,
  preguntas_e2,
  preguntas_a015,
  preguntas_biblioteca,
];

let params = new URLSearchParams(document.location.search);
let estacion = params.get("estacion");

function sacarPregunta(estacion) {
  let estacion_nr = est2numb.get(estacion);

  if(estacion != null){
        if (estacion_nr == null)
                  window.location.replace("https://aeroespacial.da.upm.es/yinkana/");
        var preguntas = matriz_preguntas[estacion_nr]; 
        document.getElementById("pregunta").innerHTML = preguntas[Math.floor(Math.random() * preguntas.length)];
  }else{
        document.getElementById("estacion").innerHTML = "Jornada de Acogida";
        document.getElementById("estacion").innerHTML = "Delegación de Alumnos ETSIAE";
        
}

