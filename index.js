const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

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

    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {

    case "ping":
     message.reply(`pong \`${Date.now() - message.createdTimestamp} ms\``);    
     break;
    } 

    if(message.content.startsWith(prefix + "hello")) {
        message.reply("Oh hai Mark!");     
    } else 
    
    if(message.content.startsWith(prefix + "lisa")) {
        message.channel.send("You're tearing me apart Lisa!");
     } else

     if(message.content === (prefix + "doubt")) {
        message.reply("https://i.imgur.com/WNqO9Wd.jpg");
     } else

     if(message.content === (prefix + "betrayal")) {
        message.channel.send("https://i.imgur.com/q54x3XB.mp4");
     } else 

     if(message.content === (prefix + "hi")) {
        message.channel.send("https://i.imgur.com/92olrHD.gif");
     } else

     if(message.content === (prefix + "laugh")) {
        message.channel.send("https://i.imgur.com/P2fVH6S.jpg");
     } else

     if(message.content === (prefix + "mindblown")) {
        message.channel.send("https://i.imgur.com/UARUIAx.gif");
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
        message.channel.send("https://i.imgur.com/lNeQuMs.mp4");
    } else
  
    if(message.content === (prefix + "basket")) {
       message.channel.send("https://imgur.com/dHr6stD");
    } else

    if(message.content === (prefix + "snakefu")) {
       message.channel.send("https://i.imgur.com/rUKZn2b.jpg");
    } else

    if(message.content === (prefix + "maidfu")) {
       message.channel.send("https://i.imgur.com/Nu6KA21.jpg");
    } else

    if(message.content === (prefix + "squad")) {
       message.channel.send("https://imgur.com/PPqJsI0");
    } else

   if(message.content === (prefix + "starscream")) {
    message.channel.send("https://i.imgur.com/msJpfzf.jpg");
   } else
      
   if(message.content === (prefix + "stronk")) {
      message.reply("https://i.imgur.com/xSmRfC4.png");
   } else
      
   if(message.content === (prefix + "ultrawaifu")) {
      message.channel.send("https://i.imgur.com/IwZwQoH.jpg"); 
   } else

   if(message.content === (prefix + "franku")) {
      message.channel.send("https://i.imgur.com/d8g9TjA.jpg");
   } else

   if(message.content === (prefix + "cheep")) {
      message.channel.send("https://i.imgur.com/YEAToLI.mp4");
   } else

   if(message.content === (prefix + "rage")) {
      message.reply("https://i.imgur.com/APcWNZ9.mp4");
   } else

   if(message.content === (prefix + "satisfaction")) {
      message.channel.send("https://i.imgur.com/c0BSEl7.png");
   } else
   
   if(message.content === (prefix + "doggy")) {
      message.channel.send("https://i.imgur.com/h7N8Mry.gif");    
   } else
   
   if(message.content === (prefix + "hilarious")) {
      message.channel.send("https://imgur.com/q5hP0hi");
   } else
   
  if(message.content === (prefix + "noon")) {
     message.channel.send("https://imgur.com/pqnbBYh");
   } else
  
 if(message.content === (prefix + "sins")) {
    message.channel.send("https://imgur.com/3Efpyzq");
  } else
  
 if(message.content === (prefix + "chichi")) {
    message.channel.send("https://i.imgur.com/qfHJnC3.png");
 } else
   
if(message.content === (prefix + "admire")) {
   message.channel.send("https://imgur.com/XV6EDzk");
} else

if(message.content === (prefix + "hooked")) {
   message.channel.send("https://imgur.com/aOehKlK");
} else
  
if(message.content === (prefix + "smile")) {
  message.channel.send("https://imgur.com/RGQiV4C");  
} else

if(message.content === (prefix + "eagle")) {
  message.channel.send("https://imgur.com/dFFNgrg");  
} else

if(message.content === (prefix + "pug")) {
  message.channel.send("https://imgur.com/u3xGmjF");
}

if(message.content === (prefix + "knight")) {  
  message.channel.send("https://imgur.com/JOQoJWJ");
} else
  
if(message.content === (prefix + "mitch")) {
  message.channel.send("https://imgur.com/7AJ3Qf1");
} else
  
if(message.content === (prefix + "look")) {
  message.channel.send("https://imgur.com/f1T9xnJ");
} else

if(message.content === (prefix + "overthere")) {
  message.channel.send("https://imgur.com/Rfjw5qe");
} else
  
if(message.content === (prefix + "overhere")) {
  message.channel.send("https://imgur.com/c6N73Bs");  
} else

if(message.content === (prefix + "change")) {
   message.channel.send("https://imgur.com/xm8XFvs");
}
  
if(message.content === (prefix + "wish")) {
   message.channel.send("https://imgur.com/klz4Gy9");
} else

if(message.content === (prefix + "ride")) {
  message.channel.send("https://imgur.com/pSdMQt0");
} else

if(message.content === (prefix + "cosby")) {
  message.channel.send("https://imgur.com/SQ4f4bU");
}
  
});

bot.login(process.env.TOKEN);
