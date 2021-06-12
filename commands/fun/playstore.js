const Discord = require('discord.js');
const PS = require('google-play-scraper')

module.exports = {
	name: 'playstore',
	description: 'idk',
	execute(message, args) {
           let MSG = message.content.split(" ")
    let Query = MSG.slice(1)
    if(!Query.length)
    {
      message.reply(`\`\`\`yaml\nInvalid Arguments. Usage : -playstore <game>\n\`\`\``)
    }
    else if(Query)
    {
      PS.search({
        term: Query,
        num: 1
      }).then(pl => 
        {
          let store;
          store = JSON.parse(JSON.stringify(pl[0]))

          let PLS = new Discord.MessageEmbed()
          .setURL(store.url)
          .setTitle(store.title)
          .setThumbnail(store.icon)
          .addField(`Developer`, store.developer)
          .addField(`Description`, store.summary)
          .addField(`Price`, store.priceText)
          .addField(`Score`, store.scoreText)
          .setColor('RANDOM')
          .setTimestamp()
          message.reply(PLS)
        })
    }

	},
};