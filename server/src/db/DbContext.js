import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { TowerCommentSchema } from '../models/TowerComment.js';
import { TowerEventSchema } from '../models/TowerEvent.js';
import { TicketSchema } from '../models/Ticket.js';


class DbContext {
	Values = mongoose.model('Value', ValueSchema);

	Account = mongoose.model('Account', AccountSchema);

	TowerEvents = mongoose.model('TowerEvent', TowerEventSchema);

	TowerComments = mongoose.model('TowerComment', TowerCommentSchema);

	Tickets = mongoose.model('Ticket', TicketSchema);
}

export const dbContext = new DbContext()
