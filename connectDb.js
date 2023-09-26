const mongoose = require('mongoose');

exports.connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("✅ Connected to database");
    }).catch((error) => {
        console.log("❌ Error connecting to database", error.message);
    });
}

