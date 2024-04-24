// NOTE: CLIENT SIDE

import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js";
import { api } from "./AxiosService.js"




class EventsService {
  async createAlbum(albumData) {
    const response = await api.post('api/albums', albumData)
    console.log('✨📔', response.data);
    const album = new Album(response.data)
    AppState.albums.push(album)
    return album
  }
  async getAlbumById(albumId) {
    const response = await api.get(`api/albums/${albumId}`)
    console.log('📷🦧', response.data)
    const album = new Album(response.data) // DO NOT FORGET TO CLASS YOUR DATA 🙎‍♂️
    AppState.activeAlbum = album
  }
  async getAlbums() {
    const response = await api.get('api/albums')
    console.log('📷📔', response.data)
    const albums = response.data.map(albumData => new Album(albumData))
    AppState.albums = albums
  }

}

export const eventsService = new EventsService()
