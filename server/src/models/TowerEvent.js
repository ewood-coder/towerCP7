import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const TowerEventSchema = new Schema({
	creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },

	name: { type: String, required: true, minLength: 3, maxLength: 50 },
	description: { type: String, required: true, minLength: 15, maxLength: 1000, default: "friends meeting for an eventful night" },
	coverImg: { type: String, required: true, default: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0aGVyaW5nfGVufDB8fDB8fHww' },
	location: { type: String, required: true, minLength: 1, maxLength: 500 },
	capacity: { type: Number, required: true, min: 1, max: 5000 },
	startDate: { type: Date, required: true },
	isCanceled: { type: Boolean, required: true, default: false },
	type: { type: String, required: true, enum: ['concert', 'convention', 'sport', 'digital', 'misc'], default: 'misc' },
}, { timestamps: true, toJSON: { virtuals: true } })

TowerEventSchema.virtual('creator', {
	localField: 'creatorId',
	ref: 'Account',
	foreignField: '_id',
	justOne: true
})

// NOTE this works a lot like other virtuals but now it's fields are flipped, since it's looking for data matches in a child collection, instead of the reverse, like the creator virtual
TowerEventSchema.virtual('ticketCount', {
	localField: '_id',
	ref: 'Ticket',
	foreignField: '_id',
	justOne: false,
	count: true
})

