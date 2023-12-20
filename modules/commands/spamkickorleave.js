let messageCounts = {};
let spamDetectionEnabled = true;
const spamThreshold = 10;
const spamInterval = 60000;

module.exports.config = {
  name: "spamkickorleave",
  version: "1.1.0",
  hasPermission: 2,
  credits: "Réynél",
  description: "Automatically detect and act on spam",
  commandCategory: "group",
  usages: "[on/off]",
  cooldowns: 5,
};

module.exports.run = function ({ api, event, args }) {
  const mode = args[0]?.toLowerCase();

  if (mode === "on") {
    spamDetectionEnabled = true;
    api.sendMessage("🟢 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗉𝖺𝗆 𝖽𝖾𝗍𝖾𝖼𝗍𝗂𝗈𝗇 𝗂𝗌 𝗇𝗈𝗐 𝖾𝗇𝖺𝖻𝗅𝖾𝖽.", event.threadID, event.messageID);
  } else if (mode === "off") {
    spamDetectionEnabled = false;
    api.sendMessage("🔴 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗉𝖺𝗆 𝖽𝖾𝗍𝖾𝖼𝗍𝗂𝗈𝗇 𝗂𝗌 𝗇𝗈𝗐 𝖽𝗂𝗌𝖺𝖻𝗅𝖾𝖽.", event.threadID, event.messageID);
  } else {
    api.sendMessage("❎ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖺𝗍 𝗂𝗌 𝗂𝗇𝗏𝖺𝗅𝗂𝖽 𝗎𝗌𝖺𝗀𝖾. 𝖴𝗌𝖾 '𝗈𝗇' 𝗍𝗈 𝖾𝗇𝖺𝖻𝗅𝖾 𝖺𝗇𝖽 '𝗈𝖿𝖿' 𝗍𝗈 𝖽𝗂𝗌𝖺𝖻𝗅𝖾 𝗌𝗉𝖺𝗆 𝖽𝖾𝗍𝖾𝖼𝗍𝗂𝗈𝗇.", event.threadID, event.messageID);
  }
};

module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID, senderID, isAdmin } = event;

  if (!spamDetectionEnabled) {
    return;
  }

  if (!messageCounts[threadID]) {
    messageCounts[threadID] = {};
  }

  if (!messageCounts[threadID][senderID]) {
    messageCounts[threadID][senderID] = {
      count: 1,
      timer: setTimeout(() => {
        delete messageCounts[threadID][senderID];
      }, spamInterval),
    };
  } else {
    messageCounts[threadID][senderID].count++;
    if (messageCounts[threadID][senderID].count > spamThreshold) {
      if (isAdmin) {
        api.removeUserFromGroup(senderID, threadID); // Bot kicks the user 😂 
        api.sendMessage({
          body: "🛡️ | 𝖲𝖾𝗇𝗌𝖾𝗂 𝗂𝗌 𝖽𝖾𝗍𝖾𝖼𝗍𝖾𝖽 𝗌𝗉𝖺𝗆𝗆𝗂𝗇𝗀. 𝖳𝗁𝖾 𝗎𝗌𝖾𝗋 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗄𝗂𝖼𝗄𝖾𝖽 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉.",
          mentions: [{
            tag: senderID,
            id: senderID,
          }],
        }, threadID, messageID);
      } else {
        api.removeUserFromGroup(api.getCurrentUserID(), threadID); // Bot leaves when spam
        api.sendMessage("🛡️ | 𝖲𝖾𝗇𝗌𝖾𝗂 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝖽𝖾𝗍𝖾𝖼𝗍𝖾𝖽 𝗌𝗉𝖺𝗆𝗆𝗂𝗇𝗀. 𝖨 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝗏𝖾 𝗂𝗇 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉 𝖽𝗎𝖾 𝗍𝗈 𝗌𝗉𝖺𝗆.", threadID, messageID);
      }
    }
  }
};
