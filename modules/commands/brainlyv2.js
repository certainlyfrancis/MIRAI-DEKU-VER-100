module.exports.config = {
  name: "brainly2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Leiam Nash",//fixed by Choru Tiktokers to english.lang
  description: "brainly",
  usages: "[search]",
  commandCategory: "leiamStudy",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
var leiam = args.join(" ");
  if (args.join == 0) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}brainly <search keyword>\n\nExample:\n${global.config.PREFIX}brainly what is javascript\n\n`, threadID, messageID);
const res = await axios.get(`https://api.xteam.xyz/brainly?soal=${leiam}&APIKEY=bb87827d6c4b905e`);
var answer = res.data.jawaban;
  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&en=eng&dt=t&q=${answer}`), (err, response, body) => {
    if (err) return api.sendMessage("An error has occurred\n\nplease contact the developer to fix this issue\n\ndeveloper: Jovan wu\nhttps://www.facebook.com/100085041682156", event.threadID, event.messageID);
  var retrieve = JSON.parse(body);
    var text = '';
    retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
                    }