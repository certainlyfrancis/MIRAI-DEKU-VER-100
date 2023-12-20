module.exports.config = {
    name: "Voiceassistant",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JOHN RÉ PORAS",
    description: "Pinapagana ng ChatGPT at Google Translate",
    commandCategory: "AI",
    usages: "[tanong]",
    cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    let { messageID, threadID, senderID, body, type, messageReply } = event;
    const response = args.join(" ");
    if (!args[0]) return api.sendMessage("Kumusta ka, ako ay isang voice assistant mula sa GPTGO kasama ang Google translate, ang kasama mong AI na madaling abutin. Anong kaalaman ang hinahanap mo ngayon?", threadID, messageID);
    try {
        const res = await axios.get(`if you have an existing AI conversational there, you can copy the API and place it here=${response}\ngumawa ka ng sagot mo na may isang pangungusap lamang.`);
        var respond = res.data.result;
        const translatedResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tl&dt=t&q=${encodeURIComponent(respond)}`);
        var translatedText = translatedResponse.data[0][0][0];
        const path = resolve(__dirname, 'cache', `${threadID}_${senderID}.wav`);
        await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(translatedText)}&tl=tl&client=tw-ob`, path);
        return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path));
    } catch (error) {
        api.sendMessage("🚫 May naganap na error habang binubuo ang sagot. Subukan muli, maari?", threadID, messageID);
    }
};
