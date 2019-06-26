const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("!gift");
    console.log("le bot a ete co");
});

bot.login("NTkyNzkyODUwMTgyMzA3ODQw.XRNHgw.ChXSgNBACHYX5pZyxgFmKXu5v6c")
