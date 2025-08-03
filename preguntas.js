const estaciones = {
    "Avión": ['¿A quién perteneció el avión que está en la cuesta de la ETSIAE?'],
    "Hall Edifico C": ['¿Cuantas etapas (anillos) de alabes tiene el compresor pintado de azul?'],
    "Hangar": ['¿Que avión se encuentra en el centro del hangar?'],
    "Aula Iberia": ['¿Qué simulador se utiliza en esta aula?'],
    "Centro de Cálculo": ['¿Qué tengo que hacer para acceder desde casa al centro de cálculo?'],
    "Aula Airbus": ['¿Que aeronaves hay en la puerta principal? '],
    "Edificio B": ['¿Quién inauguró el edificio B? '],
    "Secretaría": ['¿A que edificio pertenece la secretaría de alumnos? '],
    "Helicóptero": ['¿Qué distintivo de cola tiene? ¿Qué significa? '],
    "Aula Miguel Ángel Barcala": ['¿Quién fue Miguel Ángel Barcala?'],
    "E3": ['¿Que no se puede hacer si estás esperando a entrar en un exámen en la E3? '],
    "Cafetería": ['¿A cuánto está el bocata lomo-queso? '],
    "Asociaciones": ['¿A quién tengo que llamar si quiero apuntarme a Balonmano? '],
    "Publicaciones": ['¿Dónde está el timbre? ¿Qué horario tiene? '],
    "E1": ['¿Qué puedo tirar en un contenedor especial mientras espero a un examen? '],
    "Claustro": ['¿Cuantos cuadros de antiguos directores hay?'],
    "E2": ['¿Cuantas columnas de sillas hay?'],
    "A015": ['¿Quién da nombre a esta aula? ¿Qué hizo?'],
    "Biblioteca A": ['¿Cuántas taquillas hay de préstamos de portátil?']
};

const ordenEstaciones = Object.keys(estaciones);

function sacarPregunta(){
    const estacion = new URLSearchParams(document.location.search).get("estacion");
    
    if (!estacion || !estaciones.hasOwnProperty(estacion)) {
        window.location.replace("https://aeroespacial.da.upm.es/yincana/");
        return;
    }

    const preguntas = estaciones[estacion];
    const siguiente_estacion = ordenEstaciones[ordenEstaciones.indexOf(estacion)+1]

    document.getElementById("estacion").innerHTML = estacion;
    document.getElementById("pregunta").innerHTML = preguntas[Math.floor(Math.random() * preguntas.length)];

    if(siguiente_estacion != null){
        document.getElementById("estacion_next").innerHTML = "<b>Próxima Estación</b>: " + "<i>" + siguiente_estacion + "</i>";
    }else{
        document.getElementById("estacion_next").innerHTML = "¡Última Estación!";
    }

}
