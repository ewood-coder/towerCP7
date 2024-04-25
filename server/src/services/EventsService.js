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

	async getOneById(albumId) {
		const album = await dbContext.Albums.findById(albumId).populate('creator memberCount')
		if (!album) throw new Error(`No album with the id: ${albumId}`)
		return album
	}

	async cancelEvent(eventId, userId) {
		const albumToArchive = await this.getOneById(albumId)
		if (albumToArchive.creatorId != userId) throw new Forbidden(`You cannot archive what is not yours`)

		// await albumToArchive.deleteOne() // if you wanted to delete it
		// albumToArchive.archived = true // make the change
		albumToArchive.archived = !albumToArchive.archived // flips the bool
		await albumToArchive.save() // save the changes
		return `${albumToArchive.title} has been archived`
	}

}

export const eventsService = new EventsService()
