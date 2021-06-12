const Discord = require("discord.js");

module.exports = {
	name: 'simprate',
	description: 'show the avatar of the user!', 
	execute(message, args) {
let simprate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%", "69%", "93%", "56",]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("MENTON SOMEONE PLEASE!!!")
 else{
 message.channel.send(`${victim} no simp ${simprate[Math.floor(Math.random() * simprate.length)]} SIMP! `)
 }
}
}
