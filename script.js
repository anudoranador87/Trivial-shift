// Definimos el estado inicial del juego
const SECTORES = {
  recepcion: {
    nombre: "Recepción hotelera",
    emoji: "🏨",
    preguntas: [
      {
        pregunta:
          "Un cliente llega sin reserva y el hotel está lleno. ¿Qué haces?",
        opciones: [
          "Le dices que no es tu problema",
          "Buscas disponibilidad en hoteles cercanos y le ayudas con el transporte",
          "Le dejas dormir en el sofá del lobby",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Qué significa 'Overbooking'?",
        opciones: [
          "Vender más habitaciones de las disponibles",
          "Un tipo de desayuno",
          "Limpiar la habitación dos veces",
        ],
        correcta: 0,
      },
      {
        pregunta:
          "Un cliente se queja de ruido en la habitación de al lado a las 2 AM. ¿Acción inmediata?",
        opciones: [
          "Llamar a la habitación ruidosa y pedir silencio educadamente",
          "Ignorarlo hasta el cambio de turno",
          "Subir y gritarles",
        ],
        correcta: 0,
      },
      {
        pregunta:
          "El datáfono no funciona y el cliente tiene prisa por irse. ¿Qué haces?",
        opciones: [
          "No dejarle salir hasta que pague en efectivo",
          "Tomar los datos de la tarjeta manualmente (si es seguro) o pedirle que pague online después",
          "Dejarle ir gratis",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente dice que ha perdido la llave de su habitación. ¿Protocolo?",
        opciones: [
          "Darle una nueva sin preguntar",
          "Pedir identificación y verificar que es el titular de la reserva",
          "Decirle que duerma en recepción",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Hay una discrepancia: el cliente dice que el desayuno estaba incluido, pero en el sistema no. ¿Qué haces?",
        opciones: [
          "Discutir hasta que admita su error",
          "Si el precio es bajo, invitarle por cortesía y revisar la reserva después",
          "Llamar a seguridad",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente VIP llega 3 horas antes del Check-in y su habitación no está lista. ¿Qué ofreces?",
        opciones: [
          "Que espere en la calle",
          "Guardar su equipaje y ofrecerle una bebida o acceso a zonas comunes",
          "Darle la habitación sucia",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Detectas un olor a humo de tabaco en una habitación de no fumadores. ¿Qué haces?",
        opciones: [
          "Nada",
          "Informar al cliente de la penalización por limpieza especial según política",
          "Fumar tú también",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente pide una recomendación de restaurante 'auténtico'. ¿Qué sugieres?",
        opciones: [
          "El McDonald's de la esquina",
          "Un lugar local que conozcas bien y que no sea puramente turístico",
          "El más caro de la ciudad",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Se produce una inundación en el baño de la 204. ¿Qué es lo primero?",
        opciones: [
          "Llamar a mantenimiento y reubicar al cliente si es necesario",
          "Darle una fregona al cliente",
          "Cerrar la puerta y esperar que se seque",
        ],
        correcta: 0,
      },
      {
        pregunta:
          "Un cliente te entrega una cartera que ha encontrado en el pasillo. ¿Qué haces?",
        opciones: [
          "Quedártela",
          "Registrarla en el libro de Objetos Perdidos con fecha, hora y lugar",
          "Dejarla encima del mostrador",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Llega un grupo de 20 personas sin aviso previo para hacer el check-in a la vez. ¿Estrategia?",
        opciones: [
          "Entrar en pánico",
          "Pedir los DNIs a todos, invitarles a sentarse y procesar las llaves por orden",
          "Cerrar la recepción",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente te pide que le despiertes a las 6 AM (Wake-up call). ¿Qué haces?",
        opciones: [
          "Programar el sistema y hacer una llamada de respaldo manual",
          "Ponerte una alarma en tu móvil personal",
          "Esperar que se despierte solo",
        ],
        correcta: 0,
      },
      {
        pregunta:
          "El cliente dice que el aire acondicionado no enfría. ¿Qué compruebas primero?",
        opciones: [
          "Si las ventanas están abiertas (sensores)",
          "Si el cliente sabe usar el mando",
          "Ambas son correctas",
        ],
        correcta: 2,
      },
      {
        pregunta:
          "Un cliente quiere hacer el Check-out pero dice que el minibar estaba vacío al llegar. ¿Qué haces?",
        opciones: [
          "Cobrarle de todas formas",
          "Creerle por buena fe si no hay historial de problemas y ajustar la factura",
          "Llamar a la policía",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Recibes una llamada externa preguntando si el Sr. García está alojado. ¿Qué respondes?",
        opciones: [
          "Sí, en la 302",
          "Por política de privacidad, no puedo confirmar ni desmentir esa información",
          "No lo sé, búscalo en Facebook",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene una reserva 'No Reembolsable' y quiere cancelar por un imprevisto. ¿Qué haces?",
        opciones: [
          "Cobrarle el 100% sin hablar",
          "Explicar la política y, según el caso, ofrecer cambio de fechas en lugar de devolución",
          "Devolverle todo el dinero sin preguntar",
        ],
        correcta: 1,
      },
      {
        pregunta: "Hay una larga cola en recepción y estás solo. ¿Cómo actúas?",
        opciones: [
          "Atender rápido y mal",
          "Mantener la calma, saludar a los que esperan y pedir paciencia educadamente",
          "Esconderte en la oficina",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente se pone agresivo y empieza a gritar en el lobby. ¿Qué haces?",
        opciones: [
          "Gritar más fuerte",
          "Intentar llevarlo a una zona privada para hablar y, si escala, llamar a seguridad",
          "Llorar",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente pide un 'Late Check-out' hasta las 18:00. ¿Qué respondes?",
        opciones: [
          "Imposible",
          "Verificar disponibilidad y aplicar el cargo correspondiente según política",
          "Decirle que sí gratis aunque el hotel esté lleno",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un huésped te pide que le guardes un paquete que llegará por mensajería. ¿Qué haces?",
        opciones: [
          "Decir que no",
          "Aceptar el paquete, registrarlo y avisar al huésped a su llegada",
          "Abrir el paquete para ver qué hay",
        ],
        correcta: 1,
      },
      {
        pregunta: "El ascensor se ha estropeado con gente dentro. ¿Qué haces?",
        opciones: [
          "Llamar a la empresa de mantenimiento y hablar con los atrapados para calmarles",
          "Intentar abrir la puerta con una palanca",
          "Irte a comer",
        ],
        correcta: 0,
      },
      {
        pregunta: "Un cliente te pide un adaptador de enchufe. ¿Qué haces?",
        opciones: [
          "Venderle el tuyo personal",
          "Prestarle uno del hotel bajo depósito o registro",
          "Decirle que vaya a una tienda a 5km",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente dice que hay una mancha en las sábanas recién puestas. ¿Qué haces?",
        opciones: [
          "Decirle que no es para tanto",
          "Pedir disculpas sinceras y enviar a pisos para cambiarlas inmediatamente",
          "Darle la vuelta a la sábana",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere pagar con una moneda extranjera que no aceptas. ¿Qué haces?",
        opciones: [
          "Aceptar el dinero y quedártelo",
          "Indicarle dónde está la casa de cambio más cercana o el cajero",
          "Llamar al banco central",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Recibes un email de un cliente que olvidó su iPad. ¿Qué haces?",
        opciones: [
          "Ignorarlo",
          "Localizarlo en Objetos Perdidos y coordinar el envío (a cargo del cliente)",
          "Usarlo tú",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente te pide que le reserves un taxi para el aeropuerto. ¿Qué confirmas?",
        opciones: [
          "Solo la hora",
          "Hora, número de personas y cantidad de equipaje",
          "Nada, que salga a la calle",
        ],
        correcta: 1,
      },
      {
        pregunta: "El sistema informático (PMS) se cae. ¿Qué haces?",
        opciones: [
          "Cerrar el hotel",
          "Usar el listado de contingencia en papel (Arrivals/Departures list)",
          "Sentarte a esperar que vuelva",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente pregunta por el horario del gimnasio. ¿Qué haces?",
        opciones: [
          "Inventártelo",
          "Darle la información exacta y ofrecerle una toalla o agua",
          "Decirle que no hay",
        ],
        correcta: 1,
      },
      {
        pregunta: "Un huésped te pide una almohada extra. ¿Qué haces?",
        opciones: [
          "Decirle que use la maleta",
          "Gestionar el envío a la habitación a través de pisos",
          "Subir tú mismo si no hay nadie más disponible",
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente llega borracho y molestando a otros. ¿Qué haces?",
        opciones: [
          "Servirle otra copa",
          "Pedirle que se retire a su habitación discretamente y vigilar la situación",
          "Llamar a la prensa",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente dice que la conexión Wi-Fi es muy lenta. ¿Qué haces?",
        opciones: [
          "Decirle que lea un libro",
          "Reiniciar el router de esa zona o dar un código premium si existe",
          "Reírte",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente te pide que le imprimas su tarjeta de embarque. ¿Qué haces?",
        opciones: [
          "Cobrarle 10€ por hoja",
          "Hacerlo con gusto como parte del servicio al cliente",
          "Decirle que no tienes tinta",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Hay una reserva duplicada para el mismo cliente. ¿Qué haces?",
        opciones: [
          "Cobrar las dos",
          "Contactar con el cliente o la agencia para confirmar y cancelar la sobrante",
          "Asignarle dos habitaciones",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente pregunta si el agua del grifo es potable. ¿Qué respondes?",
        opciones: [
          "No lo sé",
          "Responder según la normativa local de la ciudad",
          "Decir que es veneno para que compre agua",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un huésped se ha dejado las luces encendidas y la tarjeta puesta. ¿Qué haces?",
        opciones: [
          "Entrar y dormir allí",
          "Retirar la tarjeta para ahorrar energía y cerrar bien la puerta",
          "Nada",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente te pide que le guardes comida en la nevera de recepción. ¿Qué haces?",
        opciones: [
          "Comértela",
          "Explicar si es posible por higiene o si hay minibar en la habitación",
          "Decir que sí y mezclarla con tu comida",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente se queja de que el precio en la web es más barato que el que le das. ¿Qué haces?",
        opciones: [
          "Decirle que miente",
          "Verificar la web y, si es posible, igualar la tarifa para asegurar la venta directa",
          "Subirle el precio más",
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente te pide un mapa de la ciudad. ¿Qué haces?",
        opciones: [
          "Dibujarlo en una servilleta",
          "Entregarle un mapa, marcar el hotel y los puntos de interés principales",
          "Decirle que use Google Maps y ya",
        ],
        correcta: 1,
      },
      {
        pregunta: "Un huésped dice que ha visto una cucaracha. ¿Qué haces?",
        opciones: [
          "Decir que es la mascota del hotel",
          "Pedir disculpas, cambiarle de habitación y avisar a control de plagas",
          "Pisarla y no decir nada",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere entrar en el spa pero no tiene reserva. ¿Qué haces?",
        opciones: [
          "Dejarle entrar gratis",
          "Comprobar el aforo y reservarle el próximo hueco disponible",
          "Decirle que está roto",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente te pide que le llames a un restaurante para reservar mesa. ¿Qué haces?",
        opciones: [
          "Darle el teléfono y que llame él",
          "Hacer la gestión tú mismo para dar un servicio excelente",
          "Decir que no tienes línea externa",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un huésped te pide que le despiertes porque tiene un vuelo importante. ¿Qué haces?",
        opciones: [
          "Llamar una vez y colgar",
          "Asegurarte de que responde y, si no, enviar a alguien a la puerta",
          "Olvidarte",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente se queja de que la habitación huele a pintura. ¿Qué haces?",
        opciones: [
          "Decirle que es 'olor a nuevo'",
          "Cambiarle de habitación inmediatamente",
          "Abrir la ventana y dejarle allí",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente te pide que le prestes dinero para un taxi. ¿Qué haces?",
        opciones: [
          "Dárselo de tu bolsillo",
          "Explicar que no puedes prestar efectivo pero ofrecer alternativas (pagar taxi con tarjeta)",
          "Llamar a su familia",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "El cliente dice que no hay toallas limpias en la piscina. ¿Qué haces?",
        opciones: [
          "Decirle que se seque al sol",
          "Avisar a mantenimiento/pisos para reponerlas cuanto antes",
          "Darle tu propia toalla",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un huésped te pide que le guardes las llaves del coche. ¿Qué haces?",
        opciones: [
          "Irte a dar una vuelta con el coche",
          "Etiquetarlas y guardarlas en la caja fuerte de recepción",
          "Dejarlas en el mostrador",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente pregunta por el mejor transporte al centro. ¿Qué recomiendas?",
        opciones: [
          "El más caro",
          "Dar opciones de bus, metro y taxi con precios y tiempos estimados",
          "Que vaya andando (aunque esté a 10km)",
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente te da una propina generosa. ¿Qué haces?",
        opciones: [
          "Gritar de alegría",
          "Agradecer educadamente y seguir las normas del hotel sobre propinas",
          "Rechazarla con desprecio",
        ],
        correcta: 1,
      },
      {
        pregunta: "Es el final de tu turno y tu relevo no llega. ¿Qué haces?",
        opciones: [
          "Irte a casa, el hotel se cuida solo",
          "Informar al responsable y quedarte hasta que alguien te sustituya",
          "Cerrar la puerta con llave",
        ],
        correcta: 1,
      },
    ],
  },
};

const gameState = {
  tablero: [null, null, null, null, null, null, null, null, null],
  jugadorActual: "X",
  nombres: { X: "", O: "" },
  esActivo: true,
};

//Aqui es donde vamos a iniciar la partida empezar a jugar

const empiezoPartida = document.getElementById("start-game");
const screenConfig = document.getElementById("setup-screen");
const screenGame = document.getElementById("game-screen");
const turnoPlayer = document.getElementById("current-player-name"); // habra que traerlo tambien!!
empiezoPartida.addEventListener("click", () => {
  screenConfig.classList.add("hidden");
  screenGame.classList.remove("hidden");

  gameState.nombres.X = document.getElementById("player1").value;
  gameState.nombres.O = document.getElementById("player2").value;

  //hay que meter al player1 en el padre, el value en el span. que es el nombre
  turnoPlayer.textContent = gameState.nombres.X;
});

//PASO 3: Seleccionar las celdas y crear un array con ellas del 1 al 9, traemos todas del HTML
//POR cada  celda agregamos un eventListener con un forEach
const celdas = document.querySelectorAll(".cell");

celdas.forEach((celda) => {
  celda.addEventListener("click", () => {
    if (gameState.tablero[celda.dataset.index] === null) {
      renderTarjetas(celda.dataset.index);
    }
  });
});

//PASO 4 RENDERIZADO DE renderTarjetas

let contador = 0; // vive fuera para que no se reinicie dentro cada vez que se llama
const textPreguntas = document.getElementById("question-text");
const opcionesContainer = document.getElementById("options-container");
const modal = document.getElementById("question-modal");

function renderTarjetas(index) {
  let seleccionPreguntas = SECTORES.recepcion.preguntas[contador];
  textPreguntas.textContent = seleccionPreguntas.pregunta;
  seleccionPreguntas.opciones.forEach((opcion, indiceOpcion) => {
    const creamosBoton = document.createElement("button");
    creamosBoton.textContent = opcion;
    creamosBoton.addEventListener("click", () => {
      validarRespuesta(indiceOpcion, seleccionPreguntas.correcta, index);
    });
    opcionesContainer.appendChild(creamosBoton);
  });
  // quitar el hidden
  modal.classList.remove("hidden");
  contador += 1;
}

//PASO 5 Y MAS IMPORTANTE, VALIDAR RESPUESTA

function validarRespuesta(indiceOpcion, correcta, index) {
  modal.classList.add("hidden");

  if (indiceOpcion === selecionPreguntas.correcta) {
    marcarGanador(index);
  }
}
