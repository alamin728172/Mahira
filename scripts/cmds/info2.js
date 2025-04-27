const fs = require('fs');const moment = require('moment-timezone');
module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: "Apon",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = " 🕸️ Rose Dawson 🕷️ ";
    const botPrefix = "x";
    const authorName = "Apon";
    const authorFB = "maybe apon";
    const authorInsta = "ap_o_n1 😒";
    const status = "Loading......";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/Ayan.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/ctg/laxmipur');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `╭────────────◊
├‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 
├‣ 𝐍𝐚𝐦𝐞: ${Apon}
├‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:  ${rose Dawson}
├‣ 𝐏𝐫𝐞𝐟𝐢𝐱:  ${x}
├‣ 𝐅𝐛: ${maybe apon}
├‣ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:  ${ap_o_n1}
├‣ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩: ${single}   
├‣ 𝐓𝐢𝐦𝐞:  ${24h}
├‣ 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptimeString}
╰────────────◊`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
