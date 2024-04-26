<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { eventsService } from '../services/EventsService';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { ticketsService } from '../services/TicketsService';
import MyEventsCard from '../components/MyEventsCard.vue';
import MyTicket from '../components/MyTicket.vue'



export default {

	setup() {
		const eventData = ref({})
		const route = useRoute()
		const router = useRouter()

		onMounted(() => {
			getMyTickets()
		})

		async function getMyTickets() {
			try {
				await ticketsService.getMyTickets()
			} catch (error) {
				Pop.error(error)
			}
		}
		return {
			typeOptions: ['sport', 'concert', 'convention', 'digital'],
			route,
			eventData,
			getMyTickets,
			events: computed(() => AppState.events),
			myEvents: computed(() => AppState.myEvents),
			account: computed(() => AppState.account),
			myTickets: computed(() => AppState.myTickets),
			profile: computed(() => AppState.profile),


			async createEvent() {
				try {
					console.log('eventData', eventData.value)
					const event = await eventsService.createEvent(eventData.value)
					Pop.success('event created')
					eventData.value = {}
					router.push({ name: 'Event Details', params: { eventId: event.id } })
				} catch (error) {
					Pop.error(error)
				}
			}

		}


	},
	components: { MyEventsCard, MyTicket }
}
</script>

<template>
	<div class="myEventsPage container-fluid">
		<h4 class="text-center mt-2">Welcome to your events page</h4>

		<div class="container-fluid">
			<section class="row">
				<h3 class="text-center mt-4">Upcoming Events</h3>

				<div class="col-12 col-md-4 mt-3 d-flex" v-for="myTicket in myTickets" :key="myTicket.id">
					<MyTicket :myTicket="myTicket" />
				</div>

			</section>

		</div>


		<!-- my events I have created -->
		<!-- <section class="row">
      <div class="col-12">
        <h4>My Events</h4>
      </div>
      <div class=" col-12 myEvents" v-for="myEvent in myEvents">
        <MyEventsCard :myEvent="myEvent" :key="myEvent" />

      </div>

    </section> -->
	</div>
</template>


<style lang="scss" scoped></style>
