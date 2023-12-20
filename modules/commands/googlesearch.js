const axios = require('axios');

module.exports.config = {
  name: "Googlesearch",
  version: "1.0.0",
  credits: "August Quinn",
  description: "Perform a Google search and retrieve results.",
  commandCategory: "Information Retrieval",
  usage: "/googlesearch [query]",
  cooldowns: 5,
  requiredArgs: 1,
};

module.exports.run = async ({ api, event, args }) => {
  const query = args.join(' ');

  if (!query) {
    api.sendMessage("Please provide a search query.", event.threadID, event.messageID);
    return;
  }

  try {
    const API_BASE_URL = 'http://google.august-api.repl.co/search';
    const response = await axios.get(`${API_BASE_URL}?q=${encodeURIComponent(query)}`);

   const { organic, knowledge, related, people_also_ask } = response.data;

    let message = `Search Results for: ${query}\n`;

    if (organic && organic.length > 0) {
      message += "\n𝗢𝗥𝗚𝗔𝗡𝗜𝗖 𝗥𝗘𝗦𝗨𝗟𝗧𝗦:\n";
      organic.forEach((result, index) => {
        message += `\n${index + 1}. [${result.title}](${result.link})\n${result.description}\n`;
      });
    }

    if (knowledge) {
      message += `\n𝗞𝗡𝗢𝗪𝗟𝗘𝗗𝗚𝗘:\n${knowledge.description}\n`;
    }

    if (related && related.length > 0) {
      message += "\n𝗥𝗘𝗟𝗔𝗧𝗘𝗗 𝗦𝗘𝗔𝗥𝗖𝗛𝗘𝗦:\n";
      related.forEach((relatedSearch) => {
        message += `[${relatedSearch.text}](${relatedSearch.link})\n`;
      });
    }
    
    api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage("An error occurred while performing the Google search.", event.threadID, event.messageID);
  }
};
