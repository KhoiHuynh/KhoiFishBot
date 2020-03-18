const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "Njg5NDg5MzE4NDYwNjUzNzI3.XnDwZQ.ikKM8lernL7CkfzFCQ8JLmvLT9Q"

bot.login(token)
bot.on('ready', () =>{
    console.log("I'm online!")
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('Shut the fuck up bitch');
    }
})