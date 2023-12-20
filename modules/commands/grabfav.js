const axios = require('axios');

module.exports.config = {
    name: "GrabFav",
    version: "1.0.0",
    hasPermission: 0,
    credits: "August Quinn",
    description: "Grab Favicon for a domain",
    commandCategory: "Developer Tools",
    cooldowns: 3,
};

module.exports.run = async ({ api, event, args }) => {
    if (!args[0]) {
        return api.sendMessage("Please provide a domain to grab the favicon.", event.threadID, event.messageID);
    }

    const apiUrl = `https://apihunt-favicon-grabber.augustquinn.repl.co/Grab/${args[0]}`;

    try {
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const data = response.data;

            if (data.icons.length === 0) {
                return api.sendMessage("No favicon found for the provided domain.", event.threadID, event.messageID);
            }

            const formattedIcons = data.icons.map((icon, index) => `${index + 1}. ${icon.src}`).join("\n");

            const resultMessage = `
🌐 Favicon for ${data.domain}:\n
${formattedIcons}
`;

            api.sendMessage(resultMessage, event.threadID, event.messageID);
        } else {
            api.sendMessage("An error occurred while fetching favicon information.", event.threadID, event.messageID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching favicon information.", event.threadID, event.messageID);
    }
};
