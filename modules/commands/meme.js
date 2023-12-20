module.exports.config = {
	name: "meme",
  version: "1.0.0",
	hasPermssion: 0,
	credits: "Kojiro", 
	description: "Random Meme",
	commandCategory: "Media",
	usages: "",
  cooldowns: 5
}
module.exports.run = async ({ api, event, args, Users }) => { 
	const request = require("request");
	const fs = require("fs-extra");
	const axios = require("axios")
	const gen = await axios.get('https://api.popcat.xyz/meme')
	var tsukasa = gen.data.image
  let ryusui = gen.data.title
	var callback = () => api.sendMessage({body:`====Random Meme====\n\nTitle: ${ryusui}`,attachment: fs.createReadStream(__dirname + "/cache/meme.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/meme.png"),event.messageID);
	return request(encodeURI(tsukasa)).pipe(fs.createWriteStream(__dirname+'/cache/meme.png')).on('close',() => callback());     
}

	