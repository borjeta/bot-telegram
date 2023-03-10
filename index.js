// main.js que utilizando Nodejs (la librería node-telegram-bot-api) enviará un mensaje a 722271252

// Importamos la librería node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');

//Cogemos los secrets Telegram_Token y el Telegram_ChatID de las variables de entorno definidas en github

const TOKEN = process.env.secrets.TELEGRAM_TOKEN;
const CHAT_ID = process.env.secrets.TELEGRAM_CHAT_ID;

// Creamos un bot que utiliza 'polling' para obtener actualizaciones
const bot = new TelegramBot(TOKEN, { polling: true });
//Le ponemos nombre y lo ponemos en escucha de mensajes

 
 
console.log('Bot server started in the port 3000');  

bot.getMe().then((me) => {
   bot.sendMessage(CHAT_ID, 'Hola, soy ' + me.first_name + ' y estoy activo');
});

bot.sendMessage(CHAT_ID, 'Hola, soy un bot');
bot.sendMessage(CHAT_ID, 'Y estamos activos papi! jajajaja');

bot.sendMessage(CHAT_ID, 'Workflow ejecutado correctamente tras el último commit. Saludos '. NOMBRE);