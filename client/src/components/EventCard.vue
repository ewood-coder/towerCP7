<script setup>
import { computed } from 'vue';
import { TowerEvent } from '../models/TowerEvent.js';
import { AppState } from '../AppState.js';
import { eventsService } from '../services/EventsService.js';


const props = defineProps({ event: { type: TowerEvent, required: true } })

const account = computed(() => AppState.account)

const borderColor = computed(() => {
	switch (props.event.type) {
		case 'concert':
			return '#006afe' // blue
		case 'convention':
			return '#00c767' // green
		case 'sport':
			return '#b100e2' // purple
		case 'digital':
			return '#EAB222' // orange
		default:
			return '#a6a6a6' // gray
	}
})

</script>


<template>


	<RouterLink :to="{ name: 'Event Details', params: { eventId: event.id } }">
		<div class="card" style="width: 18rem;">
			<img :src="event.coverImg" class="card-img-top"
				alt="https://images.unsplash.com/photo-1556888335-95371827d5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D">
			<div class="p-2 color-border">
				<h4 class="card-title">{{ event.name }}</h4>
				<p class="card-text">Hosted By: {{ event.creator.name }}</p>
				<p>{{ event.startDate.toLocaleDateString() }} - {{ event.location }}</p>
				<p class="mb-0 my-1 d-flex">Capacity: {{ event.capacity }}</p>

				<div v-if="event.creatorId == account?.id">
					<hr class="mb-2" />
				</div>

				<div class="d-flex justify-content-center">

					<div v-if="event.creatorId == account?.id">
						<button @click="cancelEvent()" class="clearBtn text-light p-2 mt-0"><i class="mdi mdi-cancel">
								Cancel Event</i>
						</button>
					</div>

					<div v-else>
						<button hidden class="disabledBtn text-light" title="Can't cancel other people's events"><i
								class="mdi mdi-cancel">
								Cancel Event</i>
						</button>
					</div>

				</div>
			</div>
		</div>
	</RouterLink>

</template>


<style lang="scss" scoped>
.card-text {
	color: var(--bgGreen);
}

.color-border {
	border: 3px solid v-bind(borderColor);
}

.disabledBtn {
	background-color: var(--bgGray);
	border: none;
	transition: 0.4s;
	border-radius: 5px;
}

.sendBtn {
	background-color: var(--bgLightBlue);
	border: none;
	transition: 0.4s;
	border-radius: 5px;
}

.sendBtn:hover {
	background-color: var(--bgGreen);
}

.clearBtn {
	background-color: var(--bgPink);
	border: none;
	transition: 0.4s;
	border-radius: 5px;
}

.clearBtn:hover {
	background-color: var(--bgRed);
}
</style>
