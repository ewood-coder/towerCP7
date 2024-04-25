import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { eventsService } from "../services/EventsService.js";
// import { picturesService } from "../services/PicturesService.js";
// import { collaboratorsService } from "../services/CollaboratorsService.js";

// TODO: MAKE SURE TO FINISH MAKING THESE


export class EventsController extends BaseController {
	constructor () {
		super('api/events')
		this.router
			.get('', this.getEvents)
			.get('/:eventId', this.getOneById)
			// .get('/:eventId/comments', this.getEventComments)
			// .get('/:eventId/tickets', this.getEventAttendeesByTicket)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createEvent)
			.delete('/:eventId', this.cancelEvent)
	}
	async createEvent(request, response, next) {
		try {
			const user = request.userInfo
			const eventData = request.body
			eventData.creatorId = user.id
			const event = await eventsService.createEvent(eventData)
			response.send(event)
		} catch (error) {
			next(error)
		}
	}

	async getEvents(request, response, next) {
		try {
			const events = await eventsService.getEvents()
			response.send(events)
		} catch (error) {
			next(error)
		}
	}

	async getOneById(request, response, next) {
		try {
			const eventId = request.params.eventId
			const event = await eventsService.getOneById(eventId)
			response.send(event)
		} catch (error) {
			next(error)
		}
	}

	async cancelEvent(request, response, next) {
		try {
			const eventId = request.params.eventId
			const userId = request.userInfo.id
			const message = await eventsService.cancelEvent(eventId, userId)
			response.send(message)
		} catch (error) {
			next(error)
		}
	}

	//   async getEventComments(request, response, next) {
	//     try {
	//       const eventId = request.params.eventId
	//       const comments = await commentsService.getEventComments(eventId)
	//       response.send(comments)
	//     } catch (error) {
	//       next(error)
	//     }
	//   }

	//   async getEventAttendeesByTicket(request, response, next) {
	//     try {
	//       const eventId = request.params.eventId
	//       const attendees = await ticketsService.getEventAttendeesByTicket(eventId)
	//       response.send(attendees)
	//     } catch (error) {
	//       next(error)
	//     }
	//   }
}
