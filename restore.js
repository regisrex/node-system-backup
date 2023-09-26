const { exec } = require('child_process');

const backupDir = 'backup'; // Change this to your backup directory
const backupFileName = '26-09-20230.9006174316393012.bson';

const restoreCommand = `mongorestore`

exec(restoreCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Restore failed: ${error.message}`);
    } else {
        console.log('Restore completed successfully');
    }
});
