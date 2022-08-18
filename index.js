

const TelegramApi = require('node-telegram-bot-api')

const token = '5433053455:AAGuaxltEZOjZspEs_ZoMVM_n-T0mQch374'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    //bot.sendMessage(chatId, `Ты написал ${text}`);

    if (text === '/start') {
        await bot.sendMessage(chatId, `Ты попал придурок! Мы уже сняли все деньги с твоей карты и начали переоформление твоей недвижимости на третьих лиц. Иди спать!`);
    }
    if (text === '/info') {
        await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/7.webp');
    }
    if (text === '/location'){
        bot.sendLocation(chatId, )
    }
        console.log(msg)

})