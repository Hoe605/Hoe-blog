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
	<a :href="`/blog/${post.id}/`" class="post-card">
		<div class="image-container">
			<img v-if="post.data.heroImage" :src="post.data.heroImage" alt="" loading="lazy" />
		</div>
		<div class="content">
			<h4 class="title">{{ post.data.title }}</h4>
			<p class="date">
				<FormattedDate :date="post.data.pubDate" />
			</p>
			<p v-if="post.data.description" class="description">
				{{ post.data.description }}
			</p>
		</div>
	</a>
</template>

<style scoped>
.post-card {
	display: flex;
	flex-direction: column;
	height: 100%;
	border-radius: 12px;
	background-color: var(--color-bg-card);
	border: 1px solid var(--color-border);
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	text-decoration: none;
}

.post-card:hover {
	transform: translateY(-4px);
	box-shadow: var(--card-shadow-hover);
	border-color: var(--color-primary);
}

.image-container {
	width: 100%;
	aspect-ratio: 2 / 1;
	overflow: hidden;
	background-color: #000;
}

.image-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.post-card:hover .image-container img {
	transform: scale(1.05);
}

.content {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.title {
	margin: 0 0 0.5rem 0;
	font-size: 1.5rem;
	color: var(--color-text);
	line-height: 1.2;
	transition: color 0.2s ease;
}

.post-card:hover .title {
	color: var(--color-primary);
}

.date {
	margin: 0 0 1rem 0;
	color: var(--color-text-muted);
	font-size: 0.9rem;
}

.description {
	margin: 0;
	color: var(--gray);
	font-size: 1rem;
	line-height: 1.5;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
