const Discord = require('discord.js');
const client = new Discord.Client();

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity("Your message here!", {
        type: "PLAYING", //This can contain PLAYING, WATCHING, LISTENING, STREAMING
    });
})

client.login("token")


// Remember to save the file!

// The following code does not currently work anymore...
/*
client.user.setPresence({
    status: "online",  // You can show online, idle... Do not disturb is dnd
    game: {
        name: "!help",  // The message shown
        type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
    }
});
*/
