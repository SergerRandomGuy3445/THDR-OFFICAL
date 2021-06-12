const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const snipe = new Discord.Collection();
const client = new Discord.Client();
client.commands = new Discord.Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
client.once('ready', () => {
    const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
 client.user.setPresence({ activity: { name: `${prefix}Help`, type: 'LISTENING' }, status: "idle"})

	console.log('Ready!');
});
client.on('message', message => {
	console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

if (!client.commands.has(commandName)) return;

const command = client.commands.get(commandName);

try {
	command.execute(message, args);
} catch (error) {
	// ...
}

});


client.on("message", async message => {
	if(message.content === "hi" || message.content === 'sup' || message.content === 'hello') {
	message.reply('Yo wassup')
	}
	client.on("messageDelete", message => {
		snipe.set(message.channel.id, {
		content: message.content,
		author: message.author,
	});	
	});
		if (message.content === "//snipe") {
		const msg = snipe.get(message.channel.id);
		if (!msg) return message.channel.send(" :Bruh: | Theres Nothing To Snipe");
		const embed = new Discord.MessageEmbed()
		.setTitle("Last Deleted Message")
		.setColor("RANDOM")
		.setTimestamp()
		.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
		.addFields(
		{ name: "Sender", value: msg.author.username },
		{ name: "Content", value: msg.content }
		);
		message.channel.send(embed);
		}
		if (message.content.startsWith("//suggest")) {
			let args = message.content
			.split(" ")
			.slice(1)
			if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
			const reportlog = new Discord.MessageEmbed()
			.setTitle("New Suggestion") 
			.setColor('RANDOM')
		   .setDescription(args.join(" "))
		   .setFooter(`Suggestion by ${message.author.tag}`)
		   .setTimestamp()
		   client.channels.cache.get('851442184658223114').send(reportlog).then (sentMessage => {
			sentMessage.react("⬆")
			sentMessage.react("⬇")
			})
			return message.channel.send({
                embed: {
                    color: 0xe6393c,
                    description: `***YOUR SUGGESTION HAS BEEN SUCESSFULLY SENT!***`
                }
            })
		   }
		   if(message.content.startsWith("-reverse")) {
			const args = message.content
			.trim()
			.split(/ +/g);
			let text = args.slice(1).join(" ");
		   if(!text) return message.channel.send(`:x: | Please provide text!! **Example:** \`b!reverse I love cakes\``)
		   
			// Reverse the message
			var reversed = '';
			var i = text.length;
		   
			while (i > 0) {
			reversed += text.substring(i - 1, i);
			i--;
			}
		   
			// Reply to the user's message
			message.channel.send(reversed);
			}
			if(message.content === `?ping`) {
				let circles = {
				   green: "🟢",
				   yellow: "🟡",
				   red: "🔴"
			   }
			 
			   const msg = await message.channel.send(new Discord.MessageEmbed()
			   .setColor("RED") //you can change this
			   .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
			   .addField("Websocket", 
				   `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
			   ))
			 
			   let ping = msg.createdTimestamp - message.createdTimestamp;
			 
			   msg.edit(
				   new Discord.MessageEmbed()
				   .setColor()
				   .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
				   .addField("Websocket", 
				   `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
			   )
				   .addField("RoundTrip",
				   `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
				   )
			   )
			 }
		

						
});









client.login("ODQ5MjQwMzE5ODkxMzQxMzEy.YLYSrg.QJrXmDExT-YMRpzCRkSYZnmw6kU");

//ODUwOTUxMzY5MjMzMjY4ODI2.YLxMOA.Et7fFxuytUj1BAHnBAQERE7KEzs ddsdsd

//ODQ5MjQwMzE5ODkxMzQxMzEy.YLYSrg.QJrXmDExT-YMRpzCRkSYZnmw6kU discord test