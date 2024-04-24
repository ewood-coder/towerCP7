<script setup>
import { computed } from 'vue';
import { TowerEvent } from '../models/TowerEvent.js';

const props = defineProps({ event: { type: TowerEvent, required: true } })


const bgStyle = computed(() => `url(${props.event.coverImg})`)

const borderColor = computed(() => {
	switch (props.event.type) {
		case 'Concerts':
			return '#3DA69F'
		case 'Conventions':
			return '#54C58F'
		case 'Sports':
			return '#6951CA'
		case 'Digital':
			return '#EAB222'
		default:
			return '#CFD8DC'
	}
})

</script>


<template>

	<!-- <RouterLink :to="{ name: 'Event Details', params: { eventId: event.id } }"> -->
	<div class="card border p-2 d-flex">
		<div class="h-100 d-flex align-items-end">
			<img :src="event.coverImg" class="card-img-top"
				alt="https://images.unsplash.com/photo-1556888335-95371827d5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D">
			<div class="card-body p-2 bg-glass rounded text-light">
				<div class="color-border">
					<h4 class="mb-1">{{ event.name }}</h4>
					<div class="d-flex justify-content-between">
						<div v-if="event.creator">
							<img :src="event.creator.picture" class="profile-img"
								alt="`A beautiful picture of ${event.creator.name}`">
							<span class="text-secondary ms-1">{{ event.creator.name }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- </RouterLink> -->


</template>


<style lang="scss" scoped>
.card {
	height: 25vh;
	background-image: v-bind(bgStyle);
	background-position: center;
	background-size: cover;
}

.color-border {
	border-left: 4.5px solid v-bind(borderColor);
	padding-left: 6px;
}
</style>
