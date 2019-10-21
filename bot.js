const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By iRealKsA");


client.on("ready", () => {
let channel =     client.channels.get("574968739506814987")
setInterval(function() {
channel.send(`برعـاية فهودتشي الجميل غسيل اموال`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
