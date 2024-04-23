<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
	<header>
		<Navbar />
	</header>
	<main>
		<router-view />
	</main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
	--main-height: calc(100vh - 32px - 64px);

	--bgWhite: white;
	--bgDarkBlue: #2b2d42;
	--bgPink: #E86A92;
	--bgGold: #FFD41C;
	--bgLightBlue: #2bb6cf;
	--bgTurquoise: #41e2ba;
	--bgGreen: #22c122;
	--bgGray: #868686;
	--bgRed: #da0000;
}

.bgWhite {
	color: black;
	background-color: var(--bgWhite);
}


footer {
	display: grid;
	place-content: center;
	height: 32px;
}
</style>
