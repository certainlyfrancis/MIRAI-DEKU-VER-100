module.exports.config = {
  name: "chek",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",
  usePrefix: true,
  description: "Check input is a vowel, consonant, or number",
  commandCategory: "checker",
  usages: "chek [Character]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID, body } = event;
  const input = body.slice(body.indexOf(' ') + 1).trim().toLowerCase(); // Assuming command is called like "!chek a" or "!chek 5"

  if (!input) {
    api.sendMessage("Please provide a character.", threadID, messageID);
    return;
  }

  if (input.length === 1) {
    if (input >= '0' && input <= '9') {
      api.sendMessage("It's a number.", threadID, messageID);
    } else if ("aeiou".includes(input)) {
      api.sendMessage("It's a vowel.", threadID, messageID);
    } else if (input >= 'a' && input <= 'z') {
      api.sendMessage("It's a consonant.", threadID, messageID);
    } else {
      api.sendMessage("Invalid input. Please enter a single letter or number.", threadID, messageID);
    }
  } else {
    api.sendMessage("Invalid input. Please enter only one character.", threadID, messageID);
  }
};