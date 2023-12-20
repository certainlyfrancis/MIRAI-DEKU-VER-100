module.exports.config = {
  name: "chat2",
version: "1.0.0",
  hasPermssion: 0,
  credits: "jas", 
  description: "chat2 (text)",
  commandCategory: "Simsimi",
  usages: "(text)",
cooldowns: 5, 
}
module.exports.run = async ({ api, event, args }) => { 
  const senku = global.nodemodule.axios
  let Jas = args.join(' ')
  const gen = await senku.get(
  'https://api.phamvandien.xyz/sim?type=ask&ask=' + Jas
)
  var tsukasa = gen.data.answer
  return api.sendMessage('' + tsukasa, event.threadID, event.messageID)
}