module.exports.config = {
  name: "guitarmusic",
  version: "1.0.0",
  permission: 0,
  credits: "Dipto",//don't change the credit please.New coder .So support 🙂🫶🏻
  description: "Send a random video",
  usePrefix: true,
  commandCategory: "entertainment",
  usages: "randomvideo",
  cooldowns: 5
};
  module.exports.run = async ({ api, event, args }) => {
  const dipto  =  ["♡︎••🌼 𝐚𝐛𝐨𝐮𝐭 𝐭𝐡𝐢𝐬 𝐥𝐢𝐧𝐞,🙂🌿\n__🖤🦋দিন শেষে সূর্যটাও বুঝিয়ে দেয়, সময় শেষ হলে স্থাঁন পরিবর্তন হয়..!!🥰","—খুব বেশি নয় আমি অল্পতেই অনেক খুশি,\nপ্রেম নয় আমি প্রকৃত ভালোবাসার স্বপ্ন দেখি!🫶💐","- সামান্য কারণেই যাদের চোখে পানি চলে আসে.!🥺\n-  তারা আসলেই সুন্দর মনের মানুষ।😌❤️","দুনিয়া ততোক্ষণ ভালো লাগে \nযতোক্ষণ মন ভালো থাকে 💔","(◕‿◕)এই শীতে তুমি কি চাও😑🐸","জীবনে এমন একটা পর্যায় আছি যেখানে \nঘুম কম আর ভবিষ্যতের চিন্তা বেশি হয়🙂❤️","🙃😇—কিছু মানুষ অসম্ভব মায়া'য় ফেলে দেয়..🌼🤗","___না পাওয়া সব কিছুই সুন্দর হয়-!!🙂🫰","- শূন্যতায় ভরা জীবনে সফলতার অপেক্ষা!!😍💝","🙃😇—কিছু মানুষ অসম্ভব মায়া'য় ফেলে দেয়..🌼🤗"];
  const randText = dipto[Math.floor(Math.random() * dipto.length)];
  
  const videoLinks = [
  "https://drive.google.com/file/d/1342USMlB9wVBrKhQrDgpQODgGiQ66yrc/view?usp=drivesdk",
    "https://drive.google.com/file/d/1342USMlB9wVBrKhQrDgpQODgGiQ66yrc/view?usp=drivesdk",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const randomIndex = Math.floor(Math.random() * videoLinks.length);
  const randomVideoLink = videoLinks[randomIndex];

  let messageText = '𝗚𝘂𝗶𝘁𝗮𝗿 𝗠𝘂𝘀𝗶𝗰 🎸\n';
  
  global.nodemodule["axios"]
    .get(randomVideoLink, { responseType: "arraybuffer" })
    .then((response) => {
      const path = __dirname + `/cache/dipto_${Date.now()}.mp4`;
      global.nodemodule["fs"].writeFileSync(path, Buffer.from(response.data, 'utf-8'));
      api.sendMessage({ 
        body: messageText + randText,
        attachment: global.nodemodule["fs"].createReadStream(path)
      }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
    })
    .catch(error => {
      console.error("𝗣𝗿𝗼𝗯𝗹𝗲𝗺 𝗕𝗮𝗯𝘆 <🥺", error);
      api.sendMessage("𝗦𝗼𝗿𝗿𝘆 𝗯𝗮𝗯𝘆 <🥺", event.threadID, event.messageID);
    });
};