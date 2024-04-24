import { Account } from "./Account.js"
import { TowerEvent } from "./TowerEvent.js"


export class TowerComment {
	constructor(data) {
		this.id = data.id
		this.creatorId = data.creatorId
		this.eventId = data.eventId
		this.body = data.body

		// NOTE added a virtual
		this.creator = new Account(data.creator)
	}
}
