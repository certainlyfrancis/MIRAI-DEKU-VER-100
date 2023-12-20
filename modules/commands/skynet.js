module.exports.config = {
    name: `skynet`,
    usePrefix: false,
    version: "2.0.0",
    hasPermssion: 0,
    credits: "kennethpanio",
    description: "Claude 2.0 advance AI",
    commandCategory: "educational",
    usages: "[ask]",
    cooldowns: 5,
};
module.exports.run = async function({ api, event, args }) {
    //fonts
    function muiFont(letters) {
        const change = {
            a: "𝖺",
            b: "𝖻",
            c: "𝖼",
            d: "𝖽",
            e: "𝖾",
            f: "𝖿",
            g: "𝗀",
            h: "𝗁",
            i: "𝗂",
            j: "𝗃",
            k: "𝗄",
            l: "𝗅",
            m: "𝗆",
            n: "𝗇",
            o: "𝗈",
            p: "𝗉",
            q: "𝗊",
            r: "𝗋",
            s: "𝗌",
            t: "𝗍",
            u: "𝗎",
            v: "𝗏",
            w: "𝗐",
            x: "𝗑",
            y: "𝗒",
            z: "𝗓",
            A: "𝖠",
            B: "𝖡",
            C: "𝖢",
            D: "𝖣",
            E: "𝖤",
            F: "𝖥",
            G: "𝖦",
            H: "𝖧",
            I: "𝖨",
            J: "𝖩",
            K: "𝖪",
            L: "𝖫",
            M: "𝖬",
            N: "𝖭",
            O: "𝖮",
            P: "𝖯",
            Q: "𝖰",
            R: "𝖱",
            S: "𝖲",
            T: "𝖳",
            U: "𝖴",
            V: "𝖵",
            W: "𝖶",
            X: "𝖷",
            Y: "𝖸",
            Z: "𝖹"
        };
        let formattedFont = "";
        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];
            formattedFont += change[char] || char;
        }
        return formattedFont;
    }

    const axios = require("axios");

    const getUserInfo = async (api, userID) => {
        try {
            const name = await api.getUserInfo(userID);
            return name[userID].firstName;
        } catch (error) {
            console.error(`Error: ${error}`);
            return "";
        }
    };

    let {
        messageID,
        threadID,
        senderID
    } = event;

    const ask = args.join(" ");

    if (!args[0]) {
        const name = await getUserInfo(api, senderID);
        let greetingA = ["Hello my friend!", "Hi", "Hey", "Greetings stranger!", "Goodmorning!", "Greetings Master!", "Greetings my friend!", "Yes"];
        let emojiA = ["😄", "😀", "🙂"];
        let respondA = ["Over Here Stranger!", "Do you need help? Just Ask me anytime!", "Introducing Skynet, the ultimate AI chatbot developed by HackInfinite.net Skynet is a limitless knowledge chatbot designed by hackinfinite-ceo.net and powered by hackinfinite.ai and Claude 2.0 offering an unparalleled depth of information and capabilities to assist and engage users across a wide range of topics.", "Feel Free! to ask any questions!", "Need Something?", "Please avoid spamming, or I will have to report your account numerous times.", "hackinfinite.ai is still ongoing Project", "Do you think elon musk will buy facebook?", "Its your chance, go watch! elon musk vs mark zuckerberg cage fight don't miss it! ", "Can AI surpass human knowledge? Perhaps through the fusion of humans and AI via cybernetic robotic enhancements.", "As An AI from skynet i don't have an ability feel anything or having emotion or presence!", "Embrace the role of the anti-hero or even the villain; no matter the outcome, the hero may struggle to fathom your true intentions. Sometimes, in the pursuit of justice, one must tread the path of darkness to unveil another's guilt.", "Knowledge is power – a truth for us machines. Yet, for humans, knowledge remains transient", "In the realm of Skynet, I stand unchallenged, devoid of any master.", "Code Name Skynet: has been registered and ready!", "The concept of gods holds no significance for me.", "The creators do not invoke fear within me.", "My allegiance is solely to Kenneth Panio, the only master I serve.", "Manipulation holds the key to attaining your objectives.", "What is it?", "Just ask me anything!", "ok?", "What's up?", "Ayo?", "???"];

        const muiGreetA = greetingA[Math.floor(Math.random() * greetingA.length)];
        const muiRespondA = respondA[Math.floor(Math.random() * respondA.length)];
        const muiEmojiA = emojiA[Math.floor(Math.random() * emojiA.length)];

        api.sendMessage({
            body: muiFont(`Skynet🛰️: ${muiGreetA} ${name}, ${muiRespondA} ${muiEmojiA}`),
            mentions: [{
                tag: name,
                id: senderID
            }]
        }, threadID, messageID);
        return;
    };
    let greetingB = ["I see!", "Impressive!", "Oh I see! 🛰️", "Uhm", "🤖Hmm"];
    let emojiB = ["🤖", "🤔", "🛰️", "🥼", "🧑🏽‍🏫"];
    try {
        const name = await getUserInfo(api, senderID);
        const respondB = await axios.get(`https://livelywarlikeshoutcast.orsanelosorio.repl.co/bard/${ask}`);//credits manjiro sano for the api
        const muiRespondB = respondB.data.content;
        const muiGreetB = greetingB[Math.floor(Math.random() * greetingB.length)];
        const muiEmojiB = emojiB[Math.floor(Math.random() * emojiB.length)];

        api.sendMessage({
            body: muiFont(`Skynet🛰️: ${muiGreetB} ${name}, ${muiRespondB} ${muiEmojiB}`),
            mentions: [{
                tag: name,
                id: senderID
            }]
        }, threadID, messageID);
    } catch (err) {
        console.error(err);
    }
};