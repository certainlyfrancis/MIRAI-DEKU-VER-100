const axios = require("axios");

module.exports.config = {
  name: "brainly",
  version: "1",
  hasPermssion: 0,
  credits: "Prince Sanel",
  description: "Brainly.",
  commandCategory: "Fun",
  usages: "brainly <ask>",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
          let { threadID, messageID } = event;
          const question = event.body.slice(8).trim();

          if (!question) {
            api.sendMessage("Please provide a question.", threadID, messageID);
            return;
          }

          try {
            api.sendMessage("Searching for an answer, Please wait...", threadID, messageID);
            const res = await axios.get(`https://testapi.heckerman06.repl.co/api/other/brainly?text=${encodeURIComponent(question)}`);
            const data = res.data;

            if (data.question && data.answer) {
              const response = `Brainly Api:\nQuestion: ${data.question}\nAnswer:${data.answer}`;
              api.sendMessage(response, threadID, messageID);
            } else {
              api.sendMessage("No answer found for the given question.", threadID, messageID);
            }
          } catch (error) {
            console.error(error);
            api.sendMessage("Error occurred while fetching data from the Brainly API.", threadID, messageID);
  }
};