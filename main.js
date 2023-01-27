// main.js que utilizando Nodejs (la librería node-telegram-bot-api) enviará un mensaje a 722271252

// Importamos la librería node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');

// hacemos las peticiones para obtener los tokens de github
const core = require('@actions/core');




//Cogemos los secrets Telegram_Token y el Telegram_ChatID de las variables de entorno definidas en github

const TOKEN = core.getInput('TOKEN');
const CHAT_ID = core.getInput('CHAT_ID');
const NOMBRE = core.getInput('NOMBRE');

// Creamos un bot que utiliza 'polling' para obtener actualizaciones
const bot = new TelegramBot(TOKEN, { polling: true });
//Le ponemos nombre y lo ponemos en escucha de mensajes



console.log('Bot server started in the port 3000');
console.log('Bot name: ' + bot.name);
bot.getMe().then((me) => {
   bot.sendMessage(CHAT_ID, 'Hola, soy ' + me.first_name + ' y estoy activo');
});

bot.sendMessage(CHAT_ID, 'Hola, soy un bot');
bot.sendMessage(CHAT_ID, 'Y estamos activos papi! jajajaja');

bot.sendMessage(CHAT_ID, 'Workflow ejecutado correctamente tras el último commit. Saludos ' + NOMBRE);