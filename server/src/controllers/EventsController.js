import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { eventsService } from "../services/EventsService.js";
import { commentsService } from "../services/CommentsService.js";
import { ticketsService } from "../services/TicketsService.js";


export class EventsController extends BaseController {
	constructor () {
		super('api/events')
		this.router
			.get('', this.getEvents)
			.get('/:eventId', this.getOneById)
			.get('/:eventId/comments', this.getEventComments)
			.get('/:eventId/tickets', this.getOtherPeoplesEventTickets)

			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createEvent)
			.put('/:eventId', this.editEventById)
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
			const event = await eventsService.cancelEvent(eventId, userId)
			response.send(event)
		} catch (error) {
			next(error)
		}
	}

	async editEventById(request, response, next) {
		try {
			const eventId = request.params.eventId
			const userId = request.userInfo.id
			const eventData = request.body
			const event = await eventsService.editEventById(eventId, eventData, userId)
			response.send(event)

		} catch (error) {
			next(error)
		}
	}

	async getEventComments(request, response, next) {
		try {
			const eventId = request.params.eventId
			const comments = await commentsService.getEventComments(eventId)
			response.send(comments)
		} catch (error) {
			next(error)
		}
	}

	async getOtherPeoplesEventTickets(request, response, next) {
		try {
			const eventId = request.params.eventId
			const eventTickets = await ticketsService.getOtherPeoplesEventTickets(eventId)
			response.send(eventTickets)
		} catch (error) {
			next(error)
		}
	}
}
