const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
    console.log('ready!!!')

    client.user.setActivity("Tutorial bot!", { type: "STREAMING", url: "https://www.twitch.tv/lookinsomething" }) // YOU CAN PUT ANY TWITCH STREAMING LINK IN THIS AREA
})

client.login("NzY3Mjg1MDgyNjc4NjI0Mjc2.X4vr6w.Go2_FHJFUtvM4u9GpLldAZ_niR8") // Put your token here

// REMEMBER TO CLICK Ctrl + S to save it or else it won't work!!!
// MY TOKEN WILL BE RESET WHENEVER I POSTED OUT A VIDEO ABOUT TUTORIAL!

// REMEMBER TO CLICK CTRL + S TO SAVE THE WORK YOU'VE DONE!