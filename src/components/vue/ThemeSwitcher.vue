<template>
  <div class="theme-switcher">
    <button 
      v-for="theme in themes" 
      :key="theme.id"
      :class="['theme-btn', { active: displayThemeId === theme.id }]"
      @click="setTheme(theme.id)"
      :title="theme.name"
      :aria-label="'Switch to ' + theme.name"
    >
      <span class="preview-left" :style="{ backgroundColor: theme.colors['--bg-left'] }"></span>
      <span class="preview-right" :style="{ backgroundColor: theme.colors['--bg-right'] }"></span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { themes, defaultThemeId } from '#src/data/themes';
import { $currentThemeId, setTheme } from '#src/store/theme';

const currentThemeId = useStore($currentThemeId);
const isMounted = ref(false);

const displayThemeId = computed(() => {
  return isMounted.value ? currentThemeId.value : defaultThemeId;
});

onMounted(() => {
  isMounted.value = true;
  // 确保在客户端挂载后，如果 localStorage 有值，强制同步 store
  // 这可以修复刷新页面后，store 初始化可能与 UI 不同步的问题
  const saved = localStorage.getItem('theme');
  if (saved && themes.find(t => t.id === saved)) {
    setTheme(saved);
  }
});
</script>

<style scoped>
/* --- 主题切换器 --- */
.theme-switcher {
  display: flex;
  gap: 10px;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.theme-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.5);
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  display: flex;
  transition: transform 0.2s, border-color 0.2s;
  outline: none;
}

.theme-btn:hover {
  transform: scale(1.1);
  border-color: #fff;
}

.theme-btn.active {
  border-color: #fff;
  box-shadow: 0 0 10px rgba(255,255,255,0.5);
  transform: scale(1.2);
}

.preview-left, .preview-right {
  flex: 1;
  height: 100%;
}
</style>
