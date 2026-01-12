<script setup lang="ts">
import FormattedDate from '#src/components/vue/FormattedDate.vue';

interface PostData {
	title: string;
	pubDate: string | Date;
	description?: string;
	heroImage?: string;
}

interface Post {
	id: string;
	data: PostData;
}

defineProps<{
	post: Post;
}>();
</script>

<template>
	<section class="hero-section">
		<a :href="`/blog/${post.id}/`" class="hero-card">
			<div class="hero-image">
				<img v-if="post.data.heroImage" :src="post.data.heroImage" alt="" loading="lazy" />
				<div class="overlay">
					<span class="read-more-overlay">Read Article &rarr;</span>
				</div>
			</div>
			<div class="hero-content">
				<span class="label">Latest Post / 最新推荐</span>
				<h2 class="title">{{ post.data.title }}</h2>
				<p class="date">
					<FormattedDate :date="post.data.pubDate" />
				</p>
				<p class="description">{{ post.data.description }}</p>
				<span class="read-more">Read Article &rarr;</span>
			</div>
		</a>
	</section>
</template>

<style scoped>
.hero-section {
	margin-bottom: 4rem;
}

.hero-card {
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	gap: 2rem;
	background: var(--color-bg-card);
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid var(--color-border);
	transition: border-color 0.3s ease, box-shadow 0.3s ease;
	text-decoration: none;
}

.hero-card:hover {
	border-color: var(--color-primary);
	box-shadow: var(--card-shadow-hover);
}

.hero-image {
	position: relative;
	height: 100%;
	min-height: 400px;
	overflow: hidden;
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: color-mix(in srgb, var(--color-bg-card), transparent 25%);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateX(100%);
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 2;
}

.hero-card:hover .overlay {
	transform: translateX(0);
}

.read-more-overlay {
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--color-primary);
	text-transform: uppercase;
	letter-spacing: 0.1em;
}

.hero-image img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.5s ease;
}

.hero-card:hover .hero-image img {
	transform: scale(1.03);
}

.hero-content {
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.hero-content .label {
	color: var(--color-primary);
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	margin-bottom: 1rem;
}

.hero-content .title {
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
	color: var(--color-text);
	line-height: 1.1;
}

.hero-content .date {
	color: var(--color-text-muted);
	margin-bottom: 1.5rem;
}

.hero-content .description {
	font-size: 1.1rem;
	line-height: 1.6;
	color: var(--gray);
	margin-bottom: 2rem;
}

.read-more {
	display: inline-flex;
	align-items: center;
	color: var(--color-primary);
	font-weight: bold;
	gap: 0.5rem;
}

@media (max-width: 960px) {
	.hero-card {
		grid-template-columns: 1fr;
	}

	.hero-image {
		min-height: 300px;
		aspect-ratio: 16/9;
	}

	.hero-content {
		padding: 2rem;
	}
}

@media (max-width: 720px) {
	.hero-content .title {
		font-size: 1.8rem;
	}
}
</style>
