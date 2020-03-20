const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "Njg5NDg5MzE4NDYwNjUzNzI3.XnRMqA.Uc84fKHkcjwSqblgoong3_PGxeg"

bot.login(token)
bot.on('ready', () =>{
    console.log("I'm online!")
})

bot.on('message', msg=>{
    if(msg.content === "hello bot"){
        msg.reply('Shut up, and do your work');
    }
})