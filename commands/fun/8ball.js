module.exports = {
	name: '8ball',
	description: 'Alive the user',
	execute(message, args) {
 let wishes = args.slice(0).join("");
 let author = message.author;

 function get8ball(wishes, author) {
 const ballRef = [
 "It is certain.",
 "It is decidedly so, Its No",
 "It is decidedly so, Its YES",
 "Without a doubt.",
 "Yes - definitely.",
 "You may rely on it.",
 "As I see it, yes.",
 "Most likely, YES.",
 "Outlook good.",
 "Yes.",
 "Signs point to yes.",
 "Reply hazy, try again.",
 "Ask again later.",
 "Better not tell you now.",
 "Cannot predict now.",
 "Concentrate and try again.",
 "Don't count on in.",
 "My reply is no.",
 "My sources say no.",
 "Outlook not so good.",
 "Very doubtful."
 ]
 let randomize = Math.floor(Math.random() * ballRef.length);
 if (!wishes) return args.missing(message, "Ask something, please.", client.commands.get('8ball').help)
 return `\:8ball\: | ${ballRef[randomize]} \*\*${author}\*\*`
 }
 message.channel.send(get8ball(wishes, author));
}
}

