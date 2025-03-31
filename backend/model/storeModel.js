const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    
});

const store = mongoose.model("Store", storeSchema);

module.exports = store;
