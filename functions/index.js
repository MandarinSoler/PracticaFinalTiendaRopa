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
    BrowseCarousel,
    BrowseCarouselItem,
    SELECTION_KEY_ONE,
    SELECTION_KEY_TWO,
} = require('actions-on-google');

const app = dialogflow();
const HOSTING = "https://conversational-ai.eu/marc/hosting/img/";

/*app.intent('Intent Hola', (conv, params) => {
    if (params.nombre) {
        conv.ask(`Hola, ${params.nombre}`);
        conv.ask(new Image({
            url: HOSTING + 'MS.jpg',
            alt: 'A bot',
        }));
    }else{
        conv.ask(`Hola, desconocido`);
    }
});*/

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
      conv.ask('Chips can be demonstrated on screen devices.');
      conv.ask('Which response would you like to see next?');
      return;
    }
      conv.ask('Escoja una de las opciones.');
      conv.ask(new Suggestions('Pantalones'));
      conv.ask(new Suggestions('Camisetas'));
      conv.ask(new Suggestions('Accesorios'));
      conv.ask(new LinkOutSuggestion({
        name: 'Suggestion Link',
        url: 'https://assistant.google.com/',
      }));
      conv.ask('Which type of response would you like to see next?');
    
  });
 

  /*app.intent('QUIERO-PANTALONES', (conv) => {
    
      conv.ask(`<speak>`+
      `Lo siento, intente esto en un dispositivo de pantalla o seleccione `+
      `superficie del teléfono en el simulador.`+ 
      `<audio src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Fondo_musical_sintetizado_2.ogg"></audio>`+   
      `</speak>
      `);
    });*/

  /*Escoger Hombre Mujer Pantalones */
  app.intent('QUIERO-PANTALONES', (conv) => {
    if (!conv.screen) {
      conv.ask('Sorry, try this on a screen device or select the ' +
        'phone surface in the simulator.');
      conv.ask('Which response would you like to see next?');
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
          header: 'Pantaloes para Hombres',
          align: 'CENTER',
        },
        {
          header: 'Pantaloes para Mujer',
          align: 'CENTER',
        },
      ],
      rows: [
        {
          cells: ['Pantalón de máxima calidad'+
          'Calidad: Premium 100% algodón'+
          'Peso : 200 g / m2'+
          'Tallas : M ; L ; XL','Pantalón de máxima calidad'+
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

  /*Escoger Hombre Mujer Camiseta */
  app.intent('QUIERO-CAMISETAS', (conv) => {
    if (!conv.screen) {
      conv.ask('Sorry, try this on a screen device or select the ' +
        'phone surface in the simulator.');
      conv.ask('Which response would you like to see next?');
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
          cells: ['Camiseta de máxima calidad con doble cuello y tapacosturas'+
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


  /*Tipos de Pantalones hombres*/

 app.intent('PANTALONES HOMBRE', (conv) => {
 
  conv.ask('Carousel de Pantalones');
  // Create a carousel
  conv.ask(new Carousel({
    title: 'Carousel Pantalones Hombre',
    items: {
      // Add the first item to the carousel
      'SELECTION_KEY_ONE': {
        synonyms: [
          'synonym 1',
          'synonym 2',
          'synonym 3',
        ],
        title: 'Pantalón Tejano',
        description: '',
        image: new Image({
          url: 'https://ae01.alicdn.com/kf/H2623456cb0c249be801f4c62bb6ffd9eP.jpg_q50.jpg',
          alt: 'Pantalón Tejanos',
        }),
      },
      // Add the second item to the carousel
      'SELECTION_KEY_GOOGLE_HOME': {
        synonyms: [
          'Google Home Assistant',
          'Assistant on the Google Home',
      ],
        title: 'Pantalón Casuales',
        description: '',
        image: new Image({
          url: 'https://images-na.ssl-images-amazon.com/images/I/61Z6SGqcAaL._AC_UX569_.jpg',
          alt: 'Pantalón Casuales',
        }),
      },
      // Add the third item to the carousel
      'SELECTION_KEY_GOOGLE_PIXEL': {
        synonyms: [
          'Google Pixel XL',
          'Pixel',
          'Pixel XL',
        ],
        title: 'Pantalón Deportivo',
        description: '',
        image: new Image({
          url: 'https://images-na.ssl-images-amazon.com/images/I/51L9jBAqjgL._AC_UX679_.jpg',
          alt: 'Pantalón Deportivo',
        }),
      },
    },
  }));
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

