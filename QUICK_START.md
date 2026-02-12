# 快速開始指南

本指南將幫助您快速上手「像素風格2D RPG遊戲製作指南」專案。

## 📦 解壓檔案

首先，解壓您下載的 `pixel-rpg-guide.tar.gz` 檔案：

```bash
# 使用tar命令（Linux/Mac）
tar -xzf pixel-rpg-guide.tar.gz
cd pixel-rpg-guide-export

# 或使用圖形化工具解壓
# Windows用戶可使用7-Zip、WinRAR等工具
```

## 🔧 環境要求

在開始之前，請確保您的系統已安裝：

- **Node.js** 22.13.0 或更高版本 - [下載](https://nodejs.org/)
- **pnpm** 10.4.1 或更高版本 - [安裝指南](https://pnpm.io/installation)

### 檢查版本

```bash
node --version
pnpm --version
```

## 🚀 本地開發

### 1. 安裝依賴

```bash
pnpm install
```

這將安裝所有必需的npm包。

### 2. 啟動開發伺服器

```bash
pnpm run dev
```

您應該看到類似的輸出：

```
➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

### 3. 在瀏覽器中打開

打開您的瀏覽器，訪問 `http://localhost:3000`

您應該看到帶有琥珀黃和螢光綠配色的像素風格網站。

## 📝 編輯內容

### 修改主頁面

編輯 `src/client/src/pages/Home.tsx` 來修改主頁內容。

### 修改樣式

全域樣式在 `src/client/src/index.css` 中定義。使用Tailwind CSS工具類進行組件樣式化。

### 添加新頁面

1. 在 `src/client/src/pages/` 中建立新的 `.tsx` 文件
2. 在 `src/client/src/App.tsx` 中添加路由

## 🏗️ 構建生產版本

### 構建

```bash
pnpm run build
```

這將生成優化的生產版本在 `dist/` 目錄中。

### 本地預覽

```bash
pnpm run preview
```

### 啟動生產伺服器

```bash
pnpm run start
```

## 📂 專案結構快速參考

```
pixel-rpg-guide/
├── src/
│   ├── client/              # 前端應用
│   │   └── src/
│   │       ├── pages/       # 頁面組件
│   │       ├── components/  # UI組件
│   │       └── index.css    # 全域樣式
│   └── server/              # 後端應用
│       └── routes/          # API路由
├── docs/                    # 文檔
├── package.json             # 依賴配置
└── README.md               # 完整文檔
```

詳見 `PROJECT_STRUCTURE.md` 瞭解完整的目錄結構。

## 🎨 設計系統

### 色彩

- **琥珀黃**（主色）：`bg-primary`
- **螢光綠**（次色）：`bg-secondary`
- **警示紅**（警告）：`bg-destructive`
- **深邃黑**（背景）：`bg-background`

### 排版

- **標題**：使用 `font-mono font-bold`
- **正文**：使用 `font-sans`

### 元素

- **按鈕**：`<Button>`
- **卡片**：`<Card>`
- **標籤**：`<Badge>`
- **標籤頁**：`<Tabs>`

## 🔗 常用命令

```bash
# 開發
pnpm run dev          # 啟動開發伺服器

# 構建
pnpm run build        # 構建生產版本
pnpm run preview      # 預覽構建結果

# 生產
pnpm run start        # 啟動生產伺服器

# 代碼質量
pnpm run format       # 格式化代碼
pnpm run check        # 檢查TypeScript類型

# 依賴
pnpm audit            # 檢查安全漏洞
pnpm update           # 更新依賴
```

## 🐛 故障排除

### 問題：端口3000已被佔用

**解決方案**：
```bash
# 使用不同的端口
pnpm run dev -- --port 3001
```

### 問題：依賴安裝失敗

**解決方案**：
```bash
# 清除pnpm緩存
pnpm store prune

# 重新安裝
pnpm install
```

### 問題：樣式未應用

**解決方案**：
1. 清除瀏覽器緩存
2. 重啟開發伺服器
3. 檢查Tailwind CSS配置

### 問題：TypeScript錯誤

**解決方案**：
```bash
# 檢查類型
pnpm run check

# 查看詳細錯誤信息
```

## 📚 下一步

1. **閱讀完整文檔**：查看 `README.md`
2. **瞭解設計理念**：查看 `docs/DESIGN_PHILOSOPHY.md`
3. **學習部署**：查看 `docs/DEPLOYMENT.md`
4. **貢獻代碼**：查看 `CONTRIBUTING.md`

## 🤝 需要幫助？

- 查看 `README.md` 中的常見問題
- 查看 `docs/` 中的詳細文檔
- 檢查 `CONTRIBUTING.md` 中的開發指南

## 📞 聯絡方式

如有問題，請：

1. 查看項目文檔
2. 檢查GitHub Issues
3. 提交新的Issue

---

**祝您開發愉快！** 🎉

**最後更新**：2026年2月12日
