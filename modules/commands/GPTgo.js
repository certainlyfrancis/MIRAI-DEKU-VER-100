const axios = require("axios");

const masterID = "Put your ID here so that the bot can recognize you as the Master"; 

module.exports.config = {
    name: "Gptgo",
    version: "1.1",
    hasPermission: 0,
    credits: "August Quinn",
    description: "Interact with GPTGO API",
    commandCategory: "AI",
    usages: "/gptgo [query]",
    cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
    const getUserInfo = async (api, userID) => {
        try {
            const name = await api.getUserInfo(userID);
            return name[userID].firstName;
        } catch (error) {
            console.error(`${error}`);
        }
    };

    let { messageID, threadID, senderID } = event;
    const query = args.join("");

    if (!query) {
        const name = await getUserInfo(api, senderID);
        const isMaster = senderID === masterID;
        const assistanceMessage = isMaster ? "How may I assist you?" : "How can I help?";

        api.sendMessage({
            body: `👋 Hey ${name}. ${assistanceMessage}`,
            mentions: [{ tag: name, id: senderID }]
        }, threadID, messageID);

        return;
    }

    const name = await getUserInfo(api, senderID);

    try {
        const isMaster = senderID === masterID;
        const apiResponse = await axios.get(`https://gptgo.august-quinn-api.repl.co/api?uid=${senderID}&query=${encodeURIComponent(query)}`);
        const result = apiResponse.data.answer;

        const finalResponse = isMaster ? `👋 Master ${name}! ${result}` : `👋 ${name}, ${result}`;

      api.sendMessage({
          body: finalResponse,
          mentions: [{ tag: name, id: senderID }]
      }, threadID, messageID);
    } catch (error) {
        api.sendMessage("⛔ High Traffic: Please try again later.", threadID, messageID);
    }
};
