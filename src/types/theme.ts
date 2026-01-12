/**
 * 首页 HeroBanner 专用的配色方案 (主要用于双色分割设计)
 */
export interface ThemeColors {
    /** 容器背景色 */
    '--bg-container': string;
    /** 左侧区域背景色 */
    '--bg-left': string;
    /** 左侧区域文字颜色 */
    '--text-left': string;
    /** 右侧区域背景色 */
    '--bg-right': string;
    /** 右侧区域文字颜色 */
    '--text-right': string;
    /** 装饰性阴影/发光颜色 */
    '--shadow-color': string;
    /** 允许其他的 CSS 变量扩展 */
    [key: `--${string}`]: string;
}

/**
 * 全局通用的 UI 设计系统变量
 */
export interface ThemeGlobal {
    /** 页面整体背景色 */
    '--color-bg': string;
    /** 正文文本颜色 */
    '--color-text': string;
    /** 主题高亮色 (用于链接、按钮、修饰等) */
    '--color-primary': string;
    /** 主题高亮色的暗色版本 (用于悬浮态或深层背景) */
    '--color-primary-dim': string;
    /** 卡片/容器背景色 */
    '--color-bg-card': string;
    /** 通用的分割线/边框颜色 */
    '--color-border': string;
    /** 卡片悬浮时的阴影或发光效果 */
    '--card-shadow-hover': string;
    /** 允许其他的 CSS 变量扩展 */
    [key: `--${string}`]: string;
}

/**
 * 完整的主题配置对象
 */
export interface Theme {
    /** 主题唯一标识符 (如 'original', 'cyberpunk') */
    id: string;
    /** 显示给用户看的主题名称 */
    name: string;
    /** 针对 Banner 等特定组件的配色 */
    colors: ThemeColors;
    /** 应用于全站的全局样式变量 */
    global: ThemeGlobal;
}
