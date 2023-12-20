module.exports.config = {
	name: "afternoon",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good afternoon")==0 || event.body.indexOf("Good afternoon")==0 || event.body.indexOf("good Afternoon")==0 || event.body.indexOf("Good Afternoon")==0 || event.body.indexOf("afternoon")==0 || event.body.indexOf("Afternoon")==0 || event.body.indexOf("magandang hapon")==0 || event.body.indexOf("Magandang hapon")==0 || event.body.indexOf("magandang Hapon")==0 || event.body.indexOf("Magandang Hapon")==0 ) { 
		var msg = {
				body: `Good Afternoon ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
