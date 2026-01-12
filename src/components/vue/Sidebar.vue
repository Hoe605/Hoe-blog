<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    postCount?: number;
    tagCount?: number;
}>();

const profile = {
    avatar: '/avatar.png',
    name: 'Hoe',
    bio: 'Full Stack Developer',
    location: 'Earth',
    postsCount: props.postCount || 12,
    tagsCount: props.tagCount || 8,
    socials: [
        { name: 'GitHub', url: 'https://github.com', icon: 'github' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ]
};

</script>

<template>
    <aside class="sidebar">
        <div class="profile-card">
            <div class="avatar-wrapper">
                <img :src="profile.avatar" alt="Profile Avatar" class="avatar" />
            </div>
            <div class="info">
                <h3 class="name">{{ profile.name }}</h3>
                <p class="bio">{{ profile.bio }}</p>
            </div>

            <div class="stats">
                <div class="stat-item">
                    <span class="count">{{ profile.postsCount }}</span>
                    <span class="label">文章</span>
                </div>
                <div class="stat-item">
                    <span class="count">{{ profile.tagsCount }}</span>
                    <span class="label">标签</span>
                </div>
            </div>

            <div class="socials">
                <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank"
                    class="social-link">
                    <span class="icon-placeholder">{{ social.name[0] }}</span>
                </a>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 100%;
}

.profile-card {
    background: var(--color-bg-card);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    border: 1px solid #333;
    transition: all 0.3s ease;
    position: sticky;
    top: 2rem;
}

.profile-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--glow-primary);
    transform: translateY(-2px);
}

.avatar-wrapper {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--color-primary);
    box-shadow: 0 0 20px rgba(204, 255, 0, 0.2);
    transition: transform 0.5s ease;
}

.profile-card:hover .avatar-wrapper {
    transform: rotate(360deg);
}

.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
}

.bio {
    color: var(--color-text-muted);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 0;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.count {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--color-text);
}

.label {
    font-size: 0.8rem;
    color: var(--color-text-muted);
}

.socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    transition: all 0.2s ease;
    text-decoration: none;
}

.social-link:hover {
    background: var(--color-primary);
    color: #000;
    transform: scale(1.1);
}

.icon-placeholder {
    font-weight: bold;
}
</style>
