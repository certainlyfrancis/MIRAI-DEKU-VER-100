const axios = require("axios");

module.exports.config = {
  name: "replit",
  version: "2.1.2",
  hasPermssion: 0,
  credits: "Hazeyy",
  description: "( 𝚁𝚎𝚙𝚕𝚒𝚝 𝙰𝙸 )",
  commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
  usages: "( 𝙼𝚘𝚍𝚎𝚕 - 𝙲𝚑𝚊𝚝 𝙱𝚒𝚜𝚘𝚗 )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("replit") === 0 || event.body.indexOf("Replit") === 0)) return;

  const args = event.body.split(/\s+/);
  args.shift();

  const { threadID, messageID } = event;

  if (!args[0]) {
    api.sendMessage("🖋️ 𝙷𝚎𝚕𝚕𝚘 𝙸 𝚊𝚖 𝙼𝚘𝚍𝚎𝚕 𝙲𝚑𝚊𝚝-𝙱𝚒𝚜𝚘𝚗 𝚁𝚎𝚙𝚕𝚒𝚝 𝙰𝙸 𝙸'𝚖 𝚙𝚊𝚛𝚝 𝚘𝚏 𝙶𝚘𝚘𝚐𝚕𝚎 𝚊 𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎 𝚖𝚘𝚍𝚎𝚕 𝚝𝚛𝚊𝚒𝚗𝚎𝚍 𝚋𝚢 𝙶𝚘𝚘𝚐𝚕𝚎.\n\n𝙷𝚘𝚠 𝚖𝚊𝚢 𝚒 𝚊𝚜𝚜𝚒𝚜𝚝 𝚢𝚘𝚞 𝚝𝚘𝚍𝚊𝚢?", threadID, messageID);
    return;
  }

  const input_text = args.join(" ");
  console.log("📖 𝙸𝚗𝚙𝚞𝚝 𝚃𝚎𝚡𝚝:", input_text);

  api.sendMessage("🗨️ | 𝚁𝚎𝚙𝚕𝚒𝚝 𝙰𝙸 𝚒𝚜 𝚝𝚑𝚒𝚗𝚔𝚒𝚗𝚐, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", threadID, messageID);

  try {
    const response = await axios.get(`https://hazeyy-api-useless.kyrinwu.repl.co/api/replit/ai?input=${encodeURIComponent(input_text)}`);
    console.log("🟢 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚏𝚛𝚘𝚖 𝚁𝚎𝚙𝚕𝚒𝚝 𝙰𝙸:", response.data);

    if (response.data.bot_response.trim() !== "") {
      const formattedResponse = `🎓 𝚁𝚎𝚙𝚕𝚒𝚝 ( 𝙰𝙸 ) \n\n🖋️ 𝚃𝚒𝚝𝚕𝚎: '${input_text}'\n\n${formatFont(response.data.bot_response.trim())}`;
      console.log("🖋️ 𝙵𝚘𝚛𝚖𝚊𝚝𝚝𝚎𝚍 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎:", formattedResponse);
      api.sendMessage(formattedResponse, threadID, messageID);
    } else {
      api.sendMessage("🚫 𝙽𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚏𝚘𝚞𝚗𝚍 𝚏𝚛𝚘𝚖 𝚁𝚎𝚙𝚕𝚒𝚝 𝙰𝙸.", threadID, messageID);
    }
  } catch (error) {
    console.error("🚫 𝙴𝚛𝚛𝚘𝚛:", error);

    if (error.response && error.response.status === 503) {
      api.sendMessage("🚫 𝚃𝚑𝚎 𝙰𝙿𝙸 𝚒𝚜 𝚞𝚗𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚛𝚒𝚐𝚑𝚝 𝚗𝚘𝚠. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", threadID, messageID);
    } else {
      api.sendMessage("🚫 𝚃𝚑𝚎 𝙰𝙿𝙸 𝚒𝚜 𝚞𝚗𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚛𝚒𝚐𝚑𝚝 𝚗𝚘𝚠. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.", threadID, messageID);
    }
  }
}

function formatFont(text) {
  const fontMapping = {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}

module.exports.run = async function ({ api, event }) {};