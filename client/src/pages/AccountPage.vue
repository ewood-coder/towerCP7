<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from '../components/AccountForm.vue';

const account = computed(() => AppState.account)

</script>

<template>
	<div class="about text-center">
		<div v-if="account">
			<h1 class="my-3">Welcome {{ account.name }}</h1>
			<img class="rounded mb-2" :src="account.picture" alt="" />
			<p class="mb-4">{{ account.email }}</p>
			<div class="container">
				<AccountForm />
			</div>
		</div>
		<div v-else>
			<h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
		</div>
	</div>

</template>

<style scoped lang="scss">
img {
	max-width: 100px;
}
</style>
