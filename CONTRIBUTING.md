# 貢獻指南

感謝您對「像素風格2D RPG遊戲製作指南」專案的興趣！本文檔將指導您如何為本專案做出貢獻。

## 行為準則

我們致力於為所有貢獻者提供一個友善、包容和安全的環境。請尊重所有參與者，無論其背景或經驗水平。

## 如何貢獻

### 報告Bug

如果您發現了bug，請提交一個GitHub Issue，並包含以下信息：

- **清晰的標題**：簡明扼要地描述問題
- **詳細描述**：詳細說明預期行為和實際行為
- **重現步驟**：列出導致問題的具體步驟
- **環境信息**：包括您的操作系統、Node.js版本、瀏覽器等
- **截圖或日誌**：如果適用，附加相關的截圖或錯誤日誌

### 提出功能建議

如果您有新功能的想法，請提交一個GitHub Issue，並包含：

- **功能描述**：清楚地說明您想要的功能
- **使用場景**：解釋此功能如何改進用戶體驗
- **可能的實現方式**：如果您有想法，請分享您的建議

### 提交代碼

#### 準備工作

1. **Fork本倉庫**到您的GitHub帳戶
2. **Clone您的Fork**到本地機器

```bash
git clone https://github.com/your-username/pixel-rpg-guide.git
cd pixel-rpg-guide
```

3. **添加上游遠程倉庫**

```bash
git remote add upstream https://github.com/zu00524229/ManusText.git
```

4. **安裝依賴**

```bash
pnpm install
```

#### 開發流程

1. **建立新分支**

```bash
git checkout -b feature/your-feature-name
```

分支命名規則：
- `feature/` - 新功能
- `fix/` - Bug修復
- `docs/` - 文檔更新
- `style/` - 代碼風格調整
- `refactor/` - 代碼重構

2. **進行更改**

- 遵循現有的代碼風格
- 添加必要的註釋和文檔
- 確保代碼通過類型檢查

3. **測試您的更改**

```bash
# 啟動開發伺服器
pnpm run dev

# 在瀏覽器中測試功能
# 檢查是否有控制台錯誤或警告
```

4. **格式化代碼**

```bash
pnpm run format
```

5. **提交更改**

```bash
git add .
git commit -m "feat: 添加新功能描述"
```

提交信息格式：
- `feat:` - 新功能
- `fix:` - Bug修復
- `docs:` - 文檔更新
- `style:` - 代碼風格
- `refactor:` - 代碼重構
- `perf:` - 性能改進
- `test:` - 測試相關

6. **推送到您的Fork**

```bash
git push origin feature/your-feature-name
```

7. **提交Pull Request**

- 在GitHub上建立Pull Request
- 清楚地描述您的更改
- 參考相關的Issue（如果有）
- 等待審查和反饋

#### Pull Request檢查清單

提交PR前，請確保：

- [ ] 代碼遵循項目的風格指南
- [ ] 已運行 `pnpm run format`
- [ ] 已檢查TypeScript類型（無錯誤）
- [ ] 已在本地測試功能
- [ ] PR標題清晰且描述性強
- [ ] PR描述包含相關Issue的參考

## 代碼風格指南

### TypeScript

- 使用明確的類型註釋
- 避免使用 `any` 類型
- 使用 `const` 和 `let`，避免 `var`

### React

- 使用函數式組件和Hooks
- 組件名稱使用PascalCase
- 文件名使用PascalCase（組件）或camelCase（工具函數）

### CSS/Tailwind

- 優先使用Tailwind工具類
- 避免添加不必要的自訂CSS
- 保持類名的簡潔性

### 文件結構

```
src/
├── client/
│   └── src/
│       ├── pages/          # 頁面級組件
│       ├── components/     # 可重用組件
│       ├── contexts/       # React上下文
│       ├── hooks/          # 自訂Hooks
│       ├── lib/            # 工具函數
│       └── index.css       # 全域樣式
└── server/
    ├── routes/             # API路由
    └── index.ts            # 伺服器入口
```

## 文檔更新

如果您的更改涉及用戶可見的功能，請相應地更新文檔：

- 更新 `README.md` 中的相關部分
- 在 `docs/` 目錄中添加新的文檔文件（如需要）
- 確保所有代碼示例都是正確的

## 許可

通過提交代碼，您同意您的貢獻將在MIT許可下發佈。

## 問題或疑問？

如果您對貢獻流程有任何疑問，請：

1. 查看現有的Issues和PRs
2. 提交一個新的Issue詢問
3. 聯絡項目維護者

感謝您的貢獻！🎉
