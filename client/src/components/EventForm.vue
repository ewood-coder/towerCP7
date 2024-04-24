<script setup>
import { onBeforeUnmount, onUnmounted, ref } from 'vue';
// import { albumsService } from '../services/AlbumsService.js';
import Pop from '../utils/Pop.js';
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';

const router = useRouter() // the router moves you between pages, while the route is you current location

const eventData = ref({
	name: '',
	type: '',
	coverImg: '',
	description: '',
	location: '',
	startDate: '',
	capacity: 0,
})

function resetForm() {
	eventData.value = { name: '', type: '', coverImg: '', description: '', location: '', startDate: '', capacity: 0 }
}

async function createEvent() {
	try {
		const newAlbum = await eventsService.createEvent(eventData.value)// have the service return back the newly created album from the API, then we can use it to push us there in a couple lines
		resetForm()
		Modal.getOrCreateInstance('#create-album-modal').hide() // hide the modal before the push, or the backdrop gets stuck!
		Pop.toast('Album Created!', 'success')
		router.push({ name: 'Album Details', params: { albumId: newAlbum.id } })
	} catch (error) {
		Pop.toast("could not create album", 'error')
		console.error(error);
	}
}

onBeforeUnmount(() => {
	// NOTE this also works to get rid of the modal
	// Modal.getOrCreateInstance('#create-album-modal').hide() // hide the modal before the push, or the backdrop gets stuck!
})

</script>


<template>
	<div class="container-fluid">
		<form @submit.prevent="createAlbum()" class="row">
			<div class="mb-3 col-4">
				<label for="album-title">Title</label>
				<input v-model="eventData.title" type="text" class="form-control" id="album-title" required minlength="3"
					maxlength="25" />
			</div>
			<div class="mb-3 col-4">
				<label for="album-cover-image">Cover Image</label>
				<input v-model="eventData.coverImg" type="text" class="form-control" id="album-cover-image" required
					minlength="1" maxlength="500" />
			</div>
			<div class="mb-3 col-4">
				<label for="album-category">Category</label>
				<select v-model="eventData.category" id="album-category" class="form-control">
					<option value="" disabled selected>Please select a category</option>
					<option value="animals">animals</option>
					<option value="aesthetics">aesthetics</option>
					<option value="crocs">crocs</option>
					<option value="games">games</option>
					<option value="food">food</option>
					<option value="misc">misc</option>
				</select>
			</div>
			<div class="mb-3 col-12">
				<label for="album-description">Description</label>
				<textarea minlength="15" maxlength="250" v-model="eventData.description" id="album-description"
					class="form-control" rows="5"></textarea>
			</div>
			<div class="mb-2 d-flex justify-content-end">
				<button class="btn px-5" type="button" @click="resetForm()">clear</button>
				<button class="btn btn-primary px-4">Submit <i class="mdi mdi-plus"></i></button>
			</div>
		</form>
	</div>
</template>


<style lang="scss" scoped></style>
