function changeContent(level) {
    // Cambiar el contenido dinámico
    const levels = {
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
      // Agrega 'severo' y 'muySevero' aquí con contenido específico.
    };
  
    // Cambiar texto e imagen
    document.getElementById("dynamicImage").src = levels[level].image;
    document.getElementById("dynamicImageText").textContent = levels[level].imageText;
    // document.getElementById("dynamicLevelDescription").textContent = levels[level].description;
    document.getElementById("dynamicDetails").textContent = levels[level].details;
    document.getElementById("dynamicSensations").innerHTML = levels[level].sensations;
  
    // Cambiar la clase activa del botón
    document.querySelectorAll(".btn-group .btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
  }
  