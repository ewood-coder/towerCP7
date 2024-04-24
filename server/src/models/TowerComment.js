import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const TowerCommentSchema = new Schema({
	creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
	eventId: { type: Schema.ObjectId, required: true, ref: 'TowerEvent' },

	body: { type: String, required: true },

}, { timestamps: true, toJSON: { virtuals: true } })

TowerCommentSchema.virtual('creator', {
	localField: 'creatorId',
	ref: 'Account',
	foreignField: '_id',
	justOne: true
})

