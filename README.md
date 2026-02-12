# 像素風格2D RPG遊戲製作指南

**一份完整的互動式網頁指南，涵蓋遊戲引擎選擇、設定最佳實踐，以及免費AI輔助開發工具推薦。**

## 📋 專案概述

本專案是一個現代化的互動式網頁應用，為有志於開發像素風格2D RPG遊戲的開發者提供全面的資源與指導。網站採用**野獸主義與像素藝術融合**的設計風格，結合了粗獷的幾何形狀與精緻的像素藝術元素，創造出獨特且專業的視覺體驗。

### 核心內容

- **遊戲引擎指南**：Unity 2D Pixel Perfect和Cocos Creator的詳細設定教學
- **AI工具推薦**：6款免費的遊戲開發AI工具介紹與比較
- **完整文檔**：可下載的Markdown技術指南，包含設定步驟和參考資料
- **互動式設計**：現代化的UI/UX，支援標籤切換、卡片展示、外部連結導航

## 🎨 設計特色

### 視覺設計

採用**Brutalism + Pixel Art Fusion**設計理念：

- **色彩調色盤**：靈感來自NES 54色限制
  - 深邃石墨黑（#1a1a1a）：背景基色
  - 琥珀黃（#f4a261）：主要強調色
  - 螢光綠（#2a9d8f）：次要強調色
  - 警示紅（#e76f51）：警告與重點標記

- **排版系統**：
  - 標題：JetBrains Mono Bold（等寬字體，強調技術感）
  - 副標題：Inter SemiBold（現代無襯線字體）
  - 正文：Inter Regular（易讀性優先）

- **佈局範式**：不對稱分割式設計，使用對角線切割和重疊元素創造動態視覺流動

### 互動元素

- 像素化邊框與陰影效果
- CRT掃描線紋理背景
- 流暢的過渡動畫（0.15-0.2s）
- 懸停狀態的視覺反饋

## 🚀 快速開始

### 環境要求

- Node.js 22.13.0 或更高版本
- pnpm 10.4.1 或更高版本

### 安裝步驟

```bash
# 1. 安裝依賴
pnpm install

# 2. 啟動開發伺服器
pnpm run dev

# 3. 在瀏覽器中打開
# http://localhost:3000
```

### 構建與部署

```bash
# 構建生產版本
pnpm run build

# 本地預覽生產版本
pnpm run preview

# 啟動生產伺服器
pnpm run start
```

## 📁 專案結構

```
pixel-rpg-guide/
├── src/
│   ├── client/                    # 前端應用
│   │   ├── public/               # 靜態資產
│   │   ├── src/
│   │   │   ├── pages/           # 頁面組件
│   │   │   │   ├── Home.tsx     # 主頁面
│   │   │   │   └── NotFound.tsx # 404頁面
│   │   │   ├── components/      # 可重用組件
│   │   │   ├── contexts/        # React上下文
│   │   │   ├── hooks/           # 自訂Hook
│   │   │   ├── lib/             # 工具函數
│   │   │   ├── App.tsx          # 應用根組件
│   │   │   ├── main.tsx         # React入口
│   │   │   └── index.css        # 全域樣式與主題
│   │   └── index.html           # HTML模板
│   └── server/                   # 後端應用
│       ├── routes/              # API路由
│       │   └── download.ts      # 文件下載路由
│       └── index.ts             # 伺服器入口
├── docs/                         # 文檔
│   ├── 2D_Pixel_RPG_Dev_Guide.md    # 完整技術指南
│   └── DESIGN_PHILOSOPHY.md         # 設計理念文檔
├── package.json                  # 專案依賴配置
├── tsconfig.json                 # TypeScript配置
├── vite.config.ts               # Vite構建配置
├── tailwind.config.ts           # Tailwind CSS配置
├── postcss.config.js            # PostCSS配置
└── README.md                     # 本文件
```

## 🛠️ 技術棧

### 前端

- **React 19**：現代化的UI庫
- **TypeScript**：類型安全的開發
- **Tailwind CSS 4**：原子化CSS框架
- **shadcn/ui**：高質量的UI組件庫
- **Wouter**：輕量級路由解決方案
- **Lucide React**：精美的圖標庫
- **Framer Motion**：動畫庫（可選）

### 後端

- **Express.js**：Node.js Web框架
- **TypeScript**：類型安全的伺服器代碼

### 開發工具

- **Vite**：新一代前端構建工具
- **pnpm**：快速、節省磁碟空間的包管理器
- **Prettier**：代碼格式化工具
- **ESBuild**：超快的JavaScript打包工具

## 📖 主要功能

### 1. 遊戲引擎對比

使用標籤式介面展示Unity和Cocos Creator的特性、設定步驟和優勢。每個引擎都配有視覺化的設定指南和外部教學連結。

### 2. AI工具推薦

展示6款精選的免費AI工具，包括：

- **GDevelop**：開源無代碼遊戲引擎
- **PixelLab**：專業像素藝術生成器
- **PixelVibe**：2D遊戲素材生成器
- **Unity AI工具集**：官方認證的AI插件
- **Recraft AI**：線上遊戲素材生成器
- **OpenArt**：文字轉圖像生成器

每個工具都提供功能標籤、簡介和直達官網的按鈕。

### 3. 文件下載

提供完整的Markdown技術指南下載，包含：

- Unity 2D Pixel Perfect設定詳解
- Cocos Creator特性與優勢
- 9款Unity免費AI工具詳細介紹
- 4款專用像素藝術AI工具推薦
- 完整的參考資料與外部連結

### 4. 響應式設計

完全響應式佈局，適配從手機到桌面的各種螢幕尺寸。

## 🎯 設計理念

### 野獸主義 + 像素藝術融合

本專案融合了兩種設計美學：

**野獸主義（Brutalism）**：
- 原始與數位的碰撞
- 功能至上的美學
- 強烈的視覺層次
- 粗獷的幾何形狀

**像素藝術（Pixel Art）**：
- 精緻的細節表現
- 懷舊的視覺語言
- 限制性的調色盤
- CRT螢幕的視覺效果

這種結合創造了一個既現代又復古、既粗獷又精緻的獨特視覺體驗。

詳見 `docs/DESIGN_PHILOSOPHY.md` 瞭解完整的設計決策過程。

## 📚 文檔

### 技術指南

`docs/2D_Pixel_RPG_Dev_Guide.md` 包含：

- Unity引擎的Sprite設定最佳實踐
- Cocos Creator的核心特性與優勢
- 9款Unity官方認證的AI工具介紹
- 4款專用像素藝術生成工具推薦
- 完整的參考資料與外部連結

### 設計文檔

`docs/DESIGN_PHILOSOPHY.md` 記錄了：

- 三種設計方向的探索過程
- 最終選定的Brutalism + Pixel Art設計理念
- 色彩、排版、佈局等設計決策的理由

## 🔧 開發指南

### 添加新頁面

1. 在 `src/client/src/pages/` 中建立新的 `.tsx` 文件
2. 在 `src/client/src/App.tsx` 中添加路由

```tsx
<Route path="/new-page" component={NewPage} />
```

### 自訂樣式

全域樣式定義在 `src/client/src/index.css` 中。使用Tailwind CSS工具類進行組件樣式化。

### 添加API路由

1. 在 `src/server/routes/` 中建立新的路由文件
2. 在 `src/server/index.ts` 中註冊路由

```typescript
import newRouter from "./routes/new.js";
app.use("/api", newRouter);
```

## 📝 代碼風格

- 使用TypeScript進行類型安全開發
- 遵循Prettier的代碼格式化規則
- 組件使用函數式組件和Hooks
- 避免過度複雜的嵌套結構

運行以下命令格式化代碼：

```bash
pnpm run format
```

## 🌐 部署

本專案可部署到多個平台：

### Manus平台

點擊Management UI中的"Publish"按鈕即可部署。

### 其他平台

由於本專案包含後端伺服器，建議部署到支援Node.js的平台，如：

- Railway
- Render
- Vercel（需要調整為無伺服器函數）
- Heroku

## 📄 授權

本專案採用MIT授權。詳見LICENSE文件。

## 🤝 貢獻

歡迎提交Issue和Pull Request。請確保：

1. 代碼遵循項目的風格指南
2. 提交前運行 `pnpm run format`
3. 在PR中清楚描述您的更改

## 📞 聯絡方式

如有問題或建議，歡迎通過以下方式聯絡：

- 提交GitHub Issue
- 發送電子郵件至 support@manus.im

## 🙏 致謝

本專案參考了以下資源：

- [Unity官方2D Pixel Perfect教學](https://unity.com/blog/games/2d-pixel-perfect-how-to-set-up-your-unity-project-for-retro-8-bits-games)
- [Cocos Creator教學網站](https://acupun.site/lecture/CocosCreator/)
- [GDevelop遊戲引擎](https://gdevelop.io/)
- [PixelLab AI生成器](https://www.pixellab.ai/)
- [Rosebud AI PixelVibe](https://rosebud.ai/ai-game-assets)
- [映CG媒體 - Unity AI工具介紹](https://www.incgmedia.com/new-release/9-ai-tools-in-unity)

---

**最後更新**：2026年2月12日

**版本**：1.0.0

**作者**：Manus AI
