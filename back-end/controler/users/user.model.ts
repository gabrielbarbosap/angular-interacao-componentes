import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
    urlAvatar: String,
    name: String,
    email: String,
    city: String,
    forma: String,
    tec: String,
    bio: String,
    urlGit: String
}

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
})

export const User = mongoose.model<User>('User', userSchema)