const Discord = require("discord.js");

var bot = new Discord.Client();

const config = require("./config.json");

const token = config.token

const prefix = config.prefix

bot.on("ready", async () => {
   console.log("Ready");

bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
}).catch(err => {
    console.log(err.stack); 
});

await bot.on("guildDelete" , guild=>{
   console.log(`I have left ${guild.name} at ${new Date()}`);
});

await bot.on("guildCreate" , guild => {
	console.log(`I have joined ${guild.name} at ${new Date()}`);
    guild.channels.find("name", "general").send(`I did nat hit her I did nat, it is bullshit..I did naat! Oh hai ${guild.name}`);
});

await bot.generateInvite("[ADMINISTRATOR]");
console.log("You're my favourite customer!");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //if(message.content === (prefix + "")) {
   // message.channel.send("")} else//

    if(message.content.startsWith(prefix + "ping")) {
       message.reply(`pong \`${Date.now() - message.createdTimestamp} ms\``);    
    } else

    if(message.content.startsWith(prefix + "hello")) {
        message.reply("Oh hai Mark!");     
    } else 
    
    if(message.content.startsWith(prefix + "lisa")) {
        message.channel.send("You're tearing me apart Lisa!");
     } else

     if(message.content === (prefix + "doubt")) {
        message.reply("https://goo.gl/ti3Hmh");
     } else

     if(message.content === (prefix + "betrayal")) {
        message.channel.send("https://goo.gl/4EJgcN");
     } else 

     if(message.content === (prefix + "hi")) {
        message.channel.send("https://goo.gl/YqcwbD");
     } else

     if(message.content === (prefix + "laugh")) {
        message.channel.send("https://goo.gl/oMdWsy");
     } else

     if(message.content === (prefix + "mindblown")) {
        message.channel.send("https://goo.gl/6MsSeh");
     } else

     if(message.content.startsWith(prefix + "sanic")) {
        message.reply("Go, go, go, go, go, go, go, go, go, go. Gotta go fester, fester, fester, fester, fester! Movin' at speed of sound (make tracks). Quickest hedgehag around. Got ourselves a situation, stuck in a new location. Without any explanation... no time for relaxation! Don't blink, don't think... just go-go-go-go-g-g-g-g-go-go! Sanic, he's on the run! Sanic, he's number one. Sanic, he's comin' next! So watch out... For Sanic X! So... (Sanic) nic... (Sanic) X. Gotta go fester! Gotta go fest! Gotta go fester, fester, fester, fester. Sanic X!");
     } else

     if(message.content.startsWith(prefix + "Nsync")) {
         message.reply("Baby bye :wave: , bye :wave: , bye :wave: !");
     } else

     if(message.content.startsWith(prefix + "sex life")) {
        message.reply("That's confidential information I cannat tell you");
     } else

     if(message.content === (prefix + "what a story")) {
        message.channel.send("https://goo.gl/F5Dnc1");
    } else

    if(message.content === (prefix + "basket")) {
       message.channel.send("https://goo.gl/15VByX");
    } else

    if(message.content === (prefix + "snakefu")) {
       message.channel.send("https://goo.gl/aBrvoP");
    } else

    if(message.content === (prefix + "maidfu")) {
       message.channel.send("https://goo.gl/t89iLw");
    } else

    if(message.content === (prefix + "squad")) {
       message.channel.send("https://goo.gl/9wvDwD");
    } else

   if(message.content === (prefix + "starscream")) {
    message.channel.send("https://goo.gl/1rcj8N");
   } else
      
   if(message.content === (prefix + "stronk")) {
      message.reply("https://goo.gl/FxPEXZ");
   } else
      
   if(message.content === (prefix + "ultrawaifu")) {
      message.content("https://goo.gl/hGMB3L"); 
   } else

   if(message.content === (prefix + "franku")) {
      message.channel.search("https://goo.gl/PYcFTk");
   } else

   if(message.content === (prefix + "cheep")) {
      message.channel.send("https://goo.gl/y3Kj2p");
   } else

   if(message.content === (prefix + "rage")) {
      message.reply("https://goo.gl/SwV3Ys");
   } else

   if(message.content === (prefix + "satisfaction")) {
      message.channel.send("https://goo.gl/hCbQbi");
   }
        
});

bot.login(token);