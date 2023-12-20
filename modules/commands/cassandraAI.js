module.exports.config = {
name: "cassandra",
version: "1.0.0",
hasPermssion: 0,
credits: "Prince Sanel/LiANE for CassandraAI",
description: "CassandraAI by Liane",
price: 0,
commandCategory: "Random",
cooldowns: 3,
};
module.exports.run = async function ({ api, args, event, permssion, Currencies }) {
	const { threadID, messageID, senderID } = event;
	const axios = require("axios");
	try {
		const req = args.join(" ");
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const moneyUser = (await getData(senderID)).money;
    if (this.config.price > moneyUser) {
    return api.sendMessage("Your money is not enough to do this request. please check your balance before using this command.", threadID, messageID);
    }
		if (!req) return api.sendMessage("[!] Need an prompt to proceed.", threadID, messageID);
    api.sendMessage(" Answering question... please wait. ", threadID, messageID);
    await decreaseMoney(senderID, parseInt(this.config.price));
		const res = await axios.get(`https://school-project-lianefca.bene-edu-ph.repl.co/ask/cassandra?query=${encodeURIComponent(req)}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch {
		api.sendMessage("An error occured while fetching the api.", threadID, messageID);
	}
}