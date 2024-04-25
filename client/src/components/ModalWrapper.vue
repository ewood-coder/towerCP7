<script setup>
import EventForm from './EventForm.vue';


defineProps({ modalId: String })


</script>


<template>
	<div class="modal fade" :id="modalId" tabindex="-1" data-bs-keyboard="false" role="dialog"
		aria-labelledby="modalTitleId" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
			<div class="modal-content">
				<div class="modal-header">
					Event Form
				</div>
				<div class="modal-body">
					<slot>
						Replaceable content here
					</slot>
				</div>
			</div>
		</div>
	</div>

</template>


<style lang="scss" scoped></style>
