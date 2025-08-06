// User schema and model definitions
// Contains Mongoose schemas and models that define the structure of your data.
// Defines the user schema (e.g., username, email, password, etc.) and exports the Mongoose model.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;