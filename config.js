import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log(process.env);
export const config = {
  discordToken: process.env.DISCORD_TOKEN,
};
