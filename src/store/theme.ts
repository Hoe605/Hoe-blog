import { atom } from 'nanostores';
import { themes, defaultThemeId } from '#src/data/themes';

// 导出类型以便使用
export type Theme = typeof themes[0];

// 创建 store，初始值为空，将在 mount 时初始化
export const $currentThemeId = atom<string>(defaultThemeId);
export const $currentTheme = atom<Theme>(themes[0]);

// 设置主题的 action
export function setTheme(id: string) {
  const theme = themes.find(t => t.id === id);
  if (theme) {
    $currentThemeId.set(id);
    $currentTheme.set(theme);
    
    // 应用全局 CSS 变量
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      // 应用 global 变量
      for (const [key, value] of Object.entries(theme.global)) {
        root.style.setProperty(key, value);
      }
      // 同时也把 banner 用的变量设置到 root 上，以便非 Vue 组件也能访问
      // (虽然 HeroBanner 主要是自己用的，但保持全局一致性是个好习惯)
      for (const [key, value] of Object.entries(theme.colors)) {
        root.style.setProperty(key, value);
      }
      
      localStorage.setItem('theme', id);
    }
  }
}

// 初始化 store (在客户端运行)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme');
  if (saved && themes.find(t => t.id === saved)) {
    setTheme(saved);
  } else {
    setTheme(defaultThemeId);
  }
}
