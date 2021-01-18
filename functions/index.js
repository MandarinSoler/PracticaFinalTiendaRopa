const functions = require('firebase-functions');

const {
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
} = require('actions-on-google');

const app = dialogflow();
const HOSTING = "https://conversational-ai.eu/marc/hosting/img/";

app.intent('Intent Hola', (conv) => {
    if (!conv.screen) {
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      conv.ask('¿Qué respuesta le gustaría ver a continuación?');
      return;
    }
  
    conv.ask(`Es una tienda de ropa mundialmente conocida como MS (Marc Soler). Fue fundada por el Señor Marc Soler Caixal en el año 2000. Ofrecemos: Pantalones, Camisas y Accesorios`);
    conv.ask(new BasicCard({
      text: `Es una tienda de ropa mundialmente conocida como MS (Marc Soler). Fue fundada por el Señor Marc Soler Caixal en el año 2000. Ofrecemos: Pantalones, Camisas y Accesorios`,
      title: 'Shop MS',
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      display: 'CROPPED',
    }));

    /*Sugestion chip*/
    if (!conv.screen) {
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      conv.ask('¿Qué respuesta le gustaría ver a continuación?');
      return;
    }
      conv.ask('Escoja una de las opciones.');
      conv.ask(new Suggestions('Pantalones'));
      conv.ask(new Suggestions('Camisetas'));
      
      conv.ask('Que respuesta quiere?');
    
  });
 

  /*Escoger Hombre Mujer Pantalones */
  app.intent('QUIERO-PANTALONES', (conv) => {
    if (!conv.screen) {
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      conv.ask('¿Qué respuesta le gustaría ver a continuación?');
      return;
    }
  
    conv.ask('Aquí tienes todos los campos de la tabla pantalones con unas pequeñas descripciones.');
    conv.ask(new Table({
      title: 'MS Shop',
      subtitle: 'Pantalones',
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      columns: [
        {
          header: 'Pantalones para Hombres',
          align: 'CENTER',
        },
        {
          header: 'Pantalones para Mujer',
          align: 'CENTER',
        },
      ],
      rows: [
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
    if (!conv.screen) {
      conv.ask('Chips can be demonstrated on screen devices.');
      
      return;
    }
      conv.ask('Escoja una de las opciones.');
      conv.ask(new Suggestions('Hombre'));
      conv.ask(new Suggestions('Mujer'));
  
      conv.ask('Que respuesta quiere?');
  });

  /*Escoger Hombre Mujer Camiseta */
  app.intent('QUIERO-CAMISETAS', (conv) => {
    if (!conv.screen) {
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      conv.ask('¿Qué respuesta le gustaría ver a continuación?');
      return;
    }
  
    conv.ask('Aquí tienes todos los campos de la tabla con unas pequeñas descripciones.');
    conv.ask(new Table({
      title: 'MS Shop',
      subtitle: 'Camisetas',
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      columns: [
        {
          header: 'Camiseta para Hombres',
          align: 'CENTER',
        },
        {
          header: 'Camiseta para Mujer',
          align: 'CENTER',
        },
      ],
      rows: [
        {
          cells: ['Camiseta de máxima calidad con doble cuello y tapacosturas'+'\n'+
          'Calidad: Premium 100% algodón'+
          'Peso : 180 g / m2'+
          'Tallas : M ; L ; XL','Camiseta de máxima calidad con doble cuello y tapacosturas'+
          'Calidad: Premium 100% algodón'+
          'Peso : 180 g / m2'+
          'Tallas : S; M ; L ; XL'],
          dividerAfter: false,
        },
        ],
    }));
    if (!conv.screen) {
      conv.ask('Chips can be demonstrated on screen devices.');
      
      return;
    }
      conv.ask('Escoja una de las opciones.');
      conv.ask(new Suggestions('Hombre'));
      conv.ask(new Suggestions('Mujer'));
  
      conv.ask('Que respuesta quiere?');
    
  });


  /*Tipos de Pantalones hombres

 app.intent('PANTALONES HOMBRE', (conv, params) => {
 
  conv.ask(new Carousel({
    title: "PANTALONES HOMBRE",
    items: {
      "Primera Opción": {
        title: "Pantalon Tejano",
        description: "",
        image: new Image({
          url: 'https://ae01.alicdn.com/kf/H2623456cb0c249be801f4c62bb6ffd9eP.jpg_q50.jpg',
          alt: 'Pantalón Vaquero',
        }),
      },
      "Segunda Opción": {
        title: "Pantalon Casual",
        description: "",
        image: new Image({
          url: 'https://dhb3yazwboecu.cloudfront.net/1240/400290017_1_l.jpg',
          alt: 'Pantalón Chino',
        })
      },
      "Tercera Opción": {
        title: "Pantalón Deportivo",
        description: "",
        image: new Image({
          url: 'https://images-na.ssl-images-amazon.com/images/I/51L9jBAqjgL._AC_UX679_.jpg',
          alt: 'Pantalón Deportivo',
        }),
      },
    }
  }))
  conv.ask('Escoja una de las opciones.');
  conv.ask(new Suggestions('Pantalon Tejano'));
  conv.ask(new Suggestions('Pantalon Casual'));
  conv.ask(new Suggestions('Pantalón Deportivo'));

  conv.ask('Que respuesta quiere?');
});

  /*Tipos de Pantalones Mujeres*/

  app.intent('PANTALONES MUJER', (conv, params, option) => {
    if (!conv.screen) {
      conv.ask('Lo siento, intente esto en un dispositivo de pantalla o seleccione '+
      'superficie del teléfono en el simulador.');
      conv.ask('¿Qué respuesta le gustaría ver a continuación?');
      return;
    }
    conv.ask("Lista de pantalones de Mujer");
    conv.ask(new List({
      title: "PANTALONES MUJER",
      items: {
        "Primera option": {
          title: "Pantalón Vaquero",
          description: "",
          image: new Image({
            url: 'https://images-na.ssl-images-amazon.com/images/I/51ctmBDFR3L._AC_UX385_.jpg',
            alt: 'Pantalón Vaquero',
          }),
        },
        "Segunda option": {
          title: "Pantalón Chino",
          description: "",
          image: new Image({
            url: 'https://dhb3yazwboecu.cloudfront.net/1240/400290017_1_l.jpg',
            alt: 'Pantalón Chino',
          }),
        },
        "Tercera option": {
          title: "Pantalón Deportivo",
          description: "",
          image: new Image({
            url: 'https://ae01.alicdn.com/kf/H121556f6aee246f6937f9bd1bd1acdday.jpg_q50.jpg',
            alt: 'Pantalón Deportivo',
          }),
        },
      }
    }))
    conv.ask('Escoja una de las opciones.');
    conv.ask(new Suggestions('PANTALON VAQUERO'));
    conv.ask(new Suggestions('PANTALON CHINO'));
    conv.ask(new Suggestions('PANTALON DEPORTIVO'));

    conv.ask('Que respuesta quiere?');
  });
/*Pantalones Vaqueros*/
app.intent('PANTALON VAQUERO', (conv, params) => {
  conv.ask(new SimpleResponse({
    speech: `Has Comprado unos Pantalones Vaqueros`,
    text: `Has Comprado unos Pantalones Vaqueros`,
  }));
  conv.ask(new Suggestions(['Salir']));
});

 /*Pantalones Chinos*/
 app.intent('PANTALON CHINO', (conv, params) => {
  conv.ask(new SimpleResponse({
    speech: `Has Comprado unos Pantalones Chinos`,
    text: `Has Comprado unos Pantalones Chinos`,
  }));
  conv.ask(new Suggestions(['Salir']));
});
/*Pantalones Deportivos*/
app.intent('PANTALON DEPORTIVO', (conv, params) => {
  conv.ask(new SimpleResponse({
    speech: `Has Comprado unos Pantalones Deportivos`,
    text: `Has Comprado unos Pantalones Deportivos`,
  }));
  conv.ask(new Suggestions(['Salir']));
});


/*Pantalones Tejanos*/
app.intent('PANTALON TEJANO', (conv) => {
  conv.ask(new SimpleResponse({
    speech: `Has Comprado un Pantalón Tejano`,
    text: `Has Comprado un Pantalón Tejano`,
  }));
  conv.ask(new Suggestions(['Salir']));
});

/*Pantalones Casual*/
app.intent('PANTALON CASUAL', (conv) => {
  conv.ask(new SimpleResponse({
    speech: `Has comprado un pantalón Casual`,
    text: `Has comprado un Pantalón Casual`,
  }));
  conv.ask(new Suggestions(['Salir']));
});

/*Pantalones Deportivo*/
app.intent('PANTALÓN DEPORTIVO', (conv) => {
  conv.ask(new SimpleResponse({
    speech: `Has comprado un Pantalón Tejano`,
    text: `Has comprado un  Pantalón Tejano`,
  }));
  conv.ask(new Suggestions(['Salir']));
});


  
 /* app.intent('QUIERO-CAMISETAS', (conv) => {
    
    conv.ask(`<speak>`+
    `Lo siento, intente esto en un dispositivo de pantalla o seleccione `+
    `superficie del teléfono en el simulador.`+ 
    `<audio src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Fondo_musical_sintetizado_2.ogg"></audio>`+   
    `</speak>
    `);
  });
*/
  /*Hola que tal!!*/

exports.fulfillment = functions.https.onRequest(app);

