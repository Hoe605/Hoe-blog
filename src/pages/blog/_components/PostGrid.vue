<script setup lang="ts">
import PostCard from './PostCard.vue';

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
	posts: Post[];
}>();
</script>

<template>
	<section>
		<ul class="posts-grid">
			<li v-for="post in posts" :key="post.id">
				<PostCard :post="post" />
			</li>
		</ul>
	</section>
</template>

<style scoped>
.posts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 2rem;
	list-style: none;
	padding: 0;
	margin: 0;
}

@media (max-width: 720px) {
	.posts-grid {
		grid-template-columns: 1fr;
	}
}
</style>
