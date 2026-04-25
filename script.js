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
          "Servirle más bebidas",
          "Intentar hablar con él en privado y, si persiste, llamar a seguridad",
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
  fitness: {
    nombre: "Entrenamiento Personal",
    emoji: "💪",
    preguntas: [
      {
        pregunta: "Un cliente llega sin haber desayunado. ¿Qué haces?",
        opciones: [
          "Empiezas el entrenamiento de inmediato",
          "Le ofreces un snack ligero y esperas 15 minutos antes de empezar",
          "Le dices que debería haber comido antes",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es el rango de frecuencia cardíaca ideal para cardio?",
        opciones: [
          "50-70% de tu FCM",
          "70-85% de tu FCM",
          "90-100% de tu FCM",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente se queja de dolor en la rodilla durante sentadillas. ¿Acción inmediata?",
        opciones: [
          "Continuar el ejercicio para que se adapte",
          "Parar, revisar la forma y ajustar la amplitud de movimiento",
          "Cambiar a un ejercicio más pesado",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "¿Cuánto tiempo debe descansar un cliente entre series de fuerza?",
        opciones: [
          "30-45 segundos",
          "60-90 segundos",
          "2-3 minutos",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere hacer solo ejercicio de pecho. ¿Qué le recomiendas?",
        opciones: [
          "Respetar su deseo, es lo que quiere",
          "Explicar la importancia del equilibrio muscular y crear un plan balanceado",
          "Decirle que es imposible",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia del calentamiento previo?",
        opciones: [
          "Solo para perder tiempo",
          "Preparar el cuerpo, aumentar temperatura y prevenir lesiones",
          "No es necesario si estás en forma",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene una lesión previa en el hombro. ¿Qué haces?",
        opciones: [
          "Evitas completamente ejercicios de hombro",
          "Preguntas detalles, adaptas los ejercicios y posiblemente consultas con un fisio",
          "Empiezas con pesos pesados para fortalecer",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuántas veces a la semana debe entrenar un principiante?",
        opciones: [
          "1-2 veces",
          "3-4 veces",
          "6-7 veces",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente no ve resultados después de 2 semanas. ¿Qué le dices?",
        opciones: [
          "Que abandone, no funciona",
          "Que sea paciente, los cambios tardan 4-6 semanas mínimo",
          "Que pague más por resultados garantizados",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia de la hidratación durante el ejercicio?",
        opciones: [
          "No es importante",
          "Mantener el rendimiento, regular temperatura y prevenir deshidratación",
          "Solo si tienes sed",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere perder 10kg en 2 semanas. ¿Qué le recomiendas?",
        opciones: [
          "Un plan extremo para lograrlo",
          "Un déficit calórico moderado y realista de 0.5-1kg por semana",
          "Que coma solo proteína",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es el mejor momento para entrenar?",
        opciones: [
          "Siempre a las 6 AM",
          "El que mejor se adapte a su rutina y consistencia",
          "Nunca por la noche",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene mareos durante el entrenamiento. ¿Qué haces?",
        opciones: [
          "Continúa para que se acostumbre",
          "Paras, lo sientas, le das agua y evalúas qué pasó",
          "Lo envías a casa",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia del estiramiento post-entrenamiento?",
        opciones: [
          "No sirve para nada",
          "Reducir tensión muscular, mejorar flexibilidad y recuperación",
          "Solo para gente mayor",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere entrenar con dolor muscular del día anterior. ¿Qué le aconsejas?",
        opciones: [
          "Que descanse completamente",
          "Que haga ejercicio ligero o diferente grupo muscular",
          "Que entrene igual de fuerte",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuánta proteína debe consumir un cliente en construcción muscular?",
        opciones: [
          "0.5g por kg de peso",
          "1.6-2.2g por kg de peso",
          "4g por kg de peso",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente se aburre del mismo programa. ¿Qué le sugieres?",
        opciones: [
          "Que continúe igual",
          "Variar ejercicios, series, repeticiones o intensidad cada 4-6 semanas",
          "Que deje de entrenar",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia del descanso y recuperación?",
        opciones: [
          "No es importante, solo entrena",
          "Es cuando el músculo crece y se recupera el sistema nervioso",
          "Solo para gente perezosa",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene un evento importante en 4 semanas. ¿Qué haces?",
        opciones: [
          "Cambias completamente su programa",
          "Adaptas su plan para maximizar resultados en ese plazo",
          "Le dices que es imposible",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es el mejor ejercicio para principiantes?",
        opciones: [
          "Los más complicados",
          "Movimientos compuestos con buena forma: sentadillas, flexiones, filas",
          "Solo máquinas",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene presión arterial alta. ¿Qué precauciones tomas?",
        opciones: [
          "No lo entrenas",
          "Monitoreas, evitas ejercicios de Valsalva extremo y consultas con su médico",
          "Lo entrenas igual que a los demás",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuándo es el mejor momento para hacer cardio?",
        opciones: [
          "Siempre antes de pesas",
          "Depende del objetivo: antes para quemar más grasa o después para no afectar fuerza",
          "Nunca",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere suplementos para ganar músculo. ¿Qué le dices?",
        opciones: [
          "Que son la solución mágica",
          "Que primero debe tener dieta y entrenamiento en orden, luego considerar suplementos",
          "Que no sirven",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia de la progresión en el entrenamiento?",
        opciones: [
          "No importa",
          "Aumentar gradualmente peso, repeticiones o intensidad para continuar mejorando",
          "Siempre hacer lo mismo",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente tiene poco tiempo disponible. ¿Qué le recomiendan?",
        opciones: [
          "Que no entrene",
          "Entrenamientos cortos pero intensos, 3-4 veces por semana",
          "Que se tome un año sabático",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es el mejor tipo de cardio para quemar grasa?",
        opciones: [
          "Solo correr",
          "Cualquiera que sea consistente: caminar, nadar, ciclismo, HIIT",
          "No hay cardio efectivo",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente se lesiona durante una sesión. ¿Cuál es tu responsabilidad?",
        opciones: [
          "Ignorarlo y continuar",
          "Parar, evaluar, documentar y derivar a un profesional si es necesario",
          "Culparlo de la lesión",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuánto debe durar una sesión de entrenamiento típica?",
        opciones: [
          "15 minutos",
          "45-60 minutos",
          "2-3 horas",
        ],
        correcta: 1,
      },
      {
        pregunta:
          "Un cliente quiere entrenar todos los días sin descanso. ¿Qué haces?",
        opciones: [
          "Lo permites",
          "Explicas la importancia del descanso y creas un programa con días de recuperación",
          "Lo entrenas igual",
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es la importancia de la evaluación inicial?",
        opciones: [
          "No es necesaria",
          "Conocer objetivos, limitaciones, historial y crear un plan personalizado",
          "Solo para cobrar más",
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
  preguntasUsadas: [],
  sectorActual: "recepcion",
};

// Combinaciones ganadoras en tic-tac-toe
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Iniciar la partida
const empiezoPartida = document.getElementById("start-game");
const screenConfig = document.getElementById("setup-screen");
const screenGame = document.getElementById("game-screen");
const turnoPlayer = document.getElementById("current-player-name");
const sectorSelect = document.getElementById("sector-select");

empiezoPartida.addEventListener("click", () => {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  if (!player1 || !player2) {
    alert("Por favor, ingresa los nombres de ambos jugadores");
    return;
  }

  gameState.nombres.X = player1;
  gameState.nombres.O = player2;
  gameState.sectorActual = sectorSelect.value;
  gameState.preguntasUsadas = [];

  screenConfig.classList.add("hidden");
  screenGame.classList.remove("hidden");
  turnoPlayer.textContent = gameState.nombres.X;
});

// Seleccionar las celdas
const celdas = document.querySelectorAll(".cell");

celdas.forEach((celda) => {
  celda.addEventListener("click", () => {
    const index = celda.dataset.index;
    if (gameState.tablero[index] === null && gameState.esActivo) {
      renderTarjetas(index);
    }
  });
});

// Variables para el modal
let currentCellIndex = null;
let currentQuestion = null;
const textPreguntas = document.getElementById("question-text");
const opcionesContainer = document.getElementById("options-container");
const modal = document.getElementById("question-modal");

function renderTarjetas(index) {
  currentCellIndex = index;
  const preguntas = SECTORES[gameState.sectorActual].preguntas;

  // Obtener una pregunta que no se haya usado
  let preguntaIndex;
  do {
    preguntaIndex = Math.floor(Math.random() * preguntas.length);
  } while (gameState.preguntasUsadas.includes(preguntaIndex) && gameState.preguntasUsadas.length < preguntas.length);

  if (gameState.preguntasUsadas.length >= preguntas.length) {
    gameState.preguntasUsadas = [];
  }

  gameState.preguntasUsadas.push(preguntaIndex);
  currentQuestion = preguntas[preguntaIndex];

  textPreguntas.textContent = currentQuestion.pregunta;

  // Limpiar opciones anteriores
  opcionesContainer.innerHTML = "";

  currentQuestion.opciones.forEach((opcion, indiceOpcion) => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.addEventListener("click", () => {
      validarRespuesta(indiceOpcion, currentQuestion.correcta);
    });
    opcionesContainer.appendChild(boton);
  });

  modal.classList.remove("hidden");
}

function validarRespuesta(indiceOpcion, correcta) {
  const botones = document.querySelectorAll("#options-container button");

  // Deshabilitar todos los botones
  botones.forEach((btn) => (btn.disabled = true));

  // Mostrar feedback visual
  botones.forEach((btn, idx) => {
    if (idx === correcta) {
      btn.classList.add("correcto");
    } else if (idx === indiceOpcion && indiceOpcion !== correcta) {
      btn.classList.add("incorrecto");
    }
  });

  // Esperar 1.5 segundos antes de cerrar el modal
  setTimeout(() => {
    modal.classList.add("hidden");

    if (indiceOpcion === correcta) {
      marcarCelda(currentCellIndex);
      if (!checkWinner()) {
        switchTurn();
      }
    } else {
      switchTurn();
    }
  }, 1500);
}

function marcarCelda(index) {
  gameState.tablero[index] = gameState.jugadorActual;
  const celda = document.querySelector(`[data-index="${index}"]`);
  celda.textContent = gameState.jugadorActual;
  celda.classList.add(`marcada-${gameState.jugadorActual.toLowerCase()}`);
}

function checkWinner() {
  for (let combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (
      gameState.tablero[a] &&
      gameState.tablero[a] === gameState.tablero[b] &&
      gameState.tablero[a] === gameState.tablero[c]
    ) {
      // Ganador encontrado
      gameState.esActivo = false;
      const ganador = gameState.nombres[gameState.tablero[a]];
      setTimeout(() => {
        alert(`¡${ganador} ha ganado! 🎉`);
        resetGame();
      }, 500);
      return true;
    }
  }

  // Verificar si es empate
  if (gameState.tablero.every((celda) => celda !== null)) {
    gameState.esActivo = false;
    setTimeout(() => {
      alert("¡Es un empate! 🤝");
      resetGame();
    }, 500);
    return true;
  }

  return false;
}

function switchTurn() {
  gameState.jugadorActual = gameState.jugadorActual === "X" ? "O" : "X";
  turnoPlayer.textContent = gameState.nombres[gameState.jugadorActual];
}

function resetGame() {
  gameState.tablero = [null, null, null, null, null, null, null, null, null];
  gameState.jugadorActual = "X";
  gameState.esActivo = true;
  gameState.preguntasUsadas = [];

  celdas.forEach((celda) => {
    celda.textContent = "";
    celda.classList.remove("marcada-x", "marcada-o");
  });

  screenGame.classList.add("hidden");
  screenConfig.classList.remove("hidden");
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  turnoPlayer.textContent = gameState.nombres.X;
}
