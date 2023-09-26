const cron = require("node-cron")
const { exec } = require("child_process")
const notifier = require("node-notifier")

console.log("ℹ️ Starting backup script......")

cron.schedule("*/1 * * * *", () => {

    const timestamp = new Date().toLocaleDateString().replaceAll("/", "-");

    const backupCommand = `mongodump --db node-backup `;

    exec(backupCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Backup failed: ${error.message}`);
            notifier.notify({
                title: "❌ Backup failed",
                message: `${error.message}`
            })
        } else {
            console.log('Backup completed successfully');
            // notifier.notify({
            //     title: "✅ Backup completed",
            //     message: `Your backup has been completed successfully ${timestamp}`
            // })
        }
    });

})