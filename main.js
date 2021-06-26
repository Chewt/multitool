const Discord = require("discord.js")
const client = new Discord.Client()
require('dotenv').config()

function has_im(string)
{
    let tests = ['im', 'i\'m', 'Im', 'I\'m', 'imma', 'Imma', 'I\’m', 'i\’m']
    let index = -1
    for (i = 0; i < tests.length; i++)
    {
        index = string.indexOf(tests[i])
        if (index !== -1)
            return index
    }
    return -1
}

client.on("ready", () =>
    {
        console.log(`Logged in as ${client.user.tag}!`)
        client.user.setActivity('your mom')
        client.channels.cache.get('353708960777371648').send('Look pa I\'m alive!');
    })

client.on("message", msg =>
    {
        let words = msg.content.split(' ')
        if (!msg.author.bot && msg.content === "!compliment")
        {
            msg.channel.send(`Fuck you ${msg.author}`)
        }
        else if (!msg.author.bot && words[0] === "!vote")
        {
            votelist = msg.content.split(';')
            let string = ""
            for (i = 1; i < votelist[0].split(' ').length; i++)
            {
                string = string.concat(votelist[0].split(' ')[i], " ")
            }
            msg.channel.send(string).then(mesg =>
                {mesg.react('🚫');mesg.react('✅')})
            for (i = 1; i < votelist.length; i++)
            {
                msg.channel.send(votelist[i]).then(mesg =>
                    {mesg.react('🚫');mesg.react('✅')})
            }
        }
        else if (!msg.author.bot && (has_im(words) >= 0))
        {
            let index = has_im(words)
            console.log("== I'm found at ", index)
            let string = "Hi "
            for (i = index + 1; i < words.length - 1; i++)
            {
                string = string.concat(words[i], " ")
            }
            string = string.concat(words[words.length - 1])
            if (words[1] == "multitool" || words[1] == "Multitool")
            {
                string = string.concat(`, I'm ${msg.author}!`)
            }
            else
            {
                string = string.concat(", I'm Dad!")
            }
            msg.channel.send(string)
        }
        else if (msg.content === "!help")
        {
            msg.channel.send("You can create a vote by using the command\n!vote"
                + " item 1;item 2;item 3 ...\n")
        }
    })

client.login(process.env.TOKEN)
