const axios = require("axios");

module.exports.config = {
  name: "meta",
  version: "3.8",
  permission: 0,
  credits: "Hazeyy",
  description: "( 𝙈𝙚𝙩𝙖 𝘼𝙄 𝙭 𝙑𝙤𝙞𝙘𝙚 𝙩𝙤 𝙏𝙚𝙭𝙩 𝙭 𝙄𝙢𝙖𝙜𝙚 𝘾𝙡𝙖𝙨𝙨𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 )",
  commandCategory: "no prefix",
  usage: "( Powered by Meta AI )",
  cooldown: 3,
};

async function convertVoiceToText(audioUrl, api, event) {
  try {
    api.sendMessage("🔊 | 𝖬𝖾𝗍𝖺-𝖠𝖨 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝖺𝗎𝖽𝗂𝗈, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", event.threadID);

    const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/voice2text?url=${encodeURIComponent(audioUrl)}`);
    const text = response.data.transcription;

    if (text) {
      const formattedText = formatFont(text);
      api.sendMessage(`🎓 𝗠𝗲𝘁𝗮 ( 𝗔𝗜 ) 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗧𝗲𝘅𝘁\n\n ${formattedText}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝖴𝗇𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗈𝗇𝗏𝖾𝗋𝗍 𝖠𝗎𝖽𝗂𝗈.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝖺𝗎𝖽𝗂𝗈:", error);
    api.sendMessage("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖼𝗈𝗇𝗏𝖾𝗋𝗍𝗂𝗇𝗀 𝖺𝗎𝖽𝗂𝗈:", event.threadID, event.messageID);
  }
}

async function convertImageToCaption(imageURL, api, event) {
  try {
    api.sendMessage("📷 | 𝖬𝖾𝗍𝖺-𝖠𝖨 𝗋𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", event.threadID);

    const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/image2text/new?image=${encodeURIComponent(imageURL)}`);
    const caption = response.data.caption.generated_text;

    if (caption) {
      const formattedCaption = formatFont(caption);
      api.sendMessage(`📷 𝗠𝗲𝘁𝗮 ( 𝗔𝗜 ) 𝗜𝗺𝗮𝗴𝗲 𝗿𝗲𝗰𝗼𝗴𝗻𝗶𝘁𝗶𝗼𝗻\n\n ${formattedCaption}`, event.threadID, event.messageID);
    } else {
      api.sendMessage("🔴 𝖥𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝖼𝗈𝗇𝗏𝖾𝗋𝗍 𝗍𝗁𝖾 𝗂𝗆𝖺𝗀𝖾.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("🔴 𝖤𝗋𝗋𝗈𝗋 𝖨𝗆𝖺𝗀𝖾 𝖱𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇:", error);
    api.sendMessage("🔴 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝖨𝗆𝖺𝗀𝖾 𝖱𝖾𝖼𝗈𝗀𝗇𝗂𝗍𝗂𝗈𝗇", event.threadID, event.messageID);
  }
}

module.exports.handleEvent = async function ({ api, event }) {
if (!(event.body.indexOf("meta") === 0 || event.body.indexOf("Meta") === 0)) return;
     const args = event.body.split(/\s+/);;
    args.shift();

if (event.type === "message_reply") {
    if (event.messageReply.attachments[0]) {
      const attachment = event.messageReply.attachments[0];

      if (attachment.type === "audio") {
        const audioUrl = attachment.url;
        convertVoiceToText(audioUrl, api, event);
        return;
      } else if (attachment.type === "photo") {
        const imageURL = attachment.url;
        convertImageToCaption(imageURL, api, event);
        return;
      }
    }
  }

  const inputText = event.body;
  api.sendMessage("🗨️ | 𝖬𝖾𝗍𝖺-𝖠𝖨 𝗂𝗌 𝗍𝗁𝗂𝗇𝗄𝗂𝗇𝗀 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", event.threadID);

  try {
    const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/llamav3/chat?prompt=${inputText}`);
    if (response.status === 200) {
      const generatedText = response.data.response;
      const formattedText = formatFont(generatedText);
      api.sendMessage(`🎓 𝗠𝗲𝘁𝗮 ( 𝗔𝗜 )\n\n${formattedText}`, event.threadID);
    } else {
      console.error("🔴 𝖤𝗋𝗋𝗈𝗋 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝗂𝗇𝗀 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝖿𝗋𝗈𝗆 𝖬𝖾𝗍𝖺-𝖠𝖨 𝖠𝖯𝖨.");
    }
  } catch (error) {
    console.error("🔴 𝖤𝗋𝗋𝗈𝗋:", error);
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
