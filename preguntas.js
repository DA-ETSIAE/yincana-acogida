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
    ["Biblioteca A", 19]
]);


var preguntas_avion = ['¿A quién perteneció el avión que está en la cuesta de la ETSIAE?'];
var preguntas_hallc = ['¿Cuantas etapas (anillos) de alabes tiene el compresor pintado de azul?'];
var preguntas_hangar = ['¿Qué avión se encuentra en el centro del hangar?'];
var preguntas_iberia = ['Recuperando datos. Espere unos segundos e intente cortar o copiar de nuevo.'];
var preguntas_cdc = ['¿Qué tengo que hacer para acceder desde casa al centro de cálculo?'];
var preguntas_airbus = ['¿Que aeronaves hay en la puerta principal? '];
var preguntas_edifb = ['¿Quién inauguró el edificio B? '];
var preguntas_secretaria = ['¿A que edificio pertenece la secretaría de alumnos? '];
var preguntas_helicoptero = ['¿Qué distintivo de cola tiene? ¿Qué significa? '];
var preguntas_barcala = ['Quién fue Miguel Ángel Barcala'];
var preguntas_e3 = ['¿Que no se puede hacer si estás esperando a entrar en un exámen en la E3? '];
var preguntas_cafeteria = ['¿A cuánto está el bocata lomo-queso? '];
var preguntas_asociaciones = ['¿A quién tengo que llamar si quiero apuntarme a Balonmano? '];
var preguntas_publicaciones = ['¿Dónde está el timbre? ¿Qué horario tiene? '];
var preguntas_e1 = ['¿Qué puedo tirar en un contenedor especial mientras espero a un examen? '];
var preguntas_claustro = ['¿Cuantos cuadros de antiguos directores hay?'];
var preguntas_e2 = ['¿Cuantas columnas de sillas hay?'];
var preguntas_a015 = ['¿Quién da nombre a esta aula? ¿Que hizo?'];
var preguntas_biblioteca = ['¿Cuántas taquillas hay de préstamos de portátil?'];


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

    if (estacion != null){
        let estacion_nr = est2numb.get(estacion);
    
        if (estacion_nr == null)
            window.location.replace("https://aeroespacial.da.upm.es/yincana/");

        var preguntas = matriz_preguntas[estacion_nr-1];
        document.getElementById("estacion").innerHTML = estacion;
        document.getElementById("pregunta").innerHTML = preguntas[Math.floor(Math.random() * preguntas.length)];
    }
}
