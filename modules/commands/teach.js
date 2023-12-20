const axios = require("axios");

module.exports.config = { usePrefix: true,
    name: "teach",
    version: "1",
    hasPermission: 0,
    credits: "Imtiaz",
    description: "Teach Simsimi",
    usages: "Teach",
    commandCategory: "...",
    cooldowns: 0
};


module.exports.run = async ({ api, event, args }) => {
    try {


        const text = args.join(" ");
        const text1 = text.substr(0, text.indexOf(" | "));
        const text2 = text.split(" | ").pop();

        if (!text1 || !text2) {
            return api.sendMessage(`𝖬𝖺𝗌𝗍𝖾𝗋 𝗍𝗁𝖺𝗍 𝗂𝗌 𝗇𝗈𝗍 𝗍𝗁𝖾 𝗋𝗂𝗀𝗁𝗍 𝗎𝗌𝖺𝗀𝖾.\n𝖳𝗁𝗂𝗌 𝗂𝗌 𝗋𝗂𝗀𝗁𝗍 𝗎𝗌𝖺𝗀𝖾 𝗈𝖿 𝗎𝗌𝗂𝗇𝗀 𝗍𝖾𝖺𝖼𝗁\n${global.config.PREFIX}𝗍𝖾𝖺𝖼𝗁 hi | hello`, event.threadID, event.messageID);
        }

        const response = await axios.get(`https://simsimi.imtiaz18.repl.co/teach?question=${encodeURIComponent(text1)}&answer=${encodeURIComponent(text2)}`);
        api.sendMessage(`ฅ^•ﻌ•^ฅ== ♡︎☾︎ᴅᴇᴋᴜ☽︎♡︎ ==ฅ^•ﻌ•^ฅ\n✅ | 𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗍𝖾𝖺𝖼𝗁𝗂𝗇𝗀 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎𝗋 𝗍𝖾𝗑𝗍 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖺𝖽𝖽𝖾𝖽 𝗍𝗈 𝗍𝗁𝖾 𝖣𝖤𝖪𝖴 𝖽𝖺𝗍𝖺𝖻𝖺𝗌𝖾.\n\n𝗬𝗢𝗨𝗥 𝗧𝗘𝗫𝗧: ${text1}\n𝗗𝗘𝗞𝗨 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗦: ${text2}`, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Emoji dile ami reply dei na❗", event.threadID, event.messageID);
    }
};
