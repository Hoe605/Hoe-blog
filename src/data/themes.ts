export const themes = [
  {
    id: 'original',
    name: '赛博朋克 (Original)',
    colors: {
      '--bg-container': '#000000',
      '--bg-left': '#FCEE09',
      '--text-left': '#000000',
      '--bg-right': '#1C51E8',
      '--text-right': '#FFFFFF',
      '--shadow-color': '#ccff00'
    },
    // 全局样式映射
    global: {
      '--color-bg': '#050505',
      '--color-text': '#eeeeee',
      '--color-primary': '#ccff00', 
      '--color-primary-dim': '#99bf00',
      '--color-bg-card': '#121212'
    }
  },
  {
    id: 'terracotta',
    name: '陶土深海 (Terracotta)',
    colors: {
      '--bg-container': '#F2F0E9',
      '--bg-left': '#D98E73',
      '--text-left': '#3E2723',
      '--bg-right': '#546E7A',
      '--text-right': '#F2F0E9',
      '--shadow-color': '#D98E73'
    },
    global: {
      '--color-bg': '#F7F5F0',       // 柔和米色背景
      '--color-text': '#3E2723',     // 深褐色文字
      '--color-primary': '#D98E73',  // 陶土色作为高亮
      '--color-primary-dim': '#B96E53',
      '--color-bg-card': '#FFFFFF'   // 白色卡片
    }
  },
  {
    id: 'matcha',
    name: '抹茶拿铁 (Matcha)',
    colors: {
      '--bg-container': '#FFFFFF',
      '--bg-left': '#E0C09F',
      '--text-left': '#FFFFFF',
      '--bg-right': '#7FA99B',
      '--text-right': '#FFFFFF',
      '--shadow-color': '#E0C09F'
    },
    global: {
      '--color-bg': '#F9F9F9',       // 极淡灰白
      '--color-text': '#2C3E50',     // 深蓝灰文字
      '--color-primary': '#7FA99B',  // 抹茶绿高亮
      '--color-primary-dim': '#5F897B',
      '--color-bg-card': '#FFFFFF'
    }
  },
  {
    id: 'cyberpunk',
    name: '终端 (Terminal)',
    colors: {
      '--bg-container': '#111111',
      '--bg-left': '#222222',
      '--text-left': '#CCFF00',
      '--bg-right': '#3300FF',
      '--text-right': '#FFFFFF',
      '--shadow-color': '#CCFF00'
    },
    global: {
      '--color-bg': '#000000',       // 纯黑
      '--color-text': '#00FF41',     // 黑客绿文字
      '--color-primary': '#CCFF00',  // 酸性绿
      '--color-primary-dim': '#AAFF00',
      '--color-bg-card': '#0a0a0a'   // 极深灰卡片
    }
  }
];

export const defaultThemeId = 'original';
