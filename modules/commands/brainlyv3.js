module.exports.config = {
  name: "brainly3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kojiro", 
  description: "Random Jokes",
  commandCategory: "Media",
  usages: "...",
  cooldowns: 5, 
}
module.exports.run = async ({ api, event, args, Users }) => { 
  const senku = global.nodemodule.axios
  let question = args.join(' ')
  let name = await Users.getNameUser(event.senderID)
  const gen = await senku.get(
    `https://api.xteam.xyz/brainly?soal=${question}%&APIKEY=47a7eca31eeaf265`
)
  let joke = gen.data.jawaban
  return api.sendMessage(joke, event.threadID, event.messageID)
  }
