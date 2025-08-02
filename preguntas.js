const est2numb = new Map([
        ["Hangar", 0],
        ["Edificio A", 1]]);


var preguntas_hangar = ['Pregunta1', 'Pregunta2', 'Pregunta3'];
var preguntas_edifa = ['PreguntaX', 'PreguntaY', 'PreguntaZ'];

var matriz_preguntas = [preguntas_hangar, preguntas_edifa];

function sacarPregunta(estacion) {
  let estacion_nr = est2numb.get(estacion);

  if (estacion_nr == null)
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");


  var preguntas = matriz_preguntas[estacion_nr];
  document.getElementById("pregunta").innerHTML = preguntas[Math.floor(Math.random() * preguntas.length)];



}

