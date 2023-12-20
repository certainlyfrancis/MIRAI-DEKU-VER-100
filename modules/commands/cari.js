const axios = require('axios');

module.exports.config = {
    name: "aicari",
    version: "1.1",
    hasPermission: 0,
    credits: "August Quinn",
    description: "Interact with CARI (Conversational Artificial Intelligence)",
    commandCategory: "AI",
    usages: "/aicari [prompt] = [response]",
    cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, senderID } = event;
    const prompt = args.join(" ");

    if (!prompt) {
        api.sendMessage("How can I assist you today?", event.threadID, event.messageID);
        return;
    }

    try {
        const userName = await getUserName(api, senderID);
        const cariAPI = "https://cari.august-quinn-api.repl.co/response";
        const response = await axios.post(cariAPI, { userID: senderID, userName, prompt });
        const reply = response.data.reply;

        api.sendMessage(reply, threadID, event.messageID);
    } catch (error) {
        console.error("Error:", error);
        api.sendMessage("⛔ High traffic: Please try again later again.", threadID, event.messageID);
    }
};

async function getUserName(api, userID) {
    try {
        const name = await api.getUserInfo(userID);
        return name[userID].firstName;
    } catch (error) {
        console.error("Error getting user name:", error);
        return "Friend";
    }
}
