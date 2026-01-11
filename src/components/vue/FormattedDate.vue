<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	date: string | Date;
}>();

const dateObj = computed(() => new Date(props.date));

const formattedDate = computed(() => {
	return dateObj.value.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
});
</script>

<template>
	<time :datetime="dateObj.toISOString()">
		{{ formattedDate }}
	</time>
</template>
