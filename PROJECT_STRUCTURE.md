# 專案結構詳解

本文檔詳細說明了「像素風格2D RPG遊戲製作指南」專案的目錄結構和各個文件的用途。

## 根目錄文件

```
pixel-rpg-guide/
├── README.md                    # 項目主文檔
├── LICENSE                      # MIT授權文件
├── CONTRIBUTING.md              # 貢獻指南
├── PROJECT_STRUCTURE.md         # 本文件
├── package.json                 # npm/pnpm依賴配置
├── tsconfig.json               # TypeScript編譯配置
├── vite.config.ts              # Vite構建工具配置
├── tailwind.config.ts          # Tailwind CSS配置
├── postcss.config.js           # PostCSS配置
└── .gitignore                  # Git忽略文件列表
```

## 源代碼目錄 (`src/`)

### 前端應用 (`src/client/`)

```
src/client/
├── index.html                  # HTML入口文件
├── public/                     # 靜態資產目錄
│   └── [靜態文件]
└── src/
    ├── main.tsx               # React應用入口
    ├── App.tsx                # 應用根組件，路由配置
    ├── index.css              # 全域樣式和主題定義
    ├── pages/                 # 頁面級組件
    │   ├── Home.tsx          # 主頁面（核心內容）
    │   └── NotFound.tsx       # 404錯誤頁面
    ├── components/            # 可重用UI組件
    │   ├── ui/               # shadcn/ui組件
    │   ├── ErrorBoundary.tsx # 錯誤邊界組件
    │   └── [其他組件]
    ├── contexts/              # React上下文
    │   └── ThemeContext.tsx   # 主題上下文（深色/淺色模式）
    ├── hooks/                 # 自訂React Hooks
    │   └── [自訂Hooks]
    └── lib/                   # 工具函數和輔助函數
        └── [工具函數]
```

#### 主要組件說明

**Home.tsx**：
- 專案的核心頁面
- 包含Hero部分、引擎對比、AI工具推薦等主要內容
- 使用Tabs組件進行Unity/Cocos Creator的切換
- 展示6款推薦的AI工具卡片

**App.tsx**：
- 應用根組件
- 配置路由和主題提供者
- 設置深色主題為默認

**index.css**：
- 定義全域樣式和設計令牌
- 配置Tailwind CSS主題顏色
- 實現Brutalism + Pixel Art設計風格
- 包含掃描線效果等特殊樣式

### 後端應用 (`src/server/`)

```
src/server/
├── index.ts                   # Express伺服器入口
└── routes/
    └── download.ts           # 文件下載API路由
```

#### 路由說明

**download.ts**：
- 提供 `/api/download-guide` 端點
- 允許用戶下載完整的Markdown技術指南
- 返回 `2D_Pixel_RPG_Dev_Guide.md` 文件

## 文檔目錄 (`docs/`)

```
docs/
├── 2D_Pixel_RPG_Dev_Guide.md   # 完整的技術指南
│                               # 包含Unity、Cocos Creator、AI工具詳解
├── DESIGN_PHILOSOPHY.md        # 設計理念文檔
│                               # 記錄設計決策過程和最終選擇
└── DEPLOYMENT.md               # 部署指南
                                # 多個平台的部署步驟
```

## 配置文件詳解

### `package.json`

定義項目的依賴和構建腳本：

```json
{
  "scripts": {
    "dev": "vite --host",           // 啟動開發伺服器
    "build": "vite build && ...",   // 構建生產版本
    "start": "NODE_ENV=production node dist/index.js",  // 啟動生產伺服器
    "preview": "vite preview --host", // 預覽構建結果
    "format": "prettier --write ."   // 格式化代碼
  }
}
```

### `tsconfig.json`

TypeScript編譯配置，確保類型安全。

### `vite.config.ts`

Vite構建工具配置，包括：
- React插件配置
- 開發伺服器代理設置
- 構建優化選項

### `tailwind.config.ts`

Tailwind CSS配置，定義：
- 自訂顏色主題
- 字體和間距
- 擴展的工具類

### `postcss.config.js`

PostCSS配置，用於CSS處理和優化。

## 設計系統

### 色彩系統

在 `src/client/src/index.css` 中定義：

```css
:root {
  --primary: oklch(0.65 0.15 45);        /* 琥珀黃 */
  --secondary: oklch(0.55 0.18 165);     /* 螢光綠 */
  --destructive: oklch(0.55 0.22 25);    /* 警示紅 */
  --background: oklch(0.15 0.01 45);     /* 深邃黑 */
  /* ... 更多顏色 */
}
```

### 排版系統

使用Google Fonts提供的字體：
- **JetBrains Mono**：標題和代碼
- **Inter**：正文和UI文本

### 間距系統

基於8px的網格系統，通過Tailwind工具類應用。

## 開發工作流

### 添加新功能

1. 在 `src/client/src/pages/` 或 `src/client/src/components/` 中建立新文件
2. 使用TypeScript和React Hooks編寫代碼
3. 使用Tailwind CSS進行樣式化
4. 在 `src/client/src/App.tsx` 中添加路由（如需要）
5. 運行 `pnpm run dev` 測試
6. 運行 `pnpm run format` 格式化代碼

### 添加新API路由

1. 在 `src/server/routes/` 中建立新的路由文件
2. 在 `src/server/index.ts` 中導入並註冊路由
3. 重啟開發伺服器
4. 使用 `fetch` 或 `axios` 從前端調用

### 更新文檔

1. 編輯 `docs/` 中的相應Markdown文件
2. 或在 `README.md` 中進行更新
3. 確保所有代碼示例都是正確的

## 構建輸出

運行 `pnpm run build` 後，將生成：

```
dist/
├── public/                     # 靜態資產
├── index.html                  # 構建的HTML
├── [hash].js                   # 構建的JavaScript
├── [hash].css                  # 構建的CSS
└── index.js                    # 伺服器入口
```

## 依賴項概覽

### 主要依賴

- **react**：UI庫
- **react-dom**：React DOM渲染
- **typescript**：類型安全
- **tailwindcss**：CSS框架
- **shadcn/ui**：UI組件庫
- **wouter**：路由庫
- **express**：後端框架

### 開發依賴

- **vite**：構建工具
- **@vitejs/plugin-react**：Vite React插件
- **prettier**：代碼格式化
- **esbuild**：JavaScript打包工具

## 性能考慮

### 代碼分割

Vite自動進行代碼分割，優化加載性能。

### 資產優化

- 圖片通過CDN提供
- CSS和JavaScript進行最小化
- 使用gzip壓縮

### 緩存策略

靜態資產使用長期緩存，動態內容使用適當的緩存頭。

## 安全性

### 環境變量

敏感信息通過環境變量管理，不提交到版本控制。

### 依賴安全

定期檢查依賴的安全更新：

```bash
pnpm audit
```

## 故障排除

### 常見問題

**Q: 開發伺服器無法啟動**
- 檢查端口3000是否被佔用
- 清除 `.vite` 緩存目錄
- 重新安裝依賴

**Q: 構建失敗**
- 檢查TypeScript錯誤
- 確保所有依賴都已安裝
- 查看詳細的構建日誌

**Q: 樣式未應用**
- 確保Tailwind CSS正確配置
- 檢查CSS文件是否被導入
- 清除瀏覽器緩存

---

**最後更新**：2026年2月12日
