const axios = require("axios");
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "imgsearch2",
    version: "1.1.1",
    credits: "Réynél",
    usage: "imgsearch query",
    description: "Search for an image on Google",
    hasPermission: 0,
    commandCategory: "searches"
};

module.exports.run = async function ({ api, event, args }) {
    const query = args.join(" ");

    async function performImageSearch() {
        try {
            if (!query) {
                api.sendMessage("ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖯𝗅𝖾𝖺𝗌𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 𝖠 𝖰𝗎𝖾𝗋𝗒...", event.threadID, event.messageID);
                return;
            }

            api.sendMessage("🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖨’𝗆 𝖲𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖳𝗁𝖾 𝖨𝗆𝖺𝗀𝖾, 𝖯𝗅𝖾𝖺𝗌𝖾 𝖶𝖺𝗂𝗍...", event.threadID, event.senderID);

            const res = await axios.get(`https://adonisapi.easyapi0.repl.co/API/gimage?q=${query}`);
            const imgUrls = res.data.data;
            const imgCount = imgUrls.length;

            if (imgCount === 0) {
                api.sendMessage(`❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗇𝗈 𝗂𝗆𝖺𝗀𝖾 𝗋𝖾𝗌𝗎𝗅𝗍𝗌 𝖿𝗈𝗎𝗇𝖽 𝖿𝗈𝗋 "${query}"`, event.threadID, event.messageID);
                return;
            }

            const randomIndices = getRandomIndices(imgCount, Math.min(10, imgCount));
            const attachments = [];

            for (let i = 0; i < randomIndices.length; i++) {
                const index = randomIndices[i];
                const url = imgUrls[index];

                try {
                    const imageResponse = await axios.get(url, { responseType: "arraybuffer" });
                    const imagePath = path.join(__dirname, `cache`, `imgsearch_${i}.png`);
                    fs.writeFileSync(imagePath, imageResponse.data);
                    attachments.push(fs.createReadStream(imagePath));
                } catch (error) {
                    console.log(error);
                    api.sendMessage(error, event.threadID, event.messageID);
                }
            }

            api.sendMessage({
                body: `🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖳𝗁𝗂𝗌 𝗂𝗌 𝗍𝗁𝖾 𝟣𝟢 𝗋𝖺𝗇𝖽𝗈𝗆 𝖨𝗆𝖺𝗀𝖾 𝖱𝖾𝗌𝗎𝗅𝗍 \n𝖳𝗈𝗍𝖺𝗅 𝖱𝖾𝗌𝗎𝗅𝗍 𝗈𝖿 ${imgCount}`,
                attachment: attachments,
            }, event.threadID, event.messageID);

        } catch (error) {
            api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝖽𝗎𝗋𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾 𝗌𝖾𝖺𝗋𝖼𝗁', event.threadID, event.messageID);
        }
    }

    performImageSearch();
};

function getRandomIndices(max, count) {
    const indices = Array.from({ length: max }, (_, i) => i);
    for (let i = max - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, count);
}