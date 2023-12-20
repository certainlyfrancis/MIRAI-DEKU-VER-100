function convert(time){
var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
};
const Deku = process.env['deku']
const headers = {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /"
}
module.exports.config = {
    name: "stalk",
    version: "2.0.0",
    hasPermsion: 0,
    credits: "Réynél",
    description: "Get info using uid/mention/reply to a message",
    usages: "[reply/uid/@mention]",
    commandCategory: "information",
    cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
const request = require("request");
const axios = require("axios");
const fs = require("fs");
let path = __dirname + `/cache/info.png`;
let token = `${Deku}`; /*get your EAAD6V7 token here https://acess.ainz-sama101.repl.co/facebook/token?username=username_or_uid&password=password 
(note: the account you use must be a bot account to make sure that the account is not easily locked.)*/
  if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || event.senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
  try{
const resp = await axios.get(`https://graph.facebook.com/${id}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`,{ headers: headers })
   var name = resp.data.name;
   var link_profile = resp.data.link;
   var uid = resp.data.id;
   var first_name = resp.data.first_name;
   var username = resp.data.username || "No data!";
   var created_time = convert(resp.data.created_time);
   var web = resp.data.website || "No data!";
   var gender = resp.data.gender;
   var relationship_status = resp.data.relationship_status || "No data!";
   var love = resp.data.significant_other || "No data!";
   var bday = resp.data.birthday || "No data!";
   var follower = resp.data.subscribers.summary.total_count || "No data!";
   var is_verified = resp.data.is_verified;
   var quotes = resp.data.quotes || "No data!";
   var about = resp.data.about || "No data!";
  var locale = resp.data.locale || "No data!";
   var hometown = !!resp.data.hometown?resp.data.hometown.name:"No Hometown";
   var cover = resp.data.source || "No Cover photo";
  var avatar = `https://graph.facebook.com/${id}/picture?width=1500&height=1500&access_token=1174099472704185|0722a7d5b5a4ac06b11450f7114eb2e9`;
//callback
let cb = function() {
api.sendMessage({ body: `╭┉┉┅┉┅┄┄•◦ೋ•◦❥•◦ೋ\n⟬🅕︎🅐︎🅑︎⟭ 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗗𝗘𝗞𝗨\n•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉┅┉╯\n❍┉┉𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡┉┉❍
𝗡𝗮𝗺𝗲: ${name}
𝗙𝗶𝗿𝘀𝘁 𝗻𝗮𝗺𝗲: ${first_name}
𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${created_time}
𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗹𝗶𝗻𝗸: ${link_profile}
𝗚𝗲𝗻𝗱𝗲𝗿: ${gender}
𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${relationship_status}
𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${bday}
𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿(𝘀): ${follower}
𝗛𝗼𝗺𝗲𝘁𝗼𝘄𝗻: ${hometown}
𝗟𝗼𝗰𝗮𝗹𝗲: ${locale}
❍۞┉┉┉┉┉𝗘𝗡𝗗┉┉┉┉┉۞❍`, attachment: fs.createReadStream(path)
            }, event.threadID, () => fs.unlinkSync(path), event.messageID);
        };
 request(encodeURI(avatar)).pipe(fs.createWriteStream(path)).on("close", cb);
    } catch (err) {
         api.sendMessage(`❎ | 𝖦𝗈𝗆𝖾𝗇𝗇𝖺𝗌𝖺𝗂 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗁𝖺𝗌 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽: ${err.message}`, event.threadID, event.messageID)
    }
}