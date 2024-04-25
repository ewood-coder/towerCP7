<script setup>
import { computed } from 'vue';
import { TowerEvent } from '../models/TowerEvent.js';

const props = defineProps({ event: { type: TowerEvent, required: true } })

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

	<!-- TODO: MAKE SURE TO UNCOMMENT ROUTER LINK WHEN EVENT DETAILS PAGE WORKS -->
	<!-- <RouterLink :to="{ name: 'Event Details', params: { eventId: event.id } }"> -->

	<div class="card" style="width: 18rem;">
		<img :src="event.coverImg" class="card-img-top img-fluid"
			alt="https://images.unsplash.com/photo-1556888335-95371827d5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D">
		<div class="p-2 color-border">
			<h4 class="card-title">{{ event.name }}</h4>
			<p class="card-text">Hosted By: {{ event.creator.name }}</p>
			<p>{{ event.startDate.toLocaleDateString() }} - {{ event.location }}</p>
			<hr class="my-0" />
			<p class="mb-0 my-1">Capacity: {{ event.capacity }}</p>
		</div>
	</div>

	<!-- </RouterLink> -->

</template>


<style lang="scss" scoped>
.card-text {
	color: var(--bgGreen);
}

.color-border {
	border: 3px solid v-bind(borderColor);
}
</style>
