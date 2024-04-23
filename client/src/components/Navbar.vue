<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
	document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
	theme.value = theme.value == 'light' ? 'dark' : 'light'
	document.documentElement.setAttribute('data-bs-theme', theme.value)
	saveState('theme', theme.value)
}

</script>

<template>
	<nav class="navbar navbar-expand-sm px-3 bgColor">
		<router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
			<div class="d-flex align-items-center text-light">
				<h1 class="me-3 mb-0"><i class="mdi mdi-chess-rook"></i></h1>
				<h1 class="newFont2 mb-0">Tower</h1>
			</div>
		</router-link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
			aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">

			<div class="ms-0 ms-md-auto d-flex me-auto me-md-0 text-end">
				<!-- LOGIN COMPONENT HERE -->
				<Login class="pe-3 d-flex" />

				<button class="btn text-light fs-3 align-content-center" @click="toggleTheme"
					:title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
					<i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
				</button>
			</div>

		</div>
	</nav>
</template>

<style scoped>
.newFont2 {}

.bgColor {
	background-color: var(--bgDarkBlue);
	color: white;
}

a:hover {
	text-decoration: none;
}

.nav-link {
	text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
	border-bottom: 2px solid var(--bs-success);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
	nav {
		height: 64px;
	}
}

.sticky-top {
	position: sticky;
	top: 0;
}
</style>
