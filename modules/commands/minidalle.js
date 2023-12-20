const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "mini",
  version: "2.2",
  hasPermission: 0,
  credits: "Hazeyy",
  description: "( 𝙳𝚊𝚕𝚕𝚎 - 𝙼𝚒𝚗𝚒 )",
  commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
  usages: "( 𝚂𝚒𝚖𝚙𝚕𝚎 𝙼𝚒𝚗𝚒 - 𝙳𝚊𝚕𝚕𝚎 )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("mini") === 0 || event.body.indexOf("Mini") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  if (args.length === 0) {
    api.sendMessage("✨ 𝙷𝚎𝚕𝚕𝚘 𝚝𝚘 𝚞𝚜𝚎 𝙼𝚒𝚗𝚒 𝙳𝚊𝚕𝚕𝚎 𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎: 𝚖𝚒𝚗𝚒 [ 𝚙𝚛𝚘𝚖𝚙𝚝 ]", event.threadID);
    return;
  }

  api.sendMessage("🕟 | 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝙿𝚛𝚘𝚖𝚙𝚝, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", event.threadID);

  try {
    const response = await axios.post('https://codemerge-api.hazeyy0.repl.co/mini-dalle/api', { prompt: args.join(" ") });
    console.log("🟢 𝙰𝙿𝙸 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎:", response.data);

    if (response.data.success) {
      const imageData = response.data.data;

      if (imageData && Array.isArray(imageData)) {
        const item = imageData[0]; 
        const image = await axios.get(item.image, { responseType: "arraybuffer" });
        const path = __dirname + "/cache/" + Math.floor(Math.random() * 999999) + ".jpg";
        fs.writeFileSync(path, image.data);

        api.sendMessage({ body: `🤖 𝐌𝐢𝐧𝐢 𝐃𝐚𝐥𝐥𝐞 ( 𝐀𝐈 )\n\n🖋️ 𝙿𝚛𝚘𝚖𝚙𝚝: '${args.join(" ")}\n\n✨ 𝙷𝚎𝚛𝚎'𝚜 𝚢𝚘𝚞𝚛 𝚙𝚛𝚘𝚖𝚙𝚝:`, attachment: fs.createReadStream(path) }, event.threadID, () => {
          fs.unlinkSync(path);
        });
      } else {
        api.sendMessage("🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚛𝚎𝚚𝚞𝚎𝚜𝚝. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", event.threadID);
      }
    } else {
      api.sendMessage("🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚛𝚎𝚚𝚞𝚎𝚜𝚝, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", event.threadID);
    }
  } catch (error) {
    console.error("⚠️ 𝙰𝙿𝙸 𝙴𝚛𝚛𝚘𝚛:", error);

    if (error.response) {
      api.sendMessage(`🚫 𝙰𝙿𝙸 𝙴𝚛𝚛𝚘𝚛: ${error.response.status} - ${error.response.data}`, event.threadID);
    } else if (error.request) {
      api.sendMessage("🚫 𝙽𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚛𝚎𝚌𝚎𝚒𝚟𝚎𝚍 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝙰𝙿𝙸. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", event.threadID);
    } else {
      api.sendMessage("🚫 𝙰𝚗 𝚞𝚗𝚎𝚡𝚙𝚎𝚌𝚝𝚎𝚍 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", event.threadID);
    }
  }
};

module.exports.run = async function ({ api, event }) {};
