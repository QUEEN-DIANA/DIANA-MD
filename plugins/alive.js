const { cmd } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const pkg = require('../package.json'); // Get version from package.json

cmd({
  pattern: "alive",
  alias: ["status", "runtime", "uptime"],
  desc: "Check uptime and system status",
  category: "main",
  react: "💡",
  filename: __filename
}, async (conn, mek, m, {
  from, sender, reply
}) => {
  try {
    const usedMemMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalMemGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const up = runtime(process.uptime());

    const caption = `
╭━━〔 ✦ 𝐃𝐈𝐀𝐍𝐀 ~ 𝐌𝐃 ✦ 〕━━╮
┃ ⚙️ *Bot Status Report* ⚙️
┃
┃ 🧬 *Version:* ${pkg.version}
┃ ⏱ *Uptime:* ${up}
┃ 🧠 *Memory:* ${usedMemMB} MB / ${totalMemGB} GB
┃ 🖥 *Host:* ${os.hostname()}
┃ 👑 *Owner:* ${global?.config?.OWNER_NAME || "Queen"}
┃ 💖 *Framework:* Diana MD
┃
╰━━━━━━━━━━━━━━━━━━━━╯
🔗 Stay Powered • Stay Sparked
`;

    await conn.sendMessage(from, {
      video: { url: 'https://files.catbox.moe/2xxr9h.mp4' },
      caption,
      gifPlayback: true,
      contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363418937884318@newsletter',
          newsletterName: 'QUEEN DIANA 💖',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error("🔥 Error in .alive command:", e);
    reply(`❌ Error: ${e.message}`);
  }
});