export const SECTORES = {
  recepcion: {
    nombre: "Recepción hotelera",
    emoji: "🏨",
    preguntas: [
      {
        pregunta: "Un cliente llega con una reserva confirmada, pero el hotel está en overbooking técnico y no hay habitaciones físicas. ¿Cuál es el protocolo de 'walk-out' más profesional?",
        opciones: [
          "Ofrecerle una bebida en el bar mientras esperas a que una salida se retrase para limpiar la habitación rápido.",
          "Explicar la situación, gestionar una habitación de igual o superior categoría en un hotel cercano, cubrir el transporte y la diferencia de tarifa si la hubiera.",
          "Pedirle disculpas y sugerirle que contacte con la agencia donde hizo la reserva para que ellos le reubiquen.",
          "Ofrecerle un descuento del 50% si acepta dormir en una habitación que está pendiente de una reparación menor."
        ],
        correcta: 1,
      },
      {
        pregunta: "Durante el turno de noche, un cliente llama quejándose de ruidos de una fiesta en la habitación contigua. Al acudir, descubres que son clientes VIP. ¿Cómo procedes?",
        opciones: [
          "Les dejas una nota por debajo de la puerta para no interrumpir su privacidad pero avisar del ruido.",
          "Llamas a seguridad inmediatamente para que los desalojen por incumplir las normas del hotel.",
          "Llamas o acudes a la habitación, agradeces su estancia y les pides con firmeza pero educación que reduzcan el volumen por el descanso de otros huéspedes.",
          "Ofreces un cambio de habitación inmediato al cliente que se ha quejado, sin molestar a los clientes VIP."
        ],
        correcta: 2,
      },
      {
        pregunta: "Un cliente quiere hacer el check-in pero su tarjeta de crédito es rechazada por el datáfono. Dice que es un error de su banco y que pagará al hacer el check-out. ¿Qué haces?",
        opciones: [
          "Permitir el acceso si el cliente muestra un comprobante de saldo en su app bancaria.",
          "Solicitar otra forma de pago o una garantía válida en ese momento, explicando que es política de seguridad para activar la llave.",
          "Dejarle pasar pero bloquear el uso del minibar y cargos a la habitación.",
          "Llamar directamente a su banco para intentar autorizar la transacción manualmente."
        ],
        correcta: 1,
      },
      {
        pregunta: "Recibes una llamada de alguien que dice ser el asistente de un huésped famoso alojado en el hotel y pide que le confirmes el número de habitación para enviarle un paquete urgente. ¿Qué respondes?",
        opciones: [
          "Confirmar el número de habitación si el nombre del asistente coincide con las notas de la reserva.",
          "Indicar que por política de protección de datos no puedes confirmar la estancia ni el número de habitación, y ofrecerte a recibir el paquete en recepción.",
          "Darle el número de habitación pero pedirle que no lo comparta con nadie más.",
          "Transferir la llamada directamente a la habitación del huésped para que él decida."
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente VIP solicita un 'Late Check-out' gratuito hasta las 18:00h, pero el hotel está al 100% de ocupación para hoy y su habitación está reservada por otro cliente que llega a las 15:00h. ¿Cómo lo gestionas?",
        opciones: [
          "Concederlo por ser VIP y reubicar al cliente que llega en otro hotel.",
          "Explicar la situación de ocupación, ofrecer cortesía hasta las 14:00h (si es posible) y proponer guardar su equipaje con acceso al spa/lounge el resto del día.",
          "Decirle que no es posible y que debe abandonar la habitación a las 12:00h sin excepciones.",
          "Cobrarle media tarifa por el uso de la habitación durante la tarde."
        ],
        correcta: 1,
      },
      {
        pregunta: "Al revisar una reserva de una agencia online (OTA), notas que el precio cargado es significativamente inferior al coste operativo real debido a un error de carga en el sistema. ¿Qué acción es la correcta?",
        opciones: [
          "Cancelar la reserva inmediatamente por error de tarifa.",
          "Contactar con la agencia para informar del error, pero respetar la reserva al cliente si ya está confirmada, analizando el impacto en el ADR.",
          "Llamar al cliente y pedirle que pague la diferencia al llegar al hotel.",
          "Ignorar el error y esperar a que el cliente llegue para explicarle que el precio ha cambiado."
        ],
        correcta: 1,
      },
      {
        pregunta: "Un huésped se queja de que ha desaparecido un objeto de valor de su habitación y acusa directamente al personal de limpieza. ¿Cuál es el primer paso del protocolo?",
        opciones: [
          "Llamar a la policía de inmediato antes de hacer nada más.",
          "Escuchar al cliente, mantener la calma, realizar una lectura de la cerradura (audit) y revisar el registro de entradas del personal.",
          "Interrogar al personal de limpieza delante del cliente para demostrar transparencia.",
          "Ofrecer una compensación económica inmediata para evitar una mala reseña."
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente llega al mostrador muy agresivo y gritando porque su habitación no está lista a las 13:00h (el check-in oficial es a las 15:00h). Hay otros clientes mirando. ¿Cómo actúas?",
        opciones: [
          "Gritar igual para que entienda que no tiene razón.",
          "Invitarle a hablar en una zona más privada o apartada del mostrador para bajar la tensión y explicar los tiempos de limpieza.",
          "Darle la primera habitación que esté limpia, aunque sea de una categoría inferior a la que reservó.",
          "Llamar a seguridad para que lo expulsen del lobby por conducta inapropiada."
        ],
        correcta: 1,
      },
      {
        pregunta: "En el check-out, un cliente disputa un cargo del minibar diciendo que él no consumió nada. El informe de pisos dice lo contrario. ¿Cómo resuelves la situación?",
        opciones: [
          "Obligar al cliente a pagar basándote en el informe de pisos.",
          "Si el cliente insiste y el importe no es elevado, retirarlo por cortesía para mantener la satisfacción, anotándolo en su perfil (Guest History).",
          "Llamar a la camarera de pisos para que baje a recepción y confronte al cliente.",
          "Decirle que si no paga, no puede abandonar el hotel."
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente solicita una factura a nombre de una empresa diferente a la que figura en la reserva después de haber realizado el pago. ¿Qué debes verificar?",
        opciones: [
          "Nada, se cambia y se imprime de nuevo.",
          "Verificar si la factura original ya ha sido declarada y si el cambio cumple con la normativa fiscal local sobre facturación.",
          "Cobrar un suplemento por gastos de gestión administrativa.",
          "Decirle que una vez emitida la factura no se puede modificar bajo ninguna circunstancia."
        ],
        correcta: 1,
      }
    ],
  },
  fitness: {
    nombre: "Entrenamiento Personal",
    emoji: "💪",
    preguntas: [
      {
        pregunta: "Un cliente con hipertensión grado 1 quiere realizar un entrenamiento de alta intensidad (HIIT). ¿Cuál es la recomendación más segura?",
        opciones: [
          "Realizarlo sin problemas si toma su medicación.",
          "Priorizar entrenamiento de fuerza moderado y cardiovascular continuo, evitando maniobras de Valsalva y ejercicios isométricos prolongados.",
          "Prohibirle cualquier tipo de ejercicio físico.",
          "Hacer solo estiramientos y yoga."
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Cuál es el orden más eficiente para una sesión enfocada en la pérdida de grasa y mantenimiento de masa muscular?",
        opciones: [
          "45 min de cardio intenso y luego 15 min de pesas ligeras.",
          "Calentamiento dinámico, entrenamiento de fuerza pesado/moderado y finalizar con cardio suave o HIIT.",
          "Empezar directamente con pesas máximas para agotar el glucógeno.",
          "Hacer solo cardio, las pesas no queman grasa."
        ],
        correcta: 1,
      },
      {
        pregunta: "Un cliente sufre un estancamiento en su pérdida de peso tras 8 semanas de déficit calórico. ¿Qué estrategia de 'non-exercise activity thermogenesis' (NEAT) sugerirías?",
        opciones: [
          "Reducir las calorías a la mitad de inmediato.",
          "Aumentar el número de pasos diarios y la actividad no deportiva (escaleras, caminar) para elevar el gasto energético total.",
          "Añadir dos sesiones más de gimnasio al día.",
          "Eliminar los carbohidratos por completo de la dieta."
        ],
        correcta: 1,
      },
      {
        pregunta: "Durante una sentadilla, notas que los talones del cliente se elevan ligeramente. ¿Cuál es la causa más probable y la corrección?",
        opciones: [
          "Falta de fuerza en el cuádriceps; poner más peso.",
          "Limitación en la dorsiflexión del tobillo; trabajar movilidad de tobillo o usar calzado con drop.",
          "Exceso de flexibilidad en la cadera; limitar el rango de movimiento.",
          "Es normal, no requiere corrección."
        ],
        correcta: 1,
      },
      {
        pregunta: "¿Qué principio del entrenamiento explica que para seguir mejorando debemos aumentar la carga, el volumen o la densidad del ejercicio?",
        opciones: [
          "Principio de Especificidad.",
          "Principio de Sobrecarga Progresiva.",
          "Principio de Reversibilidad.",
          "Principio de Individualización."
        ],
        correcta: 1,
      }
    ],
  },
};
