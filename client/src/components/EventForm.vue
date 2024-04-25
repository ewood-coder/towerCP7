<script setup>
import { onBeforeUnmount, onUnmounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';
import { eventsService } from '../services/EventsService.js';


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
		const newEvent = await eventsService.createEvent(eventData.value)
		resetForm()
		Modal.getOrCreateInstance('#eventFormModal').hide()
		Pop.toast('Event Created!', 'success')
		router.push({ name: 'Event Details', params: { eventId: newEvent.id } })
	} catch (error) {
		Pop.toast("could not create event", 'error')
		console.error(error);
	}
}

</script>


<template>
	<div class="container-fluid">
		<form @submit.prevent="createEvent()" class="row">

			<div class="mb-3 col-12 col-md-4">
				<label for="event-name">Event Name</label>
				<input v-model="eventData.name" type="text" class="form-control" id="event-name" required minlength="3"
					maxlength="50" />
			</div>

			<div class="mb-3 col-12 col-md-4">
				<label for="event-location">Event Location</label>
				<input v-model="eventData.location" type="text" class="form-control" id="event-location" required
					minlength="1" maxlength="500" />
			</div>

			<div class="mb-3 col-12 col-md-4">
				<label for="event-type">Category Type</label>
				<select v-model="eventData.type" id="event-type" class="form-control">
					<option value="" disabled selected>Please select a category</option>
					<option class="LB" value="concert">Concerts</option>
					<option class="LG" value="convention">Conventions</option>
					<option class="PURP" value="sport">Sport</option>
					<option class="ORNG" value="digital">Digital</option>
					<option class="GRAY" value="misc">Misc</option>
				</select>
			</div>


			<div class="mb-3 col-12 col-md-5">
				<label for="event-startDate">Start</label>
				<input v-model="eventData.startDate" id="event-startDate" class="form-control" type="date" />
				<span id="startDateSelected"></span>
			</div>

			<div class="form-group mb-3 col-12 col-md-2">
				<label for="event-capacity">Capacity:</label>
				<input v-model="eventData.capacity" id="event-capacity" type="number" class="form-control" min="1"
					max="5000">
			</div>

			<div class="mb-3 col-12 col-md-5">
				<label for="event-cover-image">Cover Image</label>
				<input v-model="eventData.coverImg" type="text" class="form-control" id="event-cover-image" required />
			</div>

			<div class="mb-3 col-12">
				<label for="event-description">Description</label>
				<textarea minlength="15" maxlength="1000" v-model="eventData.description" id="event-description"
					class="form-control" rows="10"></textarea>
			</div>

			<div class="mb-2 d-flex justify-content-end gap-3">
				<button class="btn px-5 clearBtn text-light" type="button" @click="resetForm()">Clear</button>
				<button class="sendBtn px-4 text-light">Submit <i class="mdi mdi-plus"></i></button>
			</div>
		</form>
	</div>
</template>


<style lang="scss" scoped>
.sendBtn {
	background-color: var(--bgLightBlue);
	border: none;
	transition: 0.4s;
	border-radius: 10px;
}

.sendBtn:hover {
	background-color: var(--bgGreen);
}

.clearBtn {
	background-color: var(--bgPink);
	border: none;
	transition: 0.4s;
	border-radius: 10px;
}

.clearBtn:hover {
	background-color: var(--bgRed);
}

.LB {
	color: #006afe;
}

.LG {
	color: #00c767;
}

.PURP {
	color: #d700d7;
}

.ORNG {
	color: #e0a000;
}

.GRAY {
	color: #4b4b4b;
}
</style>
