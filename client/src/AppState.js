import { reactive } from 'vue'
import { TowerEvent } from './models/TowerEvent.js'
import { TowerComment } from './models/TowerComment.js'
import { Ticket } from './models/Ticket.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/ 
  user: null,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  
  /** @type {TowerEvent[]} */
  events: [],

  /** @type {TowerEvent} */
  activeEvent: null,

  /**@type {Event[]} */
  myEvents: [],

  /**@type {Comment[]} */
  comments: [],

  /**@type {Ticket[]} */
  tickets: [],

  /**@type {Ticket[]} */
  myTickets: []
})
