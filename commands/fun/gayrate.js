module.exports = {
	name: 'gayrate',
	aliases: ['gay', 'howgay', 'amgay'],
	description: 'Dm the user (make sure not to dm Shardy)!',
	execute(message, args) {
let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%", "69%", "93%"]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention Someone to know what guy is gay!")
 else{
 message.channel.send(`${victim} Let me see, ${gayrate[Math.floor(Math.random() * gayrate.length)]} Gay :rainbow_flag: `)
 }
}
}