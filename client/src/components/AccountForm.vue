<script setup>
import { onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { accountService } from '../services/AccountService.js';
import { AppState } from '../AppState.js';


const accountData = ref({
	name: '',
	picture: '',
})

onMounted(() => {
	// accountData.value = AppState.account // they become the same thing, until saved they they are different
	accountData.value = { ...AppState.account } // creates a copy, with no reference, so as we change it, it doesn't change the account in the appstate
})

async function saveAccount() {
	try {
		await accountService.updateAccount(accountData.value)
		Pop.toast("Account saved!", 'success')
	} catch (error) {
		Pop.toast("Could not save account changes", 'error')
		console.error(error)
	}
}

</script>


<template>
	<section>
		<form @submit.prevent="saveAccount()" class="row">
			<div class="mb-3 col-12 col-md-6 mb-4">
				<label for="account-name">Name</label>
				<input v-model="accountData.name" class="form-control" type="text" id="account-name" minlength="3" required
					maxlength="25" />
			</div>
			<div class="mb-3 col-12 col-md-6 mb-5">
				<label for="account-picture">Picture</label>
				<input v-model="accountData.picture" class="form-control" type="url" id="account-picture" maxlength="500">
			</div>

			<div class="mb-3 col-12 d-flex justify-content-center">
				<button class="btn btn-success text-light">Save <i class="mdi mdi-floppy"></i></button>
			</div>
		</form>
	</section>

	<hr class="my-5" />

	<section>
		<!-- SECTION: YOUR EVENTS -->
		<div class="mb-5">
			<h1 class="text-start">
				<u>Your Events:</u>
			</h1>


		</div>

		<!-- -------------------------------------------------- -->

		<!-- SECTION: ATTENDING EVENTS -->
		<div>
			<h1 class="text-start">
				<u>Upcoming Events You're Attending:</u>
			</h1>


		</div>

	</section>
</template>


<style lang="scss" scoped>
.cover-img {
	width: 100%;
	height: 20vh;
	margin-bottom: -10vh;
	object-fit: cover;
	object-position: center;
}

.profile-img {
	height: 100px;
	width: 100px;
	object-fit: cover;
	object-position: center;
}
</style>
