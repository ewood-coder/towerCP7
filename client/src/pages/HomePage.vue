<script setup>
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import ModalWrapper from '../components/ModalWrapper.vue';
import EventCard from '../components/EventCard.vue';
import EventForm from '../components/EventForm.vue';
import { eventsService } from '../services/EventsService.js';


const filterBy = ref('all')

const events = computed(() => {
	if (filterBy.value == 'all') return AppState.events
	return AppState.events.filter(event => event.type == filterBy.value)
})

const filters = [
	{
		name: 'All',
		backgroundImage: 'https://images.unsplash.com/photo-1597242051386-c0a24ceae025?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVycGxlJTIwY2xvdWRzfGVufDB8fDB8fHww'
	},
	{
		name: 'Concerts',
		backgroundImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		name: 'Conventions',
		backgroundImage: 'https://images.unsplash.com/photo-1690645724861-08033a9b435b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWUlMjBjb252ZW50aW9uc3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		name: 'Sports',
		backgroundImage: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D'
	},
	{
		name: 'Digital',
		backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D'
	},
	{
		name: 'Misc',
		backgroundImage: 'https://images.unsplash.com/photo-1541356665065-22676f35dd40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFic3RyYWN0fGVufDB8fDB8fHww'
	}
]

async function getEvents() {
	try {
		await eventsService.getEvents()
	} catch (error) {
		Pop.toast("Could not get events", 'error')
		console.error(error)
	}
}

onMounted(() => { // when this component is loaded in, get the albums
	getEvents()
})

</script>

<template>

	<!-- SECTION: JUMBOTRON -->
	<section>
		<div class="p-2 p-md-5 text-center bgImg d-flex align-items-end">
			<div class="mask p-3">
				<div class="d-flex justify-content-center align-items-center h-100">
					<div class="text-white">
						<h2 class="mb-3">Event management for people, by people</h2>
						<p class="mb-3 text-start">Whatever your interest, from hiking and reading to networking and skill
							sharing, there
							are thousands of people who share it on Tower. Events are happening every day—log in to join the
							fun.
						</p>

					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container">

		<!-- SECTION: CREATE EVENT -->
		<section class="row">
			<div class="col-12 mt-3 d-flex gap-4 mb-3">
				<h2>Create Event: </h2>
				<button v-if="account == null" class="fs-3 text-light sendBtn rounded px-2" title="Create a new event!"
					data-bs-toggle="modal" data-bs-target="#eventFormModal">

					<i class="mdi mdi-plus"></i>
				</button>
			</div>

			<hr class="mb-3 mb-md-5" />
		</section>



		<section class="row g-2 my-2 mb-5">
			<h2><u>Explore Top Categories</u></h2>

			<div class="col-6 col-sm-4 col-md-3 text-center" v-for="filterObj in filters" :key="filterObj.name">
				<div @click="filterBy = filterObj.name" role="button" class="filter-card rounded selectable"
					:style="`--bg-img: url(${filterObj.backgroundImage})`">{{ filterObj.name }}</div>
			</div>
		</section>



		<section class="p-2">
			<h2><u>Upcoming Events</u></h2>
			<div v-for="event in events" :key="event.id" class="d-flex flex-wrap gap-3 p-4 justify-content-center">

				<EventCard :event="event" />

			</div>
		</section>

	</div>

	<!-- NOTE the modal has to be here, it's just hidden from view -->
	<ModalWrapper modalId="eventFormModal">
		<!-- <form action="">
  <label for="">Get Creating!</label>
  <input type="text">
</form> -->
		<EventForm />
	</ModalWrapper>
</template>

<style scoped lang="scss">
.filter-card {
	height: 10vh;
	background-color: purple;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: var(--bg-img);
	background-position: center;
	background-size: cover;
	color: white;
	font-weight: bold;
	text-shadow: 0px 0px 10px black;
	filter: contrast(.8);
}

.sendBtn {
	background-color: var(--bgLightBlue);
	border: none;
	transition: 0.4s;
}

.sendBtn:hover {
	background-color: var(--bgGreen);
}

.bgImg {
	// background-size: cover;
	background-image: url('https://www.rocketlawyer.com/binaries/content/gallery/guide-hero-images/US/social-events-outside-of-work-1070271762.jpg');
	background-position: 0em -10em;
	height: 700px;
}

.mask {
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	width: 40%;
}

@media screen and (max-width: 767px) {
	.mask {
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 15px;
		width: 100%;
	}
}

.home {
	display: grid;
	height: 80vh;
	place-content: center;
	text-align: center;
	user-select: none;

	.home-card {
		width: clamp(500px, 50vw, 100%);

		>img {
			height: 200px;
			max-width: 200px;
			width: 100%;
			object-fit: contain;
			object-position: center;
		}
	}
}
</style>
