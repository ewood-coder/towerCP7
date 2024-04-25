import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"



class EventsService {


	async createEvent(eventData) {
		const event = await dbContext.TowerEvents.create(eventData)
		// TODO: MAKE SURE THIS IS ACTUALLY SUPPOSED TO BE CREATOR ticketCount
		await event.populate('creator ticketCount')
		return event
	}
	async getEvents() {
		const events = await dbContext.TowerEvents.find().populate('creator ticketCount')
		return events
	}

	async getOneById(eventId) {
		const event = await dbContext.TowerEvents.findById(eventId).populate('creator ticketCount')
		if (!event) throw new Error(`No event with the id: ${eventId}`)
		return event
	}

	async cancelEvent(eventId, userId) {
		const eventToCancel = await this.getOneById(eventId)
		if (eventToCancel.creatorId != userId) throw new Forbidden(`You cannot archive what is not yours`)

		await eventToCancel.deleteOne() // if you wanted to delete it
		await eventToCancel.save() // save the changes
		return `${eventToCancel.name} has been archived`
	}

}

export const eventsService = new EventsService()
