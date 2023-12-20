const https = require('https');

module.exports.config = {
  name: "botscope",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "shiki/pat",
  description: "Monitoring service",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const input = args.join(" ");

  if (args.length > 0 && args[0] === "-help") {
    const usage = "Usage: monitor [name] [url]\n\n" +
      "Description: Adds the specified URL to the monitoring list with the given name.\n\n" +
      "Example: monitor MyWebsite https://example.com\n\n" +
      "Note: The monitoring service will periodically check the URL for availability.";
    return api.sendMessage(usage, event.threadID);
  }

  if (args.length < 2) {
    const errorMessage = "ERROR: Please provide a name and URL to add to the monitoring list. Type 'monitor -help' for more information.";
    return api.sendMessage(errorMessage, event.threadID);
  }

  const name = args[0];
  const url = args[1];
  const apiUrl = `https://Botscope.hayih59124.repl.co/shiki/pat?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`;

  https.get(apiUrl, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const responseData = JSON.parse(data);
      if (responseData.error) {
        const errorMessage = `ERROR: Failed to add URL to the monitored list.\nReason: ${responseData.error}`;
        api.sendMessage(errorMessage, event.threadID);
      } else {
        const successMessage = `OK: ${responseData.message}`;
        api.sendMessage(successMessage, event.threadID);
      }
    });
  }).on("error", (error) => {
    const errorMessage = `ERROR: Failed to add URL to the monitored list.\nReason: ${error.message}`;
    api.sendMessage(errorMessage, event.threadID);
  });
};

//Dont change credits or I'll off api