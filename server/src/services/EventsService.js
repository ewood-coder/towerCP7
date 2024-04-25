import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"



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

	async editEventById(eventId, eventData, userId) {

		const originalEvent = await this.getOneById(eventId)

		if (!originalEvent) {
			throw new Error('This event does not exist')
		}
		if (originalEvent.creatorId != userId) {
			throw new BadRequest('You cannot edit an event you did not create')
		}
		if (originalEvent.isCanceled)
			throw new BadRequest('A canceled event cannot be edited')

		originalEvent.name = eventData.name ? eventData.name : originalEvent.name
		originalEvent.description = eventData.description ? eventData.description : originalEvent.description
		originalEvent.coverImg = eventData.coverImg ? eventData.coverImg : originalEvent.coverImg
		originalEvent.location = eventData.location ? eventData.location : originalEvent.location
		originalEvent.capacity = eventData.capacity ? eventData.capacity : originalEvent.capacity
		originalEvent.startDate = eventData.startDate ? eventData.startDate : originalEvent.startDate

		originalEvent.type = eventData.type ? eventData.type : originalEvent.type

		await originalEvent.save()
		return originalEvent
	}

	async cancelEvent(eventId, userId) {
		const eventToCancel = await this.getOneById(eventId)
		if (eventToCancel.creatorId != userId) {
			throw new Forbidden("This is not your event to cancel")
		}

		eventToCancel.isCanceled = !eventToCancel.isCanceled

		await eventToCancel.save()
		return eventToCancel
	}



}

export const eventsService = new EventsService()
