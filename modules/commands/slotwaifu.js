module.exports.config = {
    name: "slotwaifu",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Binee",
    description: "Game bầu cua có đặt cược  kiểu anime</> Coder by Binee",
    commandCategory: "economy",
    usages: "<[Umaru/Nami/Chitanda/Mirai/Elaina/Mikasa] or [🔥/⚡/��/🦞/🦵/🐱]> <Bet amount (note must be over 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'Binee') {
        console.log(`\x1b[33m[ WARN ]\x1b[37m » Change credits to your mother's dick, dog:))`);
        return api.sendMessage('[ WARN ] Detect bot operator ' + global.config.BOTNAME + ' change credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["Umaru", "Nami", "Chitanda", "Mirai", "Elaina", "Mikasa"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('The "Bet amount" you entered is not a valid number!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('The bet amount cannot be less than 50$', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('Your account does not have enough funds to play.', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'Umaru' || content == '🔥') {
        content1 = 'umaru';
      }
      else if (content == 'Nami' || content == '⚡') {
        content1 = 'nami';
      }
      else if (content == 'Chitanda' || content == '🍙') {
        content1 == 'chitanda';
      }
      else if (content == 'Mirai' || content == '🦞') {
        content1 = 'mirai';
      }
      else if (content == 'Elaina' || content == '🦵') {
        content1 = 'elaina';
      }
      else if (content == 'Mikasa' || content == '🐱') {
        content1 = 'mikasa';
      }
      else {
        return api.sendMessage(`Wrong format\n${global.config.PREFIX}${this.config.name} [Umaru/Nami/Chitanda/Mirai/Elaina/Mikasa] hoặc[🔥/⚡/🍙/🦞/🦵/🐱] <Số tiền cược(lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/umaru.jpg')) {
        request('https://imgur.com/PJ8xGcA.jpg').pipe(createWriteStream(__dirname + '/cache/umaru.jpg'));
      }
      if (!existsSync(__dirname + '/cache/nami.jpg')) {
        request('https://imgur.com/n6TShJP.jpg').pipe(createWriteStream(__dirname + '/cache/nami.jpg'));
      }
      if (!existsSync(__dirname + '/cache/chitanda.jpg')) {
        request('https://imgur.com/tp4Pjo1.jpg').pipe(createWriteStream(__dirname + '/cache/chitanda.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mirai.jpg')) {
        request('https://imgur.com/mf4EMOx.jpg').pipe(createWriteStream(__dirname + '/cache/mirai.jpg'));
      }
      if (!existsSync(__dirname + '/cache/elaina.jpg')) {
        request('https://imgur.com/wYJwU3y.jpg').pipe(createWriteStream(__dirname + '/cache/elaina.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mikasa.jpg')) {
        request('https://imgur.com/C0XFKxy.jpg').pipe(createWriteStream(__dirname + '/cache/mikasa.jpg'));
      }
      if (!existsSync(__dirname + '/cache/quybu.gif')) {
        request('https://imgur.com/KqBXv0U.gif').pipe(createWriteStream(__dirname + '/cache/quybu.gif'));
      }
      // baucua 1
      if (baucua1 == 'Umaru') {
        var bau1 = 'umaru';
        var bau_1 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua1 == 'Nami') {
        var bau1 = 'nami';
        var bau_1 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua1 == 'Chitanda') {
        var bau1 = 'chitanda';
        var bau_1 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua1 == 'Mirai') {
        var bau1 = 'mirai';
        var bau_1 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua1 == 'Elaina') {
        var bau1 = 'elaina';
        var bau_1 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua1 == 'Mikasa') {
        var bau1 = 'mikasa';
        var bau_1 = __dirname + '/cache/mikasa.jpg';
      }
      // baucua 2
      if (baucua2 == 'Umaru') {
        var bau2 = 'umaru';
        var bau_2 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua2 == 'Nami') {
        var bau2 = 'nami';
        var bau_2 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua2 == 'Chitanda') {
        var bau2 = 'chitanda';
        var bau_2 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua2 == 'Mirai') {
        var bau2 = 'mirai';
        var bau_2 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua2 == 'Elaina') {
        var bau2 = 'elaina';
        var bau_2 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua2 == 'Mikasa') {
        var bau2 = 'mikasa';
        var bau_2 = __dirname + '/cache/mikasa.jpg';
      }
      // baucua 3
      if (baucua3 == 'Umaru') {
        var bau3 = 'umaru';
        var bau_3 = __dirname + '/cache/umaru.jpg';
      }
      else if (baucua3 == 'Nami') {
        var bau3 = 'nami';
        var bau_3 = __dirname + '/cache/nami.jpg';
      }
      else if (baucua3 == 'Chitanda') {
        var bau3 = 'chitanda';
        var bau_3 = __dirname + '/cache/chitanda.jpg';
      }
      else if (baucua1 == 'Mirai') {
        var bau3 = 'mirai';
        var bau_3 = __dirname + '/cache/mirai.jpg';
      }
      else if (baucua3 == 'Elaina') {
        var bau3 = 'elaina';
        var bau_3 = __dirname + '/cache/elaina.jpg';
      }
      else if (baucua3 == 'Mikasa') {
        var bau3 = 'Mikasa';
        var bau_3 = __dirname + '/cache/mikasa.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
      if (bau1 == 'umaru') {
        var icon1 = '🔥';
      }
      else if (bau1 == 'nami') {
        var icon1 = '⚡'
      }
      else if (bau1 == 'chitanda') {
        var icon1 = '🍙';
      }
      else if (bau1 == 'mirai') {
        var icon1 = '🦞';
      }
      else if (bau1 == 'elaina') {
        var icon1 = '🦵';
      }
      else if (bau1 == 'mikasa') {
        var icon1 = '🐱';
      }
      // icon 2
      if (bau2 == 'umaru') {
        var icon2 = '🔥';
      }
      else if (bau2 == 'nami') {
        var icon2 = '⚡'
      }
      else if (bau2 == 'chitanda') {
        var icon2 = '🍙';
      }
      else if (bau2 == 'mirai') {
        var icon2 = '🦞';
      }
      else if (bau2 == 'elaina') {
        var icon2 = '🦵';
      }
      else if (bau2 == 'mikasa') {
        var icon2 = '🐱';
      }
      // icon 3
      if (bau3 == 'umaru') {
        var icon3 = '🔥';
      }
      else if (bau3 == 'nami') {
        var icon3 = '⚡'
      }
      else if (bau3 == 'chitanda') {
        var icon3 = '🍙';
      }
      else if (bau3 == 'mirai') {
        var icon3 = '🦞';
      }
      else if (bau3 == 'elaina') {
        var icon3 = '🦵';
      }
      else if (bau3 == 'mikasa') {
        var icon3 = '🐱';
      }
      // sendMessage
      api.sendMessage({
        body: 'Good luck Weabu :3333 ',
        attachment: createReadStream(__dirname + '/cache/quybu.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `icons Anime characters: ${icon1} | ${icon2} | ${icon3}\n🌺You won and got ${moneyBet * 5}$`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 5), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `icon Anime characters: ${icon1} | ${icon2} | ${icon3}\n🌺You have lost and been deducted ${moneyBet}$`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('Error! An error occurred. Please try again later. Please try again in 5s', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
  }