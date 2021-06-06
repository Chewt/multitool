const Discord = require("discord.js")
const client = new Discord.Client()
require('dotenv').config()

client.on("ready", () =>
    {
        console.log(`Logged in as ${client.user.tag}!`)
        client.user.setActivity('!helpme')
    })

client.on("message", msg =>
    {
        var words = msg.content.split(' ')
        if (!msg.author.bot && msg.content === "!compliment")
        {
            msg.channel.send(`Fuck you ${msg.author}`)
        }
        else if (!msg.author.bot && words[0] === "!vote")
        {
            votelist = msg.content.split(';')
            var string = ""
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
        else if (!msg.author.bot && ((words.indexOf('im') !== -1) ||
            (words.indexOf('i\'m') !== -1) || (words.indexOf('I\'m') !== -1) ||
            (words.indexOf('Im') !== -1) || (words.indexOf('imma') !== -1) ||
            words.indexOf('Imma') !== -1))
        {
            var index = words.indexOf("im")
            if (index === -1)
                index = words.indexOf("i\'m")
            if (index === -1)
                index = words.indexOf("I\'m")
            if (index === -1)
                index = words.indexOf("Im")
            if (index === -1) 
                index = words.indexOf('Imma')
            if (index === -1) 
                index = words.indexOf('imma')
            console.log("== I'm found at ", index)
            var string = "Hi "
            for (i = index + 1; i < words.length - 1; i++)
            {
                string = string.concat(words[i], " ")
            }
            string = string.concat(words[words.length - 1])
            string = string.concat(", I'm Dad!")
            msg.channel.send(string)
        }
        else if (msg.content === "!helpme")
        {
            msg.channel.send("You can create a vote by using the command\n!vote"
                + " item 1;item 2;item 3 ...\n")
        }
    })

client.login(process.env.TOKEN)
