module.exports = {
    name: 'purge',
    description: 'this commands purges!',
    execute(message, args){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send({
    embed: {
        color: 0x4D5E94,
        description: `**Incorrect usage of the command. must state a number to purge!**`
    }
})
if(isNaN(clear)) return message.channel.send({
    embed: {
        color: 0x4D5E94,
        description: `**Must have A Valid Number to Purge!**`
    }
})
if(clear > 100) return message.channel.send({
    embed: {
        color: 0x4D5E94,
        description: `**I cant Clear More than 100 messages**`
    }
})
if(clear < 1) return message.channel.send({
    embed: {
        color: 0x4D5E94,
        description: `**I cant clear 1 messages!**`
    }
})

message.channel.bulkDelete(clear)
return message.channel.send({
    embed: {
        color: 0x4D5E94,
        description: `**Sucessfully Cleared ${clear} Messages!**`
    }
})
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
},
};