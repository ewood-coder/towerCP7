<script setup>

</script>

<template>

	<div class="p-5 text-center bgImg d-flex align-items-end">
		<div class="mask p-3">
			<div class="d-flex justify-content-center align-items-center h-100">
				<div class="text-white">
					<h2 class="mb-3">Event management for people, by people</h2>
					<p class="mb-3 text-start">Whatever your interest, from hiking and reading to networking and skill
						sharing, there
						are thousands of people who share it on Tower. Events are happening every day—log in to join the fun.
					</p>

				</div>
			</div>
		</div>
	</div>

	<section class="container p-2">
		<h2><u>Upcoming Events</u></h2>
		<div class="d-flex gap-3 p-4 justify-content-center">

			<div class="card" style="width: 18rem;">
				<img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png"
					class="card-img-top"
					alt="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
						card's
						content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png"
					class="card-img-top"
					alt="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
						card's
						content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png"
					class="card-img-top"
					alt="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
						card's
						content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png"
					class="card-img-top"
					alt="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
						card's
						content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png"
					class="card-img-top"
					alt="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
						card's
						content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>

		</div>

	</section>

</template>

<style scoped lang="scss">
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
