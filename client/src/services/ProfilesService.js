import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class ProfilesService {

	async getProfile(profileId) {
		AppState.activeProfile = null
		const response = await api.get(`api/profiles/${profileId}`)
		console.log('🧑‍🎨', response.data)
		AppState.activeProfile = new Profile(response.data)
	}
}


export const profilesService = new ProfilesService()
