import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    updatedAt: { type: Date, default: Date.now },
});

chatSchema.index({ participants: 1 });
module.exports=mongoose.model('chat',chatSchema)
