 const contentData = {
  ansiedad: {
    leve: {
      image: "/img/condiciones/ansiedad_leve.png",
      imageText: "Aún tenemos tiempo para controlar la situación.",
      description: "Es el nivel más bajo de esta condición",
      details: "Se asocia a tensiones de la vida diaria, es decir la persona se encuentra en situación de alerta, prestando mayor atención a los estímulos externos. Este estado puede generar complicaciones para la concentración de tareas, al generar una preocupación constante sobre los hechos.",
      sensations: `- La ansiedad leve puede llegar a controlarse y propicia el aprendizaje y/o a la resolución de problemas.<br>
                    - Confusión momentánea.<br>
                    - Sensación de desesperanza ante la incertidumbre.<br>
                    - Pensamientos que se anclan sobre una situación que es fácil lidiar con ellos.`
    },
    moderado: {
      image: "/img/condiciones/ansiedad_moderada.png",
      imageText: "Aun hay tiempo, sería muy recomendable que busques ayuda profesional.",
      description: "Ansiedad moderada descripción.",
      details: "Se caracteriza por una mayor respuesta fisiológica, como la tensión muscular, palpitaciones excesivas y sudoración en presencia de eventos estresantes. Al igual que la ansiedad leve, la ansiedad moderada tiende a desarrollar comportamientos que limitan la toma de decisiones. Los individuos con ansiedad moderada están limitados en la percepción de su exterior, centrando sus energías sólo en eventos que le generan angustia. Sin embargo, aún puede reconducir su atención a si se centra en ello.",
      sensations: `- La ansiedad moderada etc...<br>
                    - Aumento de pensamientos intrusivos.<br>
                    - Dificultad para concentrarse.<br>
                    - Cambios en la motivación o interés, irritabilidad o cambios de humor.`
    },
    severo: {
      image: "/img/condiciones/ansiedad_severa.png",
      imageText: "Debemos tomar medidas ahora mismo, no podemos permitirlo más.",
      description: "Ansiedad moderada.",
      details: "Es el grado de ansiedad ya patológico, debido a que se observa un aumento de los síntomas físicos, así como de pensamientos catastróficos aunado a una reducción significativa del campo perceptivo, ya que, la persona no puede concentrarse en otra actividad que no sea la que le genere angustia. Esto puede llevar a la persona al aislamiento.",
      sensations: `- La ansiedad leve puede llegar a controlarse y propicia al aprendizaje y/o a la resolución de problemas.<br>
                    - Confusión momentánea.<br>
                    - Sensación de desesperanza ante la incertidumbre.<br>
                    - Pensamientos que se anclan sobre una situación que es fácil lidiar con ellos.`
    },
    muySevero: {
      image: "/img/condiciones/ansiedad_muysevera.png",
      imageText: "Ansiedad Extremadamente Severa Frase.",
      description: "Ansiedad Extremadamente Severa descripción.",
      details: "Este nivel de ansiedad es considerado el más grave, debido a que se caracteriza el incremento de los malestares físicos como emocionales (terror).  La persona es incapaz de realizar actividades ajenas a la que le causa angustia. La angustia supone una desorganización de la personalidad. Se manifiesta por un aumento de la actividad motora, disminución de la capacidad para relacionarse, percepción distorsionada y pérdida del pensamiento racional.",
      sensations: `- La ansiedad extremadamente severa puede llegar a controlarse y propicia al aprendizaje y/o a la resolución de problemas.<br>
                    - Confusión momentánea.<br>
                    - Sensación de desesperanza ante la incertidumbre.<br>
                    - Pensamientos que se anclan sobre una situación que es fácil lidiar con ellos.`
    }
  },
  estres: {
    leve: {
      image: "/img/condiciones/ansiedad_leve.png",
      imageText: "Aún tenemos tiempo para controlar la situación.",
      description: "ESTRÉS",
      details: "El estrés cotidiano proviene de exigencias y presiones en períodos cortos, y puede ser un estimulante útil en pequeñas dosis, aunque también puede resultar agotador. Se manifiesta con síntomas como irritabilidad, ansiedad, depresión, dolores de cabeza, dolor de espalda, tensión muscular y problemas gastrointestinales. A pesar de sus efectos, suele ser fácil de manejar.",
      sensations: `- El estrés leve se puede presentar como enojo o irritabilidad, ansiedad y depresión.<br>
                    - Dolores de cabeza y espalda tensos.<br>
                    - Dolor en la mandíbula y tensiones musculares.<br>
                    - Problemas estomacales e intestinales como acidez, flatulencia, diarrea, estreñimiento.`
    },
    moderado: {
      image: "/img/condiciones/ansiedad_moderada.png",
      imageText: "Aun hay tiempo, sería muy recomendable que busques ayuda profesional.",
      description: "ESTRÉS",
      details: "ESTRÉS.",
      sensations: `- ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.`
    },
    severo: {
      image: "/img/condiciones/ansiedad_severa.png",
      imageText: "Debemos tomar medidas ahora mismo, no podemos permitirlo más.",
      description: "ESTRÉS",
      details: "ESTRÉS.",
      sensations: `- ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.`
    },
    muySevero: {
      image: "/img/condiciones/ansiedad_muysevera.png",
      imageText: "Ansiedad Extremadamente Severa Frase.",
      description: "ESTRÉS",
      details: "ESTRÉS.",
      sensations: `- ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.<br>
                    - ESTRÉS.`
    }
  },
  depresion: {
    leve: {
      image: "/img/condiciones/ansiedad_leve.png",
      imageText: "Aún tenemos tiempo para controlar la situación.",
      description: "DEPRESION",
      details: "Se asocia a tensiones de la vida diaria, es decir la persona se encuentra en situación de alerta, prestando mayor atención a los estímulos externos. Este estado puede generar complicaciones para la concentración de tareas, al generar una preocupación constante sobre los hechos..",
      sensations: `- La ansiedad leve puede llegar a controlarse y propicia el aprendizaje y/o a la resolución de problemas.<br>
                      - Confusión momentánea.<br>
                      - Sensación de desesperanza ante la incertidumbre.<br>
                      - Pensamientos que se anclan sobre una situación que es fácil lidiar con ellos.`
    },
    moderado: {
      image: "/img/condiciones/ansiedad_moderada.png",
      imageText: "Aun hay tiempo, sería muy recomendable que busques ayuda profesional.",
      description: "DEPRESION",
      details: "DEPRESION.",
      sensations: `- DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.`
    },
    severo: {
      image: "/img/condiciones/ansiedad_severa.png",
      imageText: "Debemos tomar medidas ahora mismo, no podemos permitirlo más.",
      description: "DEPRESION",
      details: "DEPRESION.",
      sensations: `- DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.`
    },
    muySevero: {
      image: "/img/condiciones/ansiedad_muysevera.png",
      imageText: "Ansiedad Extremadamente Severa Frase.",
      description: "DEPRESION",
      details: "DEPRESION.",
      sensations: `- DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.<br>
                    - DEPRESION.`
    }
  }
};

function changeContent(level, page, event) {

  if (!contentData[page] || !(contentData[page][level])) {
    console.error("Contenido no encontrado para la página o nivel proporcionado.");
    return;
  }
  
  // Cambiar el contenido dinámico
  
  
  const content = contentData[page][level];

  // Cambiar contenido dinámico
  document.getElementById("dynamicImage").src = content.image;
  document.getElementById("dynamicImageText").textContent = content.imageText;
  document.getElementById("dynamicDetails").textContent = content.details;
  document.getElementById("dynamicSensations").innerHTML = content.sensations;

  // Cambiar la clase activa del botón
  document.querySelectorAll(".btn-group .btn").forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");
}
  