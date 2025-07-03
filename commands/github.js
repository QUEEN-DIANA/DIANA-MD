async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 DIANA XMD*

*📂 GitHub Repository:*
https://github.com/QUEEN-DIANA/DIANA-MD-

*📢 MAIN CHANNEL:*
https://whatsapp.com/channel/0029VbAxlQKHFxOvBw4stl3s

_STAR💥 AND FORK THE REPO IF U LIKE💋 DIANA-XMD BOT🇿🇼!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418937884318@newsletter',
                    newsletterName: '🧝‍♂️𝐃𝐢𝐚𝐍𝐚 𝐃𝐞𝐯🧝‍♂️',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 