const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `Full-Stack Dev`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    corona.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
corona.on("ready", () => {
    var join = corona.channels.get(""); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
corona.login("Njk2ODQ0Nzc5MzQ2MDY3NDk2.YnOyGw.ngjLDE_-Ka4Ur68naV9ecUeco-E");
