import Discord from "discord.js";
import dotenv from "dotenv";
import { eightBall, fridayCheck } from "./commands/index.js";

dotenv.config();
const client = new Discord.Client();

const prefix = "%";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "jordan":
      msg.channel.send("Oh yeah I know about that, I saw it on youtube");
      break;
    case "josh":
      msg.channel.send("Generating Josh quote... give me a moment!");
      setTimeout(() => {
        msg.channel.send("He's not a very nice guy");
      }, 2000);
      break;
    case "rani":
      msg.channel.send(
        "You guys forcing me to play a game, makes me want to play it less"
      );
      break;
    case "regu":
      msg.channel.send("Yep I'm having fun :)");
      break;
    case "chris":
      msg.channel.send("What did I miss?");
      break;
    case "friday":
      msg.reply(fridayCheck());
      break;
    case "8ball":
      const eightBallResponse = eightBall();
      msg.reply(eightBallResponse);
      break;
    case "healingvibes":
      msg.channel.send("Healing vibes are headed your way");
      break;
    case "whenwilljordanplayfinalfantasy":
      const today = new Date();
      const jordanDate = new Date("07/14/2021");
      const diffTime = Math.abs(jordanDate - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      msg.channel.send(`It is ${diffDays} days until Jordan plays FF14!`);
      break;
  }
});

client.login(process.env.DISCORD_TOKEN);
