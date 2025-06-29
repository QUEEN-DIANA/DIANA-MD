const moment = require("moment-timezone");

function startAutoBio(client) {
  if (global.autoBioInterval) return;

  global.autoBioInterval = setInterval(async () => {
    try {
      const time = moment().tz("Africa/Nairobi").format("HH:mm:ss");
      const date = moment().tz("Africa/Nairobi").format("dddd, MMMM Do YYYY");
      const bio = `🕒 ${time} | 📆 ${date} | 🔁 Silva Spark MD`;
      await client.updateProfileStatus(bio);
    } catch (err) {
      console.error("❌ Error updating autobio:", err);
    }
  }, 60 * 1000); // update every 1 minute

  console.log("✅ Auto bio updater started!");
}

module.exports = startAutoBio;