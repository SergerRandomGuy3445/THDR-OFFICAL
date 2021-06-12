module.exports = {
    name: 'ban',
    description: 'this commands bans a member!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***User has Been Banned!***`
                }
            })
          } else {
             return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***Mention The User To BAN!***`
                }
            })
          }
          
          }
    }
