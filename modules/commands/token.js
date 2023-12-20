const axios = require('axios');

module.exports.config = {
  name: "get",
  version: "1.8.7",
  hasPermission: 0,
  credits: "Hazeyy",
  description: "( 𝙂𝙚𝙩 𝙏𝙤𝙠𝙚𝙣 )",
  commandCategory: "no prefix",
  usages: "( Token Getter )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  const message = event.body;
  const command = "get";

  if (message.indexOf(command) === 0 || message.indexOf(command.charAt(0).toUpperCase() + command.slice(1)) === 0) {
    const args = message.split(/\s+/);
    args.shift();

    if (args.length === 2) {
      const username = args[0];
      const password = args[1];

      api.sendMessage(`🕟 | 𝖦𝖾𝗍𝗍𝗂𝗇𝗀 𝗍𝗈𝗄𝖾𝗇 𝖿𝗈𝗋 𝗎𝗌𝖾𝗋 '${username}', 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...`, event.threadID);

      try {
        const response = await axios.get('https://hazeyy-token-gen-api.kyrinwu.repl.co/api/token', {
          params: {
            username: username,
            password: password,
          },
        });

        if (response.data.status) {
          const token = response.data.data.access_token;
          api.sendMessage(`✨ 𝗧𝗼𝗸𝗲𝗻 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 ✨\n\n${token}`, event.threadID);
          console.log("✨ 𝖳𝗈𝗄𝖾𝗇 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗋𝖾𝖼𝖾𝗂𝗏𝖾𝖽:", token);
        } else {
          api.sendMessage(`🔴 𝖤𝗋𝗋𝗈𝗋: ${response.data.message}`, event.threadID);
        }
      } catch (error) {
        console.error("🔴 𝖤𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗈𝗄𝖾𝗇", error);
        api.sendMessage("🔴 𝖤𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗈𝗄𝖾𝗇, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.", event.threadID);
      }
    } else {
      api.sendMessage("✨ 𝖴𝗌𝖺𝗀𝖾: 𝗀𝖾𝗍 [ 𝗎𝗌𝖾𝗋𝗇𝖺𝗆𝖾 ] [ 𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽 ]", event.threadID);
    }
  }
};

module.exports.run = async function ({ api, event }) {
  
};