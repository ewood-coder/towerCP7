import { dbContext } from "../db/DbContext.js"
import { eventsService } from "./EventsService.js"
import { BadRequest } from "../utils/Errors.js"
import { Forbidden } from "../utils/Errors.js"

class CommentsService {

	async createComment(commentData) {
		const comment = await dbContext.TowerComments.create(commentData)
		await comment.populate('creator event')
		return comment
	}

	async getEventComments(eventId) {
		const comments = await dbContext.TowerComments.find({ eventId: eventId }).populate('creator event')
		return comments
	}

	async deleteComment(commentId, userId) {
		const commentToDelete = await dbContext.TowerComments.findById(commentId).populate('creator')
		if (!commentToDelete) {
			throw new Error('there is no comment to delete')
		}

		if (commentToDelete.creatorId != userId) {
			throw new Forbidden('you are not authorized to delete this')
		}

		await commentToDelete.deleteOne()
		return 'comment was removed'
	}




}

export const commentsService = new CommentsService()