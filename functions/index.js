const functions = require('firebase-functions'); /*Creamos functions exigiendo que tenga firebase-functions*/

const { /*Declaramos todos los tipos de respuestas que queremos implementar.*/
    dialogflow,
    Image,
    Table,
    Carousel,
    BasicCard,
    Button,
    Suggestions,
    LinkOutSuggestion,
    SimpleResponse,
    List,
    BrowseCarousel,
    BrowseCarouselItem,
    SELECTION_KEY_ONE,
    SELECTION_KEY_TWO,
    SELECTION_KEY_THREE,
} = require('actions-on-google'); /*exigimos que esté actions on google*/

const app = dialogflow(); /*Agragamos dialogflow a la variable app*/
const HOSTING = "https://conversational-ai.eu/marc/hosting/img/"; /*Agregamos la url para poner imágenes dentro de la carpeta hosting/img*/

app.intent('Intent Hola', (conv) => { /*Configuramos la función del intent hola donde hacemos una Basic card para hacer la presentación. Al mismo tiempo agregamos ssml para dar sonido de entrada.*/
    if (!conv.screen) { /*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }/*Agregamos ssml a conv.ask*/
    conv.ask(`<speak>`+`Es una tienda de pantalones mundialmente conocida como <say-as interpret-as="characters"> MS </say-as> <break time="1" /> Ofrecemos todo tipo de Pantalones para Hombre y Mujer,  desde tejanos/baqueros, <break time="0.35" />Casual/Chino <break time="0.35" />y Deportivos.`+
    `Fue fundada por el Señor <sub alias="Marc Soler Caixal">MS</sub> en el año 2000.`+ 
    `<audio src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Acid_techno.ogg"></audio>`+   
    `</speak>
    `);
    conv.ask(new BasicCard({ /*Creamos la respuesta de BasicCard, un texto, un título e una imagen.*/
      text: `Es una tienda de pantalones mundialmente conocida como MS (Marc Soler). Ofrecemos todo tipo de Pantalones para Hombre y Mujer, tenemos des de tejanos/baqueros, Casual/Chino y Deportivos.Fue fundada por el Señor Marc Soler Caixal en el año 2000. Ofrecemos todo tipo de Pantalones.`,
      title: 'Shop MS',
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      display: 'CROPPED',
    }));

    /*Sugestion chip, Creamos la respuesta para el suggestions donde podremos escoger una respuesta.*/
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
      conv.ask('Aún no has escogido? A que esperas? Vamos para dentro');
      conv.ask(new Suggestions('Pantalones'));/*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
      conv.ask('Que respuesta quiere?'); /*Creación de texto*/
    
  });

  /*fallback hola intent*/

  /*Escoger Hombre Mujer Pantalones */
  app.intent('QUIERO-PANTALONES', (conv) => {
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
  
    conv.ask('Aquí tienes todos los campos de la tabla pantalones con unas pequeñas descripciones.'); /*Creamos una frase*/
    conv.ask(new Table({ /*Creamos una tabla con un título, subtitulo e imagen*/
      title: 'MS Shop', 
      subtitle: 'Pantalones',
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      columns: [ /*En las columnas creamos los pantalones de hombre y de mujer*/
        {
          header: 'Pantalones para Hombres',
          align: 'CENTER',
        },
        {
          header: 'Pantalones para Mujer',
          align: 'CENTER',
        },
      ],
      rows: [ /*En las filas creamos las descripciones de cada tipo de pantalón*/
        {
          cells: ['Pantalón de máxima calidad'+'\n\n'+
          'Calidad: Premium 100% algodón'+'\n\n'+
          'Peso : 200 g / m2'+'\n\n'+
          'Tallas : M ; L ; XL','Pantalón de máxima calidad'+'\n\n'+
          'Calidad: Premium 100% algodón'+'\n\n'+
          'Peso : 180 g / m2'+'\n\n'+
          'Tallas : S; M ; L ; XL'],
          dividerAfter: false,
        },
        ],
    }));
    if (!conv.screen) { /*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      
      return;
    }/*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask('Escoja una de las opciones.');
      conv.ask(new Suggestions('Hombre')); /*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Mujer')); /*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
  });

    /*Tipos de Pantalones Mujeres*/

  app.intent('PANTALONES MUJER', (conv, option) => { /*Creamos el intent*/
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
    conv.ask("Lista de pantalones de Mujer"); /*Creamos un texto*/
    conv.ask(new List({ /*implementamos una lista */
      title: "PANTALONES MUJER", /*Creamos el titulo del intent*/
      items: {
        "PANTALON_VAQUERO": { /*Creación del primer intent con título, descripción e imagen*/
          title: "Pantalón Vaquero",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/51ctmBDFR3L._AC_UX385_.jpg',
            alt: 'Pantalón Vaquero',
          }),
        },
        "PANTALON_CHINO": { /*Creación del segudno intent con título, descripción e imagen*/
          title: "Pantalón Chino",
          description: "",
          image: new Image({
            url: 'https://dhb3yazwboecu.cloudfront.net/1240/400290017_1_l.jpg',
            alt: 'Pantalón Chino',
          }),
        },
          title: "Pantalón Deportivo", /*Creación del tercer intent con título, descripción e imagen*/
          description: "",
          image: new Image({
            url: 'https://ae01.alicdn.com/kf/H121556f6aee246f6937f9bd1bd1acdday.jpg_q50.jpg',
            alt: 'Pantalón Deportivo',
          }),
        },
      }
    }))
  });

/*INTENT SELECIONADO MUJER*/

  app.intent('SELECCIONADO-MUJER', (conv, params, option) =>{
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
    console.log(option + 'hola');
    if(option === 'PANTALON_CHINO'){/*Con este if hacemos que si la option seleccionada es PANTALON_CHINO entrara y nos mostrara el contenido que tenemos a continuación*/
      conv.ask('Has comprado un pantalón chino');/*Creamos un texto.*/
      conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }
    if(option === 'PANTALON_VAQUERO'){/*Con este if hacemos que si la option seleccionada es PANTALON_VAQUERO entrara y nos mostrara el contenido que tenemos a continuación*/
      conv.ask('Has comprado un pantalón Vaquero');/*Creamos un texto.*/
      conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }
    if(option === 'PANTALON_DEPORTIVO'){ /*Con este if hacemos que si la option seleccionada es PANTALON_DEPORTIVO entrara y nos mostrara el contenido que tenemos a continuación*/
      conv.ask('Has comprado un pantalón Deportivo'); /*Creamos un texto.*/
      conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar.*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }  

  });

/*INTENT PANTALONES MUJER FALLBACK*/

  app.intent('PANTALONES-MUJER-FALLBACK', (conv, params, option)=>{ /*Creamos el fallback para poder controlar los errores*/
    conv.ask('No te he entendido'); /*Creamos un texto*/
    conv.ask(new List({ /*implementamos una lista */
      title: "PANTALONES MUJER", /*Creamos el título*/
      items: {
        "PANTALON_VAQUERO": { /*Creación del primer intent con título, descripción e imagen*/
          title: "Pantalón Vaquero",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/51ctmBDFR3L._AC_UX385_.jpg',
            alt: 'Pantalón Vaquero',
          }),
        },
        "PANTALON_CHINO": { /*Creación del segundo intent con título, descripción e imagen*/
          title: "Pantalón Chino",
          description: "",
          image: new Image({
            url: 'https://dhb3yazwboecu.cloudfront.net/1240/400290017_1_l.jpg',
            alt: 'Pantalón Chino',
          }),
        },
        "PANTALON_DEPORTIVO": { /*Creación del tercero intent con título, descripción e imagen*/
          title: "Pantalón Deportivo",
          description: "",
          image: new Image({
            url: 'https://ae01.alicdn.com/kf/H121556f6aee246f6937f9bd1bd1acdday.jpg_q50.jpg',
            alt: 'Pantalón Deportivo',
          }),
        },
      }
    }))
  });

/*INTENT PANTALONES HOMBRE*/

  app.intent('PANTALONES HOMBRE', (conv, option) => {
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
    conv.ask("Lista de pantalones de Hombres"); /*Creamos un texto.*/
    conv.ask(new Carousel({ /*Creamos un Carousel*/
      title: "PANTALONES HOMBRE", /*Creamos el título*/
      items: { /*Creación del primer intent con título, descripción e imagen*/
        "PANTALON_TEJANO": {
          title: "Pantalón Tejanos",
          description: "",
          image: new Image({
            url: 'https://ae01.alicdn.com/kf/H2623456cb0c249be801f4c62bb6ffd9eP.jpg_q50.jpg',
            alt: 'Pantalón Tejanos',
          }),
        },
        "PANTALON_CASUAL": {/*Creación del segundo intent con título, descripción e imagen*/
          title: "Pantalón Casual",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/61Z6SGqcAaL._AC_UX569_.jpg',
            alt: 'Pantalón Casual',
          }),
        },
        "PANTALON_DEPORTIVO": {/*Creación del tercer intent con título, descripción e imagen*/
          title: "Pantalón Deportivo",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/51L9jBAqjgL._AC_UX679_.jpg',
            alt: 'Pantalón Deportivo',
          }),
        },
      }
    }))
  });

/*INTENT  SELECIONADO-HOMBRE*/ 

  app.intent('SELECCIONADO-HOMBRE', (conv, params, option) =>{
    if (!conv.screen) {/*Con este if lo que hacemos es verificar que el usuario tiene un dispositivo con pantalla táctil si no es así no podrá utilizar la aplicación*/
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      return;
    }
    console.log(option + 'hola');
    if(option === 'PANTALON_TEJANO'){ /*Con este if hacemos que si la option seleccionada es PANTALON_TEJANO entrara y nos mostrara el contenido que tenemos a continuación*/
      conv.ask('Has comprado un pantalón Tejano');/*Creamos un texto.*/
      conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }
    if(option === 'PANTALON_CASUAL'){ /*Con este if hacemos que si la option seleccionada es PANTALON_CASUAL entrara y nos mostrara el contenido que tenemos a continuación*/
      conv.ask('Has comprado un pantalón Casual');/*Creamos un texto.*/
      conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar*/
      conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }
      if(option === 'PANTALON_DEPORTIVO'){ /*Con este if hacemos que si la option seleccionada es PANTALON_DEPORTIVO entrara y nos mostrara el contenido que tenemos a continuación*/
        conv.ask('Has comprado un pantalón Deportivo');/*Creamos un texto.*/
        conv.ask(new Suggestions('Continuar_Comprando'));/*Aquí creamos la respuesta que podremos clickar*/
        conv.ask(new Suggestions('Salir'));/*Aquí creamos la respuesta que podremos clickar para finalizar la aplicación.*/
    }  

  });

  /*INTENT HOMBRE FALLBACK*/
  app.intent('PANTALONES-HOMBRE-FALLBACK', (conv, params, option)=>{ /*Creamos el fallback para poder controlar los errores*/
    conv.ask('No te he entendido'); /*Creamos un texto.*/
    conv.ask(new List({ /*implementamos una lista */
      title: "PANTALONES HOMBRE", /*Creamos el título de la lista*/
      items: {
        "PANTALON_TEJANO": { /*Creación del Primer intent con título, descripción e imagen*/
          title: "Pantalón Tejanos",
          description: "",
          image: new Image({
            url: 'https://ae01.alicdn.com/kf/H2623456cb0c249be801f4c62bb6ffd9eP.jpg_q50.jpg',
            alt: 'Pantalón Tejanos',
          }),
        },
        "PANTALON_CASUAL": {/*Creación del Segundo intent con título, descripción e imagen*/
          title: "Pantalón Casual",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/61Z6SGqcAaL._AC_UX569_.jpg',
            alt: 'Pantalón Casual',
          }),
        },
        "PANTALON_DEPORTIVO": {/*Creación del tercer intent con título, descripción e imagen*/
          title: "Pantalón Deportivo",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/51L9jBAqjgL._AC_UX679_.jpg',
            alt: 'Pantalón Deportivo',
          }),
        },
      }
    }))
  });
exports.fulfillment = functions.https.onRequest(app);

