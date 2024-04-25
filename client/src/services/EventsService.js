// NOTE: CLIENT SIDE

import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js";
import { api } from "./AxiosService.js"




class EventsService {
  async createEvent(eventData) {
    const response = await api.post('api/events', eventData)
    console.log('✨🎸', response.data);
    const event = new TowerEvent(response.data)
    AppState.events.push(event)
    return event
  }
  async getEventById(eventId) {
    const response = await api.get(`api/events/${eventId}`)
    console.log('📷🦧', response.data)
    const event = new TowerEvent(response.data) // DO NOT FORGET TO CLASS YOUR DATA 🙎‍♂️
    AppState.activeEvent = event
  }
  async getEvents() {
    const response = await api.get('api/events')
    console.log('📷🎸', response.data)
    const events = response.data.map(eventData => new TowerEvent(eventData))
    AppState.events = events
  }

}

export const eventsService = new EventsService()
