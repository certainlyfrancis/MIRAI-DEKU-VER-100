module.exports.config = {
	name: "night",
    version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good night")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("good Night")==0 || event.body.indexOf("Good Night")==0 || event.body.indexOf("night")==0 || event.body.indexOf("Night")==0 || event.body.indexOf("nyt")==0 || event.body.indexOf("Nyt")==0 || event.body.indexOf("matulog")==0 || event.body.indexOf("Matulog")==0 || event.body.indexOf("tulog")==0 || event.body.indexOf("Tulog")==0 ) { 
		var msg = {
				body: `Goodnight, ${name} sleep well ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
