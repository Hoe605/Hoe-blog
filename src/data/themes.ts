import type { Theme } from '#src/types/theme';

export const themes: Theme[] = [
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
      '--color-secondary': '#00f0ff', // Cyan for Original
      '--color-bg-card': '#121212',
      '--color-border': '#333333',
      '--card-shadow-hover': '0 0 10px rgba(204, 255, 0, 0.3), 0 0 20px rgba(204, 255, 0, 0.1)'
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
      '--color-secondary': '#546E7A', // 深青灰 for Terracotta (good contrast on light bg)
      '--color-bg-card': '#FFFFFF',   // 白色卡片
      '--color-border': '#E0DCD0',   // 柔和的米灰色边框
      '--card-shadow-hover': '0 10px 15px -3px rgba(62, 39, 35, 0.1), 0 4px 6px -2px rgba(62, 39, 35, 0.05)' // 柔和投影
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
      '--color-secondary': '#6D8B74', // 深抹茶色 for Matcha
      '--color-bg-card': '#FFFFFF',
      '--color-border': '#EAEAEA',   // 极淡的灰边框
      '--card-shadow-hover': '0 10px 15px -3px rgba(127, 169, 155, 0.15), 0 4px 6px -2px rgba(127, 169, 155, 0.1)' // 清新绿色投影
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
      '--color-secondary': '#00FF41', // 经典黑客绿/青 for Cyberpunk
      '--color-bg-card': '#0a0a0a',   // 极深灰卡片
      '--color-border': '#00FF41',    // 亮绿色边框
      '--card-shadow-hover': '0 0 0 1px #00FF41' // 硬边框高亮，无模糊
    }
  }
];

export const defaultThemeId = 'original';
