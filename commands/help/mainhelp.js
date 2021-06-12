const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Help command and helps the user",
  execute(message, bot, args){
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Comamnds')
    .setAuthor('Mr. Happy Bot Help Commands')
    .setDescription('These are the help commands. Use Them wisely!')
    .addFields(
    { name: `**//helpmod**`, value: '`Mod commands`', inline: false },
     { name: '**//helpfun**', value: '`FUN Commands`', inline: true },
   //{ name: '**//helpsocials**', value: '`MY SOCIALS`', inline: false },
    { name: '**//helputility**', value: '`Utility Commands`', inline: false },
    )
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/3f58e053707cc8f5186fafbf7572cb9c/tenor.gif?itemid=15841206')
    .setFooter(`Requested by ${message.author.username}`);
  message.channel.send(embed);
}




  }