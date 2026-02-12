# 部署指南

本文檔提供了將「像素風格2D RPG遊戲製作指南」部署到各個平台的詳細步驟。

## 前置要求

- Node.js 22.13.0 或更高版本
- pnpm 10.4.1 或更高版本
- Git版本控制系統

## 本地構建

首先，確保應用在本地能夠正確構建：

```bash
# 安裝依賴
pnpm install

# 構建生產版本
pnpm run build

# 本地預覽
pnpm run preview
```

## Manus平台部署

Manus平台提供了內置的部署功能，是最簡單的部署方式。

### 步驟

1. 在Management UI中點擊"Publish"按鈕
2. 系統將自動構建和部署應用
3. 部署完成後，您將獲得一個公開URL

### 自訂域名

1. 進入Settings → Domains
2. 購買新域名或綁定現有域名
3. 按照提示完成DNS配置

## Railway部署

Railway是一個現代化的雲平台，支援Node.js應用。

### 步驟

1. **建立Railway帳戶**
   - 訪問 https://railway.app
   - 使用GitHub帳戶登錄

2. **連接GitHub倉庫**
   - 在Railway儀表板中點擊"New Project"
   - 選擇"Deploy from GitHub repo"
   - 授權Railway訪問您的GitHub帳戶
   - 選擇 `pixel-rpg-guide` 倉庫

3. **配置環境變量**
   - 在Railway中進入Variables標籤
   - 添加必要的環境變量（如果有）

4. **部署**
   - Railway將自動檢測 `package.json` 並安裝依賴
   - 運行 `pnpm run build` 進行構建
   - 運行 `pnpm run start` 啟動應用

### 自訂域名

1. 在Railway項目中進入Settings
2. 進入Domains部分
3. 添加您的自訂域名
4. 按照提示配置DNS記錄

## Render部署

Render是另一個優秀的Node.js託管平台。

### 步驟

1. **建立Render帳戶**
   - 訪問 https://render.com
   - 使用GitHub帳戶登錄

2. **建立新Web Service**
   - 點擊"New +"
   - 選擇"Web Service"
   - 連接您的GitHub倉庫

3. **配置部署設置**
   - **Build Command**: `pnpm install && pnpm run build`
   - **Start Command**: `pnpm run start`
   - **Environment**: Node
   - **Node Version**: 22

4. **部署**
   - Render將自動部署應用
   - 部署完成後，您將獲得一個公開URL

### 自訂域名

1. 在Render項目設置中進入Custom Domain
2. 添加您的域名
3. 按照提示配置DNS記錄

## Vercel部署（無伺服器）

Vercel主要針對靜態網站和無伺服器函數進行了優化。由於本項目包含Express伺服器，需要進行調整。

### 注意事項

- 本項目的Express伺服器在Vercel上可能無法正常運行
- 建議使用Railway或Render進行部署
- 如果必須使用Vercel，需要將伺服器代碼轉換為無伺服器函數

## Heroku部署（已停用免費層）

Heroku不再提供免費層，但仍然支援付費部署。

### 步驟（如果您有Heroku帳戶）

1. **安裝Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **登錄Heroku**
   ```bash
   heroku login
   ```

3. **建立Heroku應用**
   ```bash
   heroku create your-app-name
   ```

4. **部署**
   ```bash
   git push heroku main
   ```

## Docker部署

如果您想使用Docker容器化應用，可以參考以下步驟。

### Dockerfile

在項目根目錄建立 `Dockerfile`：

```dockerfile
FROM node:22-alpine

WORKDIR /app

# 安裝pnpm
RUN npm install -g pnpm

# 複製package文件
COPY package.json pnpm-lock.yaml ./

# 安裝依賴
RUN pnpm install --frozen-lockfile

# 複製應用代碼
COPY . .

# 構建應用
RUN pnpm run build

# 暴露端口
EXPOSE 3000

# 啟動應用
CMD ["pnpm", "run", "start"]
```

### 構建和運行

```bash
# 構建Docker鏡像
docker build -t pixel-rpg-guide .

# 運行容器
docker run -p 3000:3000 pixel-rpg-guide
```

## 環境變量

某些部署平台可能需要設置環境變量。本項目使用以下變量：

- `NODE_ENV`：設置為 `production` 用於生產部署
- `PORT`：應用監聽的端口（默認3000）

## 性能優化

### 構建優化

- 使用 `pnpm` 而不是 `npm` 以提高安裝速度
- 啟用生產模式構建以減少包大小

### 運行時優化

- 啟用gzip壓縮
- 使用CDN分發靜態資產
- 實施緩存策略

## 故障排除

### 部署失敗

1. **檢查構建日誌**：查看平台提供的詳細構建日誌
2. **驗證依賴**：確保所有依賴都正確安裝
3. **檢查環境變量**：確保所有必需的環境變量都已設置

### 應用無法啟動

1. **檢查端口**：確保應用監聽正確的端口
2. **查看應用日誌**：檢查運行時錯誤
3. **驗證Node版本**：確保Node版本兼容

### 性能問題

1. **檢查資源使用**：監控CPU和內存使用情況
2. **優化數據庫查詢**：如果使用數據庫
3. **啟用緩存**：實施適當的緩存策略

## 監控和維護

### 日誌監控

大多數平台提供日誌查看功能：

- Railway：進入Logs標籤
- Render：進入Logs標籤
- Vercel：進入Logs標籤

### 健康檢查

定期檢查應用的健康狀態：

```bash
curl https://your-app-url.com/
```

### 自動備份

如果應用使用數據庫，確保啟用自動備份。

## 常見問題

**Q: 如何更新已部署的應用？**

A: 只需將更改推送到GitHub，大多數平台會自動重新部署。

**Q: 如何回滾到之前的版本？**

A: 使用Git恢復到之前的提交，然後推送更改。

**Q: 如何設置自訂域名？**

A: 每個平台都有不同的步驟，但通常涉及DNS配置。詳見上面的平台特定部分。

## 支援

如有部署問題，請：

1. 查看平台的官方文檔
2. 檢查應用的構建和運行時日誌
3. 提交GitHub Issue尋求幫助

---

**最後更新**：2026年2月12日
