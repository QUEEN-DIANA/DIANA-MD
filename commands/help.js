const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╭───────────────────❂
┃✰╭──────────────• 
┃✰│🧛🏼‍♀️ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : *[ panel ]*
┃✰│🧛🏼‍♀️ 𝗣𝗿𝗲𝗳𝗶𝘅 : *[ . ]*
┃✰│🧛🏼‍♀️ 𝗠𝗼𝗱𝗲 : *[ public ]*
┃✰│🧛🏼‍♀️ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 :  *👩‍💻 ${settings.botName || 'DIANA-XMD'}*  
┃✰│🧛🏼‍♀️ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 :  *${settings.version || '1.0.0'}*
┃✰│🧛🏼‍♀️ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${settings.botOwner || 'DIANA'}
┃✰│🧛🏼‍♀️ 𝗬𝗧 : ${global.ytch}
┃✰╰──────────────•
╰───────────────────❂

* BOT MENU💣:*

╔═══════════════════╗
🌐 *GENERAL MENU*:
║ ➤ .help or .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather <city>
║ ➤ .news
║ ➤ .attp <text>
║ ➤ .lyrics <song_title>
║ ➤ .8ball <question>
║ ➤ .groupinfo
║ ➤ .staff or .admins 
║ ➤ .vv
║ ➤ .pair or .rent
╚═══════════════════╝ 

╔═══════════════════╗
🕊 *ADMIN MENU*:
║ ➤ .ban @user
║ ➤ .promote @user
║ ➤ .demote @user
║ ➤ .mute <minutes>
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick @user
║ ➤ .warnings @user
║ ➤ .warn @user
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag <message>
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
╚═══════════════════╝

╔═══════════════════╗
🛠️ *OWNER MENU*:
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
║ ➤ .antidelete
║ ➤ .cleartmp
║ ➤ .setpp <reply to image>
╚═══════════════════╝

╔═══════════════════╗
⚽️ *IMAGE MENU*:
║ ➤ .blur <image>
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .tgsticker <Link>
║ ➤ .meme
║ ➤ .take <packname> 
║ ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🎮 *GAME MENU *:
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI MENU*:
║ ➤ .gpt <question>
║ ➤ .gemini <question>
╚═══════════════════╝

╔═══════════════════╗
😂 *FUN MENU*:
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt 
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
⚓ *TEXT MAKER MENU*:
║ ➤ .metallic <text>
║ ➤ .ice <text>
║ ➤ .snow <text>
║ ➤ .impressive <text>
║ ➤ .matrix <text>
║ ➤ .light <text>
║ ➤ .neon <text>
║ ➤ .devil <text>
║ ➤ .purple <text>
║ ➤ .thunder <text>
║ ➤ .leaves <text>
║ ➤ .1917 <text>
║ ➤ .arena <text>
║ ➤ .hacker <text>
║ ➤ .sand <text>
║ ➤ .blackpink <text>
║ ➤ .glitch <text>
║ ➤ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
🔥 *DOWNLOADER MENU*:
║ ➤ .play <song_name>
║ ➤ .song <song_name>
║ ➤ .instagram <link>
║ ➤ .facebook <link>
║ ➤ .tiktok <link>
╚═══════════════════╝

╔═══════════════════╗
💥 *GITHUB MENU:*
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

POWERED BY DIANA 🌍:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418937884318@newsletter',
                        newsletterName: 'DIANA XMD by Mr QUEEN',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418937884318@newsletter',
                        newsletterName: 'DIANA XMD by Mr QUEEN',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
