<template>
  <!-- 组件内部依然使用自己的变量，但同时也驱动全局 -->
  <div class="hero-banner-container">
    <div class="hero-banner-wrapper">
      
      <!-- 主题切换器组件 -->
      <div class="theme-switcher-wrapper">
        <ThemeSwitcher />
      </div>

      <!-- 左侧背景层 -->
      <div class="bg-layer left-layer">
        <div class="marquee-content-wrapper" :style="parallaxStyle">
          <div v-for="(row, index) in rows" :key="'left-row-' + index" class="marquee-row">
            <div :class="['marquee-track', row.direction === 'left' ? 'left-scroll' : 'right-scroll']">
              <span v-for="n in 10" :key="'l-content-' + index + '-' + n" class="bg-text">DESIGN & LIFE —&nbsp;</span>
            </div>
            <div :class="['marquee-track', row.direction === 'left' ? 'left-scroll' : 'right-scroll']" aria-hidden="true">
              <span v-for="n in 10" :key="'l-dup-' + index + '-' + n" class="bg-text">DESIGN & LIFE —&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧背景层 -->
      <div class="bg-layer right-layer">
        <div class="marquee-content-wrapper" :style="parallaxStyle">
          <div v-for="(row, index) in rows" :key="'right-row-' + index" class="marquee-row">
            <div :class="['marquee-track', row.direction === 'left' ? 'left-scroll' : 'right-scroll']">
              <span v-for="n in 10" :key="'r-content-' + index + '-' + n" class="bg-text">NOBUGS & CODE —&nbsp;</span>
            </div>
            <div :class="['marquee-track', row.direction === 'left' ? 'left-scroll' : 'right-scroll']" aria-hidden="true">
              <span v-for="n in 10" :key="'r-dup-' + index + '-' + n" class="bg-text">NOBUGS & CODE —&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import ThemeSwitcher from '#src/components/vue/ThemeSwitcher.vue';
import { $currentTheme } from '#src/store/theme';

const currentTheme = useStore($currentTheme);

const rows = [
  { direction: 'left' }, { direction: 'right' }, { direction: 'left' },
  { direction: 'right' }, { direction: 'left' }, { direction: 'right' },
  { direction: 'left' }
];

const currentOffset = ref(0);
let targetOffset = 0;
let animationFrameId = null;
const lerpFactor = 0.08;

const parallaxStyle = computed(() => ({
  transform: `translateY(${currentOffset.value}px) rotate(-3deg)`,
  willChange: 'transform'
}));

const handleMouseMove = (e) => {
  const windowHeight = window.innerHeight;
  const normalizedY = (e.clientY / windowHeight) - 0.5;
  targetOffset = normalizedY * 80;
};

const animate = () => {
  currentOffset.value += (targetOffset - currentOffset.value) * lerpFactor;
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  animate();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.hero-banner-container {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 3rem;
  margin-top: -2rem;
  transform: rotate(-2deg);
  
  background: var(--bg-container);
  box-shadow: 0 10px 0 var(--shadow-color);
  
  clip-path: polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);
  height: 360px; 
  overflow: hidden;
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
}

.hero-banner-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme-switcher-wrapper {
  position: absolute;
  top: 20px;
  right: 5vw;
  z-index: 100;
  /* 恢复之前的旋转，以适应 Banner 的倾斜 */
  transform: rotate(2deg);
}

.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: background-color 0.5s ease;
}

.left-layer {
  background-color: var(--bg-left);
  z-index: 1;
}

.right-layer {
  background-color: var(--bg-right);
  z-index: 2;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 60% 100%);
}

.marquee-content-wrapper {
  height: 180%; 
  margin-top: -10%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  gap: 0;
}

.marquee-row {
  position: relative;
  height: 80px; 
  display: flex;
  align-items: center;
  width: 120vw;
  margin-left: -10vw; 
  overflow: visible;
}

.marquee-track {
  display: flex;
  white-space: nowrap;
  position: absolute;
  left: 0;
  width: fit-content;
  opacity: 0.04;
  user-select: none;
}

.bg-text {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  font-weight: 900;
  font-size: 5rem;
  padding-right: 40px;
  line-height: 1;
  letter-spacing: -2px;
  transition: color 0.5s ease;
}

.left-layer .bg-text { color: var(--text-left); }
.right-layer .bg-text { color: var(--text-right); }

.left-scroll { animation: scrollLeft 30s linear infinite; }
.right-scroll { animation: scrollRight 30s linear infinite; }

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 720px;
  max-width: calc(100% - 2em);
  padding: 0 1em;
  transform: rotate(2deg); 
  display: flex;
  justify-content: center;
}

@media (max-width: 720px) {
  .hero-banner-container { height: 260px; }
  .bg-text { font-size: 2.5rem; }
  .right-layer { clip-path: polygon(50% 0, 100% 0, 100% 100%, 45% 100%); }
  .marquee-row { height: 50px; }
  .theme-switcher-wrapper { right: 10px; top: 10px; }
}
</style>