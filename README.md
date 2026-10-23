# 一步一步學 SQL（完整 W3Schools 式目錄）

香港中學 ICT 用、可離線開啟嘅 SQL 逐步教學。版面節奏類似 W3Schools，**內容全部自寫**（學會會員 `CLUBMEMBER` + `CLUB`）。

## 點樣開

1. 用瀏覽器開啟 `index.html`（同資料夾要有 `app.js`）
2. 無需伺服器；`file://` 可用
3. 有網絡會載入 **sql.js**（JOIN／CASE／子查詢）；離線用**內建引擎**（單表 SELECT 強化版）

## 目錄（左欄 · 共 77 課）

| 組 | 課數 | 內容 |
|----|------|------|
| SQL Tutorial | 46 | HOME → Intro → Syntax → Select… → Operators |
| SQL Database | 21 | Create DB… → Hosting |
| SQL Cert | 3 | Certificate、Quiz、Exercises |
| SQL References | 3 | Data Types、Keywords、Quick Ref |
| SQL Examples | 4 | Examples、Editor、Syllabus、Study Plan |

- **綠點 live（50）**：Try it 即時執行查詢  
- **黃點 demo（27）**：DDL/DML／概念課 — 執行顯示「本課示範結果」，唔改種子資料

## Live 覆蓋重點

SELECT、DISTINCT、WHERE、AND／OR／NOT、ORDER BY、LIMIT、聚合、LIKE／IN／BETWEEN、別名、GROUP BY、HAVING、IS NULL、IFNULL、UNION、JOIN（建議 sql.js）、CASE／子查詢（sql.js）等。

## Demo 覆蓋

INSERT／UPDATE／DELETE、CREATE／DROP／ALTER、約束、Index、View、Injection、Hosting、Stored Procedures、FULL JOIN 概念等。

## 示範表

- `CLUBMEMBER(MemID, MemName, Category, Fee, ClubID, JoinDate)` — 10 列（部分 ClubID 為 NULL）
- `CLUB(ClubID, ClubName, Advisor)` — 4 列

## 檔案

| 檔 | 用途 |
|----|------|
| `index.html` | 版面與樣式 |
| `app.js` | 課題資料、引擎、互動 |
| `lessons.json` | 課題匯出（維護用；頁面已內嵌於 app.js） |
