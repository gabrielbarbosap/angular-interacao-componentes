"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    urlAvatar: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    city: {
        type: String
    },
    forma: {
        type: String
    },
    tec: {
        type: String
    },
    bio: {
        type: String
    },
    urlGit: {
        type: String
    }
});
exports.User = mongoose.model('User', userSchema);
