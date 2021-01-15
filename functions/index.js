const functions = require('firebase-functions');

const {
    dialogflow,
    Image,
    Table,
    Carousel,
    BasicCard,
    Button,
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
  
    conv.ask(`Es una tienda de ropa mundialmente conocida como MS (Marc Soler). Fue fundada por el Señor Marc Soler Caixal en el año 2000.`);
    conv.ask(new BasicCard({
      text: `Es una tienda de ropa mundialmente conocida como MS (Marc Soler). Fue fundada por el Señor Marc Soler Caixal en el año 2000. Ofrecemos: Pantalones, Camistas y Accesorios`,
      title: 'MS',
      buttons: new Button({
        title: 'This is a button',
        url: '',
      }),
      image: new Image({
        url: 'https://img.freepik.com/vector-gratis/logotipo-ms-monogram_67734-10.jpg?size=338&ext=jpg',
        alt: 'MS Shop',
      }),
      display: 'CROPPED',
    }));

    /*Sugestion chip*/
    app.intent('Suggestion Chips', (conv) => {
      if (!conv.screen) {
        conv.ask('¿Qué respuesta le gustaría ver a continuación?');
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
      conv.ask('Which type of response would you like to see next?'); ;
    });
  });


  /*Hola que tal!!*/

exports.fulfillment = functions.https.onRequest(app);

