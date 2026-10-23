(function () {
  'use strict';

  const LESSONS = [{"id": "home", "group": "tutorial", "nav": "SQL HOME", "title": "SQL 教學首頁", "pill": "總覽", "mode": "live", "teach": "<p>呢個係香港中學 ICT 用嘅<strong>離線 SQL 教學</strong>，版面節奏似常見網上教程：左邊揀課題 → 中間短講解 → 點範例插入 → Try it 自己寫 → 執行睇結果。</p>\n    <h3>示範資料庫</h3>\n    <ul>\n      <li><span class=\"kw\">CLUBMEMBER</span> — 學會會員（主表）</li>\n      <li><span class=\"kw\">CLUB</span> — 學會／社團（JOIN 用）</li>\n    </ul>\n    <p>SQL 關鍵字用<strong>英文</strong>；說明用繁中。內容全部自寫，唔抄其他網站原文。</p>\n    <div class=\"tip\"><strong>建議路線：</strong>Intro → Syntax → Select → Where → Order By → 聚合 → Group By → Joins。</div>\n    <h3>樣本：CLUBMEMBER</h3>\n    <div class=\"table-wrap\" id=\"sampleTableHome\"></div>\n    <h3>樣本：CLUB</h3>\n    <div class=\"table-wrap\" id=\"sampleTableClub\"></div>", "tryNote": "試吓取出全部會員：", "snippets": [{"label": "SELECT", "insert": "SELECT "}, {"label": "*", "insert": "* "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "全部會員", "sql": "SELECT * FROM CLUBMEMBER;"}, {"label": "全部學會", "sql": "SELECT * FROM CLUB;"}], "answer": "SELECT * FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "intro", "group": "tutorial", "nav": "SQL Intro", "title": "SQL 係乜", "pill": "簡介", "mode": "live", "teach": "<p><strong>SQL</strong>（Structured Query Language）係同資料庫溝通嘅語言。ICT 課程常考：用 SQL 由資料表<strong>查詢</strong>需要嘅資料。</p>\n    <ul>\n      <li><span class=\"kw\">SELECT</span> — 查詢（最常用、考試重點）</li>\n      <li><span class=\"kw\">INSERT / UPDATE / DELETE</span> — 新增／改／刪資料</li>\n      <li><span class=\"kw\">CREATE TABLE</span> — 建立表結構</li>\n    </ul>\n    <div class=\"tip\">本教學以學校<strong>學會會員</strong>情境為例，方便對應 DSE ICT 資料庫課題。</div>", "tryNote": "用 SELECT 睇吓有幾多位會員：", "snippets": [{"label": "SELECT", "insert": "SELECT "}, {"label": "COUNT(*)", "insert": "COUNT(*) "}, {"label": "AS NumMembers", "insert": "AS NumMembers "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "數人數", "sql": "SELECT COUNT(*) AS NumMembers FROM CLUBMEMBER;"}], "answer": "SELECT COUNT(*) AS NumMembers FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "syntax", "group": "tutorial", "nav": "SQL Syntax", "title": "SQL 語法基礎", "pill": "語法", "mode": "live", "teach": "<p>一條查詢通常有固定次序：</p>\n    <div class=\"syntax-box\">SELECT …<br>FROM …<br>[WHERE …]<br>[GROUP BY …]<br>[HAVING …]<br>[ORDER BY …];</div>\n    <ul>\n      <li>關鍵字<strong>唔分大小寫</strong>（慣例大階）</li>\n      <li>文字值用<strong>單引號</strong> <span class=\"kw\">'Junior'</span></li>\n      <li>一句可以分多行；結尾分號 <span class=\"kw\">;</span> 建議加</li>\n    </ul>\n    <div class=\"errbox\"><strong>常見錯誤：</strong>文字漏單引號；ORDER BY 寫喺 WHERE 前面。</div>", "tryNote": "練習正確語法次序：篩選後再排序。", "snippets": [{"label": "SELECT MemName, Fee", "insert": "SELECT MemName, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE Fee > 150", "insert": " WHERE Fee > 150"}, {"label": "ORDER BY Fee DESC", "insert": " ORDER BY Fee DESC"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Fee>150 降序", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > 150\nORDER BY Fee DESC;"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > 150\nORDER BY Fee DESC;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "select", "group": "tutorial", "nav": "SQL Select", "title": "SELECT", "pill": "取出欄", "mode": "live", "teach": "<p><span class=\"kw\">SELECT</span> 指定要邊啲欄；<span class=\"kw\">FROM</span> 指定表。</p>\n    <div class=\"syntax-box\">SELECT 欄名1, 欄名2, …<br>FROM 表名;</div>\n    <p><span class=\"kw\">*</span> 代表全部欄。</p>\n    <div class=\"errbox\"><strong>常見錯誤：</strong>欄名打錯（Name → 應係 MemName）；漏 FROM。</div>", "tryNote": "顯示每位會員嘅 MemName 同 Category。", "snippets": [{"label": "SELECT", "insert": "SELECT "}, {"label": "MemName", "insert": "MemName"}, {"label": ",", "insert": ", "}, {"label": "Category", "insert": "Category"}, {"label": ",", "insert": ", "}, {"label": "Fee", "insert": "Fee"}, {"label": "FROM CLUBMEMBER", "insert": " FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "姓名＋年費", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER;"}, {"label": "全部欄", "sql": "SELECT *\nFROM CLUBMEMBER;"}], "answer": "SELECT MemName, Category\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "distinct", "group": "tutorial", "nav": "SQL Select Distinct", "title": "SELECT DISTINCT", "pill": "去重", "mode": "live", "teach": "<p><span class=\"kw\">DISTINCT</span> 令結果唔重複。</p>\n    <div class=\"syntax-box\">SELECT DISTINCT 欄名<br>FROM 表名;</div>\n    <p>例如想知「有邊啲 Category」，而唔係列出每位會員。</p>", "tryNote": "列出所有唔重複嘅 Category。", "snippets": [{"label": "SELECT DISTINCT", "insert": "SELECT DISTINCT "}, {"label": "Category", "insert": "Category"}, {"label": "FROM CLUBMEMBER", "insert": " FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "唔重複類別", "sql": "SELECT DISTINCT Category\nFROM CLUBMEMBER;"}], "answer": "SELECT DISTINCT Category\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "where", "group": "tutorial", "nav": "SQL Where", "title": "WHERE", "pill": "篩選列", "mode": "live", "teach": "<p>用 <span class=\"kw\">WHERE</span> 加條件，只保留符合嘅列。</p>\n    <div class=\"syntax-box\">SELECT … FROM … WHERE 條件;</div>\n    <p>常見運算符：<span class=\"kw\">= &gt; &lt; &gt;= &lt;= &lt;&gt;</span></p>\n    <div class=\"errbox\">文字要用單引號：Category = 'Junior'</div>", "tryNote": "顯示 Adult 會員嘅 MemName 同 Fee。", "snippets": [{"label": "SELECT MemName, Fee", "insert": "SELECT MemName, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE", "insert": " WHERE "}, {"label": "Category = 'Adult'", "insert": "Category = 'Adult'"}, {"label": "Fee > 200", "insert": "Fee > 200"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Fee>200", "sql": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nWHERE Fee > 200;"}, {"label": "Junior", "sql": "SELECT MemID, MemName\nFROM CLUBMEMBER\nWHERE Category = 'Junior';"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "orderby", "group": "tutorial", "nav": "SQL Order By", "title": "ORDER BY", "pill": "排序", "mode": "live", "teach": "<p><span class=\"kw\">ORDER BY</span> 排序。<span class=\"kw\">ASC</span> 升序（預設）、<span class=\"kw\">DESC</span> 降序。</p>\n    <div class=\"syntax-box\">SELECT … FROM … [WHERE …]<br>ORDER BY 欄名 [ASC|DESC];</div>", "tryNote": "顯示 MemName、Category、Fee，按 Fee 由高到低。", "snippets": [{"label": "SELECT MemName, Category, Fee", "insert": "SELECT MemName, Category, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "ORDER BY", "insert": " ORDER BY "}, {"label": "Fee DESC", "insert": "Fee DESC"}, {"label": "ASC", "insert": " ASC"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Fee 降序", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nORDER BY Fee DESC;"}, {"label": "兩欄", "sql": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nORDER BY Category ASC, Fee DESC;"}], "answer": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nORDER BY Fee DESC;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "and", "group": "tutorial", "nav": "SQL And", "title": "AND", "pill": "同時符合", "mode": "live", "teach": "<p><span class=\"kw\">AND</span>：左右條件都要真先保留嗰列。</p>\n    <div class=\"syntax-box\">WHERE 條件1 AND 條件2</div>", "tryNote": "找出 Adult 而且 Fee &gt; 280 嘅會員。", "snippets": [{"label": "SELECT MemName, Category, Fee", "insert": "SELECT MemName, Category, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE", "insert": " WHERE "}, {"label": "Category = 'Adult'", "insert": "Category = 'Adult'"}, {"label": "AND", "insert": " AND "}, {"label": "Fee > 280", "insert": "Fee > 280"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Adult 且 Fee>280", "sql": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult' AND Fee > 280;"}], "answer": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult' AND Fee > 280;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "or", "group": "tutorial", "nav": "SQL Or", "title": "OR", "pill": "任一符合", "mode": "live", "teach": "<p><span class=\"kw\">OR</span>：其中一個條件真就保留。</p>\n    <div class=\"tip\">AND 優先於 OR；複雜條件可用括號（視引擎支援）。</div>", "tryNote": "找出 Junior 或者 Senior 嘅會員（只要 MemName、Category）。", "snippets": [{"label": "SELECT MemName, Category", "insert": "SELECT MemName, Category "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE", "insert": " WHERE "}, {"label": "Category = 'Junior'", "insert": "Category = 'Junior'"}, {"label": "OR", "insert": " OR "}, {"label": "Category = 'Senior'", "insert": "Category = 'Senior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Junior 或 Senior", "sql": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category = 'Junior' OR Category = 'Senior';"}], "answer": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category = 'Junior' OR Category = 'Senior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "not", "group": "tutorial", "nav": "SQL Not", "title": "NOT", "pill": "否定", "mode": "live", "teach": "<p><span class=\"kw\">NOT</span> 反轉條件。亦可用 <span class=\"kw\">&lt;&gt;</span> 表示「唔等於」。</p>", "tryNote": "顯示 Category 唔係 Adult 嘅會員。", "snippets": [{"label": "SELECT MemName, Category", "insert": "SELECT MemName, Category "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE", "insert": " WHERE "}, {"label": "Category <> 'Adult'", "insert": "Category <> 'Adult'"}, {"label": "NOT", "insert": " NOT "}, {"label": ";", "insert": ";"}], "examples": [{"label": "唔係 Adult", "sql": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category <> 'Adult';"}], "answer": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category <> 'Adult';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "insert", "group": "tutorial", "nav": "SQL Insert Into", "title": "INSERT INTO", "pill": "新增列", "mode": "demo", "teach": "<p><span class=\"kw\">INSERT INTO</span> 向表加入新列。</p>\n    <div class=\"syntax-box\">INSERT INTO 表名 (欄…)<br>VALUES (值…);</div>\n    <pre class=\"sql\"><span class=\"k\">INSERT INTO</span> CLUBMEMBER (MemID, MemName, Category, Fee, ClubID, JoinDate)\n<span class=\"k\">VALUES</span> ('M011', 'Au Ka Yi', 'Junior', 120, 'C02', '2026-09-01');</pre>\n    <div class=\"tip\">本課離線引擎<strong>唔會永久改庫</strong>；撳執行會顯示「本課示範結果」。</div>", "tryNote": "睇吓示範：想像已插入後用 SELECT 核對（示範結果）。", "snippets": [{"label": "INSERT INTO CLUBMEMBER", "insert": "INSERT INTO CLUBMEMBER "}, {"label": "(MemID, MemName, Category, Fee)", "insert": "(MemID, MemName, Category, Fee) "}, {"label": "VALUES", "insert": "VALUES "}, {"label": "('M011', 'Au Ka Yi', 'Junior', 120)", "insert": "('M011', 'Au Ka Yi', 'Junior', 120)"}, {"label": ";", "insert": ";"}], "examples": [{"label": "插入語句", "sql": "INSERT INTO CLUBMEMBER (MemID, MemName, Category, Fee, ClubID, JoinDate)\nVALUES ('M011', 'Au Ka Yi', 'Junior', 120, 'C02', '2026-09-01');"}], "answer": "INSERT INTO CLUBMEMBER (MemID, MemName, Category, Fee, ClubID, JoinDate)\nVALUES ('M011', 'Au Ka Yi', 'Junior', 120, 'C02', '2026-09-01');", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["MemID", "MemName", "Category", "Fee"], "rows": [["M011", "Au Ka Yi", "Junior", 120]], "note": "示範：成功插入 1 列（唔會寫入真實種子資料）"}, "extraTables": false}, {"id": "null", "group": "tutorial", "nav": "SQL Null Values", "title": "NULL", "pill": "空值", "mode": "live", "teach": "<p><span class=\"kw\">NULL</span> 代表「未知／未填」，<strong>唔係</strong> 0 或者空字串。</p>\n    <p>判斷要用 <span class=\"kw\">IS NULL</span> / <span class=\"kw\">IS NOT NULL</span>（唔好寫 = NULL）。</p>\n    <div class=\"tip\">本表 ClubID 有啲會員尚未分會，ClubID 為 NULL。</div>", "tryNote": "找出尚未分配學會（ClubID IS NULL）嘅會員。", "snippets": [{"label": "SELECT MemID, MemName, ClubID", "insert": "SELECT MemID, MemName, ClubID "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE ClubID IS NULL", "insert": " WHERE ClubID IS NULL"}, {"label": "IS NOT NULL", "insert": " IS NOT NULL"}, {"label": ";", "insert": ";"}], "examples": [{"label": "未分會", "sql": "SELECT MemID, MemName, ClubID\nFROM CLUBMEMBER\nWHERE ClubID IS NULL;"}], "answer": "SELECT MemID, MemName, ClubID\nFROM CLUBMEMBER\nWHERE ClubID IS NULL;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "update", "group": "tutorial", "nav": "SQL Update", "title": "UPDATE", "pill": "改資料", "mode": "demo", "teach": "<p><span class=\"kw\">UPDATE</span> 改現有列；記得加 <span class=\"kw\">WHERE</span>，否則可能改晒全表！</p>\n    <pre class=\"sql\"><span class=\"k\">UPDATE</span> CLUBMEMBER\n<span class=\"k\">SET</span> Fee = 130\n<span class=\"k\">WHERE</span> Category = 'Junior';</pre>\n    <div class=\"errbox\">考試常提醒：UPDATE／DELETE 漏 WHERE 好危險。</div>", "tryNote": "示範語句（執行顯示示範結果，唔改庫）。", "snippets": [{"label": "UPDATE CLUBMEMBER", "insert": "UPDATE CLUBMEMBER "}, {"label": "SET Fee = 130", "insert": "SET Fee = 130 "}, {"label": "WHERE Category = 'Junior'", "insert": "WHERE Category = 'Junior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "加 Junior 年費", "sql": "UPDATE CLUBMEMBER\nSET Fee = 130\nWHERE Category = 'Junior';"}], "answer": "UPDATE CLUBMEMBER\nSET Fee = 130\nWHERE Category = 'Junior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：3 列 Junior 嘅 Fee 會被設為 130（未寫入種子）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "delete", "group": "tutorial", "nav": "SQL Delete", "title": "DELETE", "pill": "刪列", "mode": "demo", "teach": "<p><span class=\"kw\">DELETE FROM</span> 刪除列；同樣要小心 <span class=\"kw\">WHERE</span>。</p>\n    <pre class=\"sql\"><span class=\"k\">DELETE FROM</span> CLUBMEMBER\n<span class=\"k\">WHERE</span> MemID = 'M010';</pre>", "tryNote": "示範刪除（唔改庫）。", "snippets": [{"label": "DELETE FROM CLUBMEMBER", "insert": "DELETE FROM CLUBMEMBER "}, {"label": "WHERE MemID = 'M010'", "insert": "WHERE MemID = 'M010'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "刪 M010", "sql": "DELETE FROM CLUBMEMBER\nWHERE MemID = 'M010';"}], "answer": "DELETE FROM CLUBMEMBER\nWHERE MemID = 'M010';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：刪除 MemID=M010 嘅 1 列（未寫入種子）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "top", "group": "tutorial", "nav": "SQL Select Top", "title": "SELECT TOP / LIMIT", "pill": "只取前 N", "mode": "live", "teach": "<p>只要「頭幾列」：</p>\n    <ul>\n      <li>SQL Server：<span class=\"kw\">SELECT TOP n …</span></li>\n      <li>MySQL / SQLite：<span class=\"kw\">LIMIT n</span></li>\n    </ul>\n    <p>本教學引擎（sql.js／內建）用 <span class=\"kw\">LIMIT</span>。</p>\n    <div class=\"syntax-box\">SELECT … FROM … ORDER BY … LIMIT 3;</div>", "tryNote": "年費最高嘅 3 位會員（MemName, Fee）。", "snippets": [{"label": "SELECT MemName, Fee", "insert": "SELECT MemName, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "ORDER BY Fee DESC", "insert": " ORDER BY Fee DESC"}, {"label": "LIMIT 3", "insert": " LIMIT 3"}, {"label": ";", "insert": ";"}], "examples": [{"label": "TOP3 年費", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nORDER BY Fee DESC\nLIMIT 3;"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nORDER BY Fee DESC\nLIMIT 3;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "agg", "group": "tutorial", "nav": "SQL Aggregate Functions", "title": "聚合函數總覽", "pill": "統計", "mode": "live", "teach": "<p>聚合函數對多列計出一個值：</p>\n    <ul>\n      <li><span class=\"kw\">COUNT</span> 數列數</li>\n      <li><span class=\"kw\">SUM / AVG / MAX / MIN</span> 總和／平均／最大／最小</li>\n    </ul>\n    <p>常同 <span class=\"kw\">GROUP BY</span> 一齊用。</p>", "tryNote": "計晒全部會員嘅人數同平均年費。", "snippets": [{"label": "SELECT", "insert": "SELECT "}, {"label": "COUNT(*) AS Num", "insert": "COUNT(*) AS Num"}, {"label": ",", "insert": ", "}, {"label": "AVG(Fee) AS AvgFee", "insert": "AVG(Fee) AS AvgFee"}, {"label": "FROM CLUBMEMBER", "insert": " FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "整體統計", "sql": "SELECT COUNT(*) AS Num, AVG(Fee) AS AvgFee\nFROM CLUBMEMBER;"}], "answer": "SELECT COUNT(*) AS Num, AVG(Fee) AS AvgFee\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "min", "group": "tutorial", "nav": "SQL Min()", "title": "MIN()", "pill": "聚合", "mode": "live", "teach": "<p><span class=\"kw\">MIN</span> 係聚合函數。</p><p>找出 Fee 最小值。</p>", "tryNote": "找出 Fee 最小值。", "snippets": [{"label": "SELECT MIN(Fee)", "insert": "SELECT MIN(Fee) "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "MIN()", "sql": "SELECT MIN(Fee) AS MinFee\nFROM CLUBMEMBER;"}], "answer": "SELECT MIN(Fee) AS MinFee FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "max", "group": "tutorial", "nav": "SQL Max()", "title": "MAX()", "pill": "聚合", "mode": "live", "teach": "<p><span class=\"kw\">MAX</span> 係聚合函數。</p><p>找出 Fee 最大值。</p>", "tryNote": "找出 Fee 最大值。", "snippets": [{"label": "SELECT MAX(Fee)", "insert": "SELECT MAX(Fee) "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "MAX()", "sql": "SELECT MAX(Fee) AS MaxFee\nFROM CLUBMEMBER;"}], "answer": "SELECT MAX(Fee) AS MaxFee FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "count", "group": "tutorial", "nav": "SQL Count()", "title": "COUNT()", "pill": "聚合", "mode": "live", "teach": "<p><span class=\"kw\">COUNT</span> 係聚合函數。</p><p>數有幾多位 Senior。</p>", "tryNote": "數有幾多位 Senior。", "snippets": [{"label": "SELECT COUNT(*)", "insert": "SELECT COUNT(*) "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "COUNT()", "sql": "SELECT COUNT(*) AS NumSenior\nFROM CLUBMEMBER\nWHERE Category = 'Senior';"}], "answer": "SELECT COUNT(*) AS NumSenior FROM CLUBMEMBER WHERE Category = 'Senior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "sum", "group": "tutorial", "nav": "SQL Sum()", "title": "SUM()", "pill": "聚合", "mode": "live", "teach": "<p><span class=\"kw\">SUM</span> 係聚合函數。</p><p>計全部年費總和。</p>", "tryNote": "計全部年費總和。", "snippets": [{"label": "SELECT SUM(Fee)", "insert": "SELECT SUM(Fee) "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "SUM()", "sql": "SELECT SUM(Fee) AS TotalFee\nFROM CLUBMEMBER;"}], "answer": "SELECT SUM(Fee) AS TotalFee FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "avg", "group": "tutorial", "nav": "SQL Avg()", "title": "AVG()", "pill": "聚合", "mode": "live", "teach": "<p><span class=\"kw\">AVG</span> 係聚合函數。</p><p>計平均年費。</p>", "tryNote": "計平均年費。", "snippets": [{"label": "SELECT AVG(Fee)", "insert": "SELECT AVG(Fee) "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "AVG()", "sql": "SELECT AVG(Fee) AS AvgFee\nFROM CLUBMEMBER;"}], "answer": "SELECT AVG(Fee) AS AvgFee FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "like", "group": "tutorial", "nav": "SQL Like", "title": "LIKE", "pill": "模糊比對", "mode": "live", "teach": "<p><span class=\"kw\">LIKE</span> 配合萬用字元做模糊搜尋。</p>\n    <ul>\n      <li><span class=\"kw\">%</span> — 任意多個字元</li>\n      <li><span class=\"kw\">_</span> — 剛好一個字元</li>\n    </ul>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> MemName <span class=\"k\">FROM</span> CLUBMEMBER\n<span class=\"k\">WHERE</span> MemName <span class=\"k\">LIKE</span> <span class=\"s\">'Chan%'</span>;</pre>", "tryNote": "找出姓氏寫法以 W 開頭嘅會員（MemName LIKE 'W%'）。", "snippets": [{"label": "SELECT MemName", "insert": "SELECT MemName "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "WHERE MemName LIKE 'W%'", "insert": " WHERE MemName LIKE 'W%'"}, {"label": "LIKE '%ing'", "insert": " LIKE '%ing'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "W 開頭", "sql": "SELECT MemID, MemName\nFROM CLUBMEMBER\nWHERE MemName LIKE 'W%';"}], "answer": "SELECT MemID, MemName\nFROM CLUBMEMBER\nWHERE MemName LIKE 'W%';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "wildcards", "group": "tutorial", "nav": "SQL Wildcards", "title": "萬用字元", "pill": "LIKE 進階", "mode": "live", "teach": "<p>常用模式：</p>\n    <ul>\n      <li><span class=\"kw\">'A%'</span> — 以 A 開頭</li>\n      <li><span class=\"kw\">'%man'</span> — 以 man 結尾（大小寫視排序規則）</li>\n      <li><span class=\"kw\">'M___'</span> — M 加三個字元（如 M001）</li>\n    </ul>", "tryNote": "找出 MemID 符合 M00_ 模式嘅會員（第四位係數字）。", "snippets": [{"label": "WHERE MemID LIKE 'M00_'", "insert": "WHERE MemID LIKE 'M00_'"}, {"label": "WHERE MemName LIKE '%ing'", "insert": "WHERE MemName LIKE '%ing'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "M00_", "sql": "SELECT MemID, MemName\nFROM CLUBMEMBER\nWHERE MemID LIKE 'M00_';"}], "answer": "SELECT MemID, MemName\nFROM CLUBMEMBER\nWHERE MemID LIKE 'M00_';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "in", "group": "tutorial", "nav": "SQL In", "title": "IN", "pill": "列表符合", "mode": "live", "teach": "<p><span class=\"kw\">IN</span> 等於多個 OR 嘅簡潔寫法。</p>\n    <div class=\"syntax-box\">WHERE Category IN ('Junior', 'Senior')</div>", "tryNote": "用 IN 取出 Junior 同 Senior。", "snippets": [{"label": "WHERE Category IN ('Junior', 'Senior')", "insert": "WHERE Category IN ('Junior', 'Senior')"}, {"label": "SELECT MemName, Category", "insert": "SELECT MemName, Category "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "IN 兩類", "sql": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category IN ('Junior', 'Senior');"}], "answer": "SELECT MemName, Category\nFROM CLUBMEMBER\nWHERE Category IN ('Junior', 'Senior');", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "between", "group": "tutorial", "nav": "SQL Between", "title": "BETWEEN", "pill": "範圍", "mode": "live", "teach": "<p><span class=\"kw\">BETWEEN a AND b</span> 包含兩端（閉區間）。</p>", "tryNote": "找出 Fee 喺 150 至 300（含）嘅會員。", "snippets": [{"label": "WHERE Fee BETWEEN 150 AND 300", "insert": "WHERE Fee BETWEEN 150 AND 300"}, {"label": "SELECT MemName, Fee", "insert": "SELECT MemName, Fee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "150–300", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee BETWEEN 150 AND 300;"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee BETWEEN 150 AND 300;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "aliases", "group": "tutorial", "nav": "SQL Aliases", "title": "別名 AS", "pill": "欄／表別名", "mode": "live", "teach": "<p>用 <span class=\"kw\">AS</span> 幫欄（或表）改顯示名，方便閱讀。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> MemName <span class=\"k\">AS</span> Name, Fee <span class=\"k\">AS</span> AnnualFee\n<span class=\"k\">FROM</span> CLUBMEMBER;</pre>", "tryNote": "顯示 Name、AnnualFee（用 AS 別名）。", "snippets": [{"label": "AS Name", "insert": " AS Name"}, {"label": "AS AnnualFee", "insert": " AS AnnualFee"}, {"label": "SELECT MemName", "insert": "SELECT MemName"}, {"label": ", Fee", "insert": ", Fee"}, {"label": "FROM CLUBMEMBER", "insert": " FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "別名", "sql": "SELECT MemName AS Name, Fee AS AnnualFee\nFROM CLUBMEMBER;"}], "answer": "SELECT MemName AS Name, Fee AS AnnualFee\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "joins", "group": "tutorial", "nav": "SQL Joins", "title": "JOIN 總覽", "pill": "連接表", "mode": "live", "teach": "<p>資料常分多張表。<span class=\"kw\">JOIN</span> 用共通欄（例如 ClubID）拼埋一齊。</p>\n    <ul>\n      <li><span class=\"kw\">INNER JOIN</span> — 兩邊都有匹配先出</li>\n      <li><span class=\"kw\">LEFT JOIN</span> — 保留左表全部，右表無就 NULL</li>\n    </ul>\n    <p>本庫：<span class=\"kw\">CLUBMEMBER.ClubID</span> → <span class=\"kw\">CLUB.ClubID</span></p>", "tryNote": "試 INNER JOIN 睇會員同學會名。", "snippets": [{"label": "SELECT m.MemName, c.ClubName", "insert": "SELECT m.MemName, c.ClubName "}, {"label": "FROM CLUBMEMBER m", "insert": "FROM CLUBMEMBER m "}, {"label": "INNER JOIN CLUB c ON m.ClubID = c.ClubID", "insert": "INNER JOIN CLUB c ON m.ClubID = c.ClubID"}, {"label": ";", "insert": ";"}], "examples": [{"label": "INNER JOIN", "sql": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nINNER JOIN CLUB c ON m.ClubID = c.ClubID;"}], "answer": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nINNER JOIN CLUB c ON m.ClubID = c.ClubID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "innerjoin", "group": "tutorial", "nav": "SQL Inner Join", "title": "INNER JOIN", "pill": "內連接", "mode": "live", "teach": "<p>只保留<strong>兩表都匹配</strong>嘅列。ClubID 為 NULL 嘅會員唔會出現。</p>", "tryNote": "列出有學會嘅會員：MemName、ClubName。", "snippets": [{"label": "INNER JOIN CLUB c ON m.ClubID = c.ClubID", "insert": "INNER JOIN CLUB c ON m.ClubID = c.ClubID"}, {"label": "FROM CLUBMEMBER m", "insert": "FROM CLUBMEMBER m "}, {"label": ";", "insert": ";"}], "examples": [{"label": "會員＋學會", "sql": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nINNER JOIN CLUB c ON m.ClubID = c.ClubID;"}], "answer": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nINNER JOIN CLUB c ON m.ClubID = c.ClubID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "leftjoin", "group": "tutorial", "nav": "SQL Left Join", "title": "LEFT JOIN", "pill": "左連接", "mode": "live", "teach": "<p><span class=\"kw\">LEFT JOIN</span> 保留左表（CLUBMEMBER）全部列；冇學會嘅會員 ClubName 會係 NULL。</p>", "tryNote": "列出所有會員同（如有）學會名。", "snippets": [{"label": "LEFT JOIN CLUB c ON m.ClubID = c.ClubID", "insert": "LEFT JOIN CLUB c ON m.ClubID = c.ClubID"}, {"label": "SELECT m.MemName, c.ClubName", "insert": "SELECT m.MemName, c.ClubName "}, {"label": "FROM CLUBMEMBER m", "insert": "FROM CLUBMEMBER m "}, {"label": ";", "insert": ";"}], "examples": [{"label": "全部會員", "sql": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nLEFT JOIN CLUB c ON m.ClubID = c.ClubID;"}], "answer": "SELECT m.MemName, c.ClubName\nFROM CLUBMEMBER m\nLEFT JOIN CLUB c ON m.ClubID = c.ClubID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "rightjoin", "group": "tutorial", "nav": "SQL Right Join", "title": "RIGHT JOIN", "pill": "右連接", "mode": "live", "teach": "<p><span class=\"kw\">RIGHT JOIN</span> 保留右表全部。SQLite／sql.js <strong>未必支援</strong> RIGHT JOIN；實務多用 LEFT JOIN 調轉左右表表達。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> c.ClubName, m.MemName\n<span class=\"k\">FROM</span> CLUBMEMBER m\n<span class=\"k\">RIGHT JOIN</span> CLUB c <span class=\"k\">ON</span> m.ClubID = c.ClubID;</pre>\n    <div class=\"tip\">等價思路：FROM CLUB c LEFT JOIN CLUBMEMBER m …</div>", "tryNote": "示範：用 LEFT JOIN 由 CLUB 出發（SQLite 友善）。", "snippets": [{"label": "SELECT c.ClubName, m.MemName", "insert": "SELECT c.ClubName, m.MemName "}, {"label": "FROM CLUB c", "insert": "FROM CLUB c "}, {"label": "LEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID", "insert": "LEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID"}, {"label": ";", "insert": ";"}], "examples": [{"label": "由學會出發", "sql": "SELECT c.ClubName, m.MemName\nFROM CLUB c\nLEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID;"}], "answer": "SELECT c.ClubName, m.MemName\nFROM CLUB c\nLEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "fulljoin", "group": "tutorial", "nav": "SQL Full Join", "title": "FULL JOIN", "pill": "全外連接", "mode": "demo", "teach": "<p><span class=\"kw\">FULL OUTER JOIN</span> 兩邊唔匹配都保留。SQLite 通常<strong>唔直接支援</strong>；可用 UNION 模擬 LEFT＋RIGHT 效果。</p>\n    <div class=\"tip\">DSE 多考概念；實作以 INNER／LEFT 為主。</div>", "tryNote": "概念示範（執行顯示說明表）。", "snippets": [{"label": "-- FULL JOIN 概念", "insert": "-- FULL JOIN 概念"}, {"label": ";", "insert": ";"}], "examples": [{"label": "說明", "sql": "SELECT 'FULL JOIN = 保留兩表所有列，無匹配填 NULL' AS Note;"}], "answer": "SELECT 'FULL JOIN = 保留兩表所有列，無匹配填 NULL' AS Note;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["Note"], "rows": [["FULL JOIN：兩邊有嘅列都保留；SQLite 常用 UNION 模擬"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "selfjoin", "group": "tutorial", "nav": "SQL Self Join", "title": "SELF JOIN", "pill": "自己連自己", "mode": "live", "teach": "<p>同一張表用兩個別名比較列。例如搵「同年費」嘅唔同會員。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> a.MemName, b.MemName, a.Fee\n<span class=\"k\">FROM</span> CLUBMEMBER a\n<span class=\"k\">INNER JOIN</span> CLUBMEMBER b\n  <span class=\"k\">ON</span> a.Fee = b.Fee <span class=\"k\">AND</span> a.MemID &lt; b.MemID;</pre>", "tryNote": "找出 Fee 相同嘅會員配對（避免自己配自己）。", "snippets": [{"label": "FROM CLUBMEMBER a", "insert": "FROM CLUBMEMBER a "}, {"label": "INNER JOIN CLUBMEMBER b ON a.Fee = b.Fee AND a.MemID < b.MemID", "insert": "INNER JOIN CLUBMEMBER b ON a.Fee = b.Fee AND a.MemID < b.MemID"}, {"label": ";", "insert": ";"}], "examples": [{"label": "同年費配對", "sql": "SELECT a.MemName AS Member1, b.MemName AS Member2, a.Fee\nFROM CLUBMEMBER a\nINNER JOIN CLUBMEMBER b\n  ON a.Fee = b.Fee AND a.MemID < b.MemID;"}], "answer": "SELECT a.MemName AS Member1, b.MemName AS Member2, a.Fee\nFROM CLUBMEMBER a\nINNER JOIN CLUBMEMBER b\n  ON a.Fee = b.Fee AND a.MemID < b.MemID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "union", "group": "tutorial", "nav": "SQL Union", "title": "UNION", "pill": "合併結果", "mode": "live", "teach": "<p><span class=\"kw\">UNION</span> 合併兩個 SELECT 結果並<strong>去重</strong>。兩段欄數同類型要相容。</p>", "tryNote": "合併：所有 Junior 姓名 ∪ 所有 Senior 姓名。", "snippets": [{"label": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'", "insert": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior' "}, {"label": "UNION", "insert": "UNION "}, {"label": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Senior'", "insert": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Senior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "UNION", "sql": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Senior';"}], "answer": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Senior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "unionall", "group": "tutorial", "nav": "SQL Union All", "title": "UNION ALL", "pill": "合併保留重複", "mode": "live", "teach": "<p><span class=\"kw\">UNION ALL</span> 合併但<strong>唔去重</strong>，通常快啲。</p>", "tryNote": "用 UNION ALL 合併 Junior 同 Adult 嘅 MemName。", "snippets": [{"label": "UNION ALL", "insert": "UNION ALL"}, {"label": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION ALL\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult'", "insert": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION ALL\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult'"}], "examples": [{"label": "UNION ALL", "sql": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION ALL\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult';"}], "answer": "SELECT MemName FROM CLUBMEMBER WHERE Category = 'Junior'\nUNION ALL\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "groupby", "group": "tutorial", "nav": "SQL Group By", "title": "GROUP BY", "pill": "分組", "mode": "live", "teach": "<p>「每一類有幾人／總年費」→ <span class=\"kw\">GROUP BY</span>＋聚合。</p>\n    <div class=\"syntax-box\">SELECT 分組欄, 聚合(…)<br>FROM …<br>GROUP BY 分組欄;</div>\n    <div class=\"errbox\">SELECT 嘅普通欄通常要出現喺 GROUP BY。</div>", "tryNote": "每個 Category 嘅平均年費 AvgFee。", "snippets": [{"label": "SELECT Category, AVG(Fee) AS AvgFee", "insert": "SELECT Category, AVG(Fee) AS AvgFee "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "GROUP BY Category", "insert": " GROUP BY Category"}, {"label": ";", "insert": ";"}], "examples": [{"label": "人數", "sql": "SELECT Category, COUNT(*) AS NumMembers\nFROM CLUBMEMBER\nGROUP BY Category;"}, {"label": "總年費", "sql": "SELECT Category, SUM(Fee) AS TotalFee\nFROM CLUBMEMBER\nGROUP BY Category;"}], "answer": "SELECT Category, AVG(Fee) AS AvgFee\nFROM CLUBMEMBER\nGROUP BY Category;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "having", "group": "tutorial", "nav": "SQL Having", "title": "HAVING", "pill": "分組後篩選", "mode": "live", "teach": "<p><span class=\"kw\">WHERE</span> 喺分組前篩列；<span class=\"kw\">HAVING</span> 喺分組後篩「組」。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> Category, <span class=\"k\">COUNT</span>(*) <span class=\"k\">AS</span> Num\n<span class=\"k\">FROM</span> CLUBMEMBER\n<span class=\"k\">GROUP BY</span> Category\n<span class=\"k\">HAVING</span> <span class=\"k\">COUNT</span>(*) &gt;= <span class=\"n\">3</span>;</pre>", "tryNote": "只顯示人數 ≥ 3 嘅 Category。", "snippets": [{"label": "GROUP BY Category", "insert": "GROUP BY Category"}, {"label": "HAVING COUNT(*) >= 3", "insert": " HAVING COUNT(*) >= 3"}, {"label": ";", "insert": ";"}], "examples": [{"label": "人數≥3", "sql": "SELECT Category, COUNT(*) AS Num\nFROM CLUBMEMBER\nGROUP BY Category\nHAVING COUNT(*) >= 3;"}], "answer": "SELECT Category, COUNT(*) AS Num\nFROM CLUBMEMBER\nGROUP BY Category\nHAVING COUNT(*) >= 3;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "exists", "group": "tutorial", "nav": "SQL Exists", "title": "EXISTS", "pill": "子查詢存在", "mode": "live", "teach": "<p><span class=\"kw\">EXISTS (子查詢)</span>：子查詢有至少一列就為真。</p>\n    <p>例子：有冇會員屬於電腦學會（C01）？</p>", "tryNote": "用 EXISTS 列出屬於 C01 嘅會員姓名。", "snippets": [{"label": "WHERE EXISTS (", "insert": "WHERE EXISTS ("}, {"label": "SELECT 1 FROM CLUB c WHERE c.ClubID = CLUBMEMBER.ClubID AND c.ClubID = 'C01'", "insert": "SELECT 1 FROM CLUB c WHERE c.ClubID = CLUBMEMBER.ClubID AND c.ClubID = 'C01'"}, {"label": ")", "insert": ")"}, {"label": ";", "insert": ";"}], "examples": [{"label": "EXISTS C01", "sql": "SELECT MemName\nFROM CLUBMEMBER\nWHERE EXISTS (\n  SELECT 1 FROM CLUB c\n  WHERE c.ClubID = CLUBMEMBER.ClubID AND c.ClubID = 'C01'\n);"}], "answer": "SELECT MemName\nFROM CLUBMEMBER\nWHERE ClubID = 'C01';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "any", "group": "tutorial", "nav": "SQL Any", "title": "ANY", "pill": "子查詢比較", "mode": "live", "teach": "<p><span class=\"kw\">= ANY (子查詢)</span> 類似 IN。SQLite 對 ANY 支援有限；可用 IN 代替。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> MemName, Fee <span class=\"k\">FROM</span> CLUBMEMBER\n<span class=\"k\">WHERE</span> Fee &gt; <span class=\"k\">ANY</span> (<span class=\"k\">SELECT</span> Fee <span class=\"k\">FROM</span> CLUBMEMBER <span class=\"k\">WHERE</span> Category = 'Junior');</pre>\n    <div class=\"tip\">教學上理解「同子查詢任一值比較」；實作建議用聚合或 IN。</div>", "tryNote": "等價練習：Fee 高過所有 Junior 最低年費？（用 > 子查詢 MIN）", "snippets": [{"label": "WHERE Fee > (SELECT MIN(Fee) FROM CLUBMEMBER WHERE Category = 'Junior')", "insert": "WHERE Fee > (SELECT MIN(Fee) FROM CLUBMEMBER WHERE Category = 'Junior')"}, {"label": ";", "insert": ";"}], "examples": [{"label": "高過 Junior 最低", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > (SELECT MIN(Fee) FROM CLUBMEMBER WHERE Category = 'Junior');"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > (SELECT MIN(Fee) FROM CLUBMEMBER WHERE Category = 'Junior');", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "all", "group": "tutorial", "nav": "SQL All", "title": "ALL", "pill": "同全部比較", "mode": "live", "teach": "<p><span class=\"kw\">&gt; ALL (子查詢)</span> 表示大過子查詢每一個值。常可用 <span class=\"kw\">&gt; (SELECT MAX(…))</span> 代替。</p>", "tryNote": "找出 Fee 大過全部 Junior 嘅會員（用 &gt; MAX 子查詢）。", "snippets": [{"label": "WHERE Fee > (SELECT MAX(Fee) FROM CLUBMEMBER WHERE Category = 'Junior')", "insert": "WHERE Fee > (SELECT MAX(Fee) FROM CLUBMEMBER WHERE Category = 'Junior')"}, {"label": ";", "insert": ";"}], "examples": [{"label": "高過全部 Junior", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > (SELECT MAX(Fee) FROM CLUBMEMBER WHERE Category = 'Junior');"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Fee > (SELECT MAX(Fee) FROM CLUBMEMBER WHERE Category = 'Junior');", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "selectinto", "group": "tutorial", "nav": "SQL Select Into", "title": "SELECT INTO", "pill": "複製到新表", "mode": "demo", "teach": "<p>部分系統用 <span class=\"kw\">SELECT … INTO 新表</span> 複製結果。SQLite 多用：</p>\n    <pre class=\"sql\"><span class=\"k\">CREATE TABLE</span> SeniorBackup <span class=\"k\">AS</span>\n<span class=\"k\">SELECT</span> * <span class=\"k\">FROM</span> CLUBMEMBER <span class=\"k\">WHERE</span> Category = 'Senior';</pre>", "tryNote": "示範概念（唔真正建表）。", "snippets": [{"label": "CREATE TABLE SeniorBackup AS SELECT * FROM CLUBMEMBER WHERE Category = 'Senior'", "insert": "CREATE TABLE SeniorBackup AS SELECT * FROM CLUBMEMBER WHERE Category = 'Senior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "SQLite 寫法", "sql": "CREATE TABLE SeniorBackup AS\nSELECT * FROM CLUBMEMBER WHERE Category = 'Senior';"}], "answer": "CREATE TABLE SeniorBackup AS\nSELECT * FROM CLUBMEMBER WHERE Category = 'Senior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：會建立 SeniorBackup（本教學唔寫入）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "insertselect", "group": "tutorial", "nav": "SQL Insert Into Select", "title": "INSERT INTO SELECT", "pill": "由查詢插入", "mode": "demo", "teach": "<p>把查詢結果插入另一表：</p>\n    <pre class=\"sql\"><span class=\"k\">INSERT INTO</span> Archive (MemID, MemName)\n<span class=\"k\">SELECT</span> MemID, MemName <span class=\"k\">FROM</span> CLUBMEMBER\n<span class=\"k\">WHERE</span> Category = 'Senior';</pre>", "tryNote": "示範（唔改庫）。", "snippets": [{"label": "INSERT INTO Archive (MemID, MemName)\nSELECT MemID, MemName FROM CLUBMEMBER WHERE Category = 'Senior'", "insert": "INSERT INTO Archive (MemID, MemName)\nSELECT MemID, MemName FROM CLUBMEMBER WHERE Category = 'Senior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "插入查詢結果", "sql": "INSERT INTO Archive (MemID, MemName)\nSELECT MemID, MemName FROM CLUBMEMBER\nWHERE Category = 'Senior';"}], "answer": "INSERT INTO Archive (MemID, MemName)\nSELECT MemID, MemName FROM CLUBMEMBER\nWHERE Category = 'Senior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：由 SELECT 插入 Archive（未執行）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "case", "group": "tutorial", "nav": "SQL Case", "title": "CASE", "pill": "條件欄", "mode": "live", "teach": "<p><span class=\"kw\">CASE</span> 喺 SELECT 入面按條件輸出文字／值。</p>\n    <pre class=\"sql\"><span class=\"k\">SELECT</span> MemName, Fee,\n  <span class=\"k\">CASE</span>\n    <span class=\"k\">WHEN</span> Fee &gt;= 300 <span class=\"k\">THEN</span> 'High'\n    <span class=\"k\">WHEN</span> Fee &gt;= 150 <span class=\"k\">THEN</span> 'Mid'\n    <span class=\"k\">ELSE</span> 'Low'\n  <span class=\"k\">END</span> <span class=\"k\">AS</span> FeeBand\n<span class=\"k\">FROM</span> CLUBMEMBER;</pre>", "tryNote": "為每位會員加上 FeeBand（High/Mid/Low）。", "snippets": [{"label": "CASE WHEN Fee >= 300 THEN 'High' WHEN Fee >= 150 THEN 'Mid' ELSE 'Low' END AS FeeBand", "insert": "CASE WHEN Fee >= 300 THEN 'High' WHEN Fee >= 150 THEN 'Mid' ELSE 'Low' END AS FeeBand"}, {"label": ";", "insert": ";"}], "examples": [{"label": "FeeBand", "sql": "SELECT MemName, Fee,\n  CASE\n    WHEN Fee >= 300 THEN 'High'\n    WHEN Fee >= 150 THEN 'Mid'\n    ELSE 'Low'\n  END AS FeeBand\nFROM CLUBMEMBER;"}], "answer": "SELECT MemName, Fee,\n  CASE\n    WHEN Fee >= 300 THEN 'High'\n    WHEN Fee >= 150 THEN 'Mid'\n    ELSE 'Low'\n  END AS FeeBand\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "nullfunc", "group": "tutorial", "nav": "SQL Null Functions", "title": "處理 NULL", "pill": "IFNULL", "mode": "live", "teach": "<p>SQLite 用 <span class=\"kw\">IFNULL(x, y)</span>：x 係 NULL 就用 y。其他系統有 ISNULL／COALESCE。</p>", "tryNote": "顯示會員同學會編號；冇 ClubID 就顯示 '未分會'。", "snippets": [{"label": "SELECT MemName, IFNULL(ClubID, '未分會') AS Club", "insert": "SELECT MemName, IFNULL(ClubID, '未分會') AS Club "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "IFNULL", "sql": "SELECT MemName, IFNULL(ClubID, '未分會') AS Club\nFROM CLUBMEMBER;"}], "answer": "SELECT MemName, IFNULL(ClubID, '未分會') AS Club\nFROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "sp", "group": "tutorial", "nav": "SQL Stored Procedures", "title": "預存程序", "pill": "概念", "mode": "demo", "teach": "<p><strong>Stored Procedure</strong> 係存喺資料庫嘅一組 SQL，可重用。學校課程多只考<strong>概念</strong>。</p>\n    <ul>\n      <li>優點：重用、減少網絡來回、可做權限控制</li>\n      <li>SQLite <strong>唔支援</strong>傳統預存程序</li>\n    </ul>", "tryNote": "本課以說明為主。", "snippets": [{"label": "-- 概念課", "insert": "-- 概念課"}, {"label": ";", "insert": ";"}], "examples": [{"label": "說明", "sql": "SELECT 'Stored Procedure：預先儲存嘅 SQL 程序（概念）' AS Note;"}], "answer": "SELECT 'Stored Procedure：預先儲存嘅 SQL 程序（概念）' AS Note;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["Note"], "rows": [["預存程序：封裝多句 SQL；SQLite 唔支援"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "comments", "group": "tutorial", "nav": "SQL Comments", "title": "註解", "pill": "註解", "mode": "live", "teach": "<p>註解唔會執行：</p>\n    <ul>\n      <li>單行：<span class=\"kw\">-- 說明</span></li>\n      <li>多行：<span class=\"kw\">/* … */</span></li>\n    </ul>", "tryNote": "寫一句帶註解嘅 SELECT。", "snippets": [{"label": "-- 取出所有 Adult\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult';", "insert": "-- 取出所有 Adult\nSELECT MemName FROM CLUBMEMBER WHERE Category = 'Adult';"}, {"label": ";", "insert": ";"}], "examples": [{"label": "連註解", "sql": "-- Adult members\nSELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult';"}], "answer": "-- Adult members\nSELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "operators", "group": "tutorial", "nav": "SQL Operators", "title": "運算符", "pill": "一覽", "mode": "live", "teach": "<p>常考運算符：</p>\n    <ul>\n      <li>比較：<span class=\"kw\">= &lt;&gt; &gt; &lt; &gt;= &lt;=</span></li>\n      <li>邏輯：<span class=\"kw\">AND OR NOT</span></li>\n      <li>算術：<span class=\"kw\">+ - * /</span>（視引擎）</li>\n      <li>其他：<span class=\"kw\">LIKE IN BETWEEN IS NULL</span></li>\n    </ul>", "tryNote": "用運算符搵 Fee &gt;= 200 而且 Category &lt;&gt; 'Junior'。", "snippets": [{"label": "WHERE Fee >= 200 AND Category <> 'Junior'", "insert": "WHERE Fee >= 200 AND Category <> 'Junior'"}, {"label": ";", "insert": ";"}], "examples": [{"label": "綜合條件", "sql": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nWHERE Fee >= 200 AND Category <> 'Junior';"}], "answer": "SELECT MemName, Category, Fee\nFROM CLUBMEMBER\nWHERE Fee >= 200 AND Category <> 'Junior';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "createdb", "group": "database", "nav": "SQL Create DB", "title": "CREATE DATABASE", "pill": "建立資料庫", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">CREATE DATABASE SchoolClub;</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "CREATE DATABASE SchoolClub;", "insert": "CREATE DATABASE SchoolClub;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "CREATE DATABASE SchoolClub;"}], "answer": "CREATE DATABASE SchoolClub;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：建立資料庫 SchoolClub（檔案型 DB 如 SQLite 通常開檔即是庫）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "dropdb", "group": "database", "nav": "SQL Drop DB", "title": "DROP DATABASE", "pill": "刪除資料庫", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">DROP DATABASE SchoolClub;</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "DROP DATABASE SchoolClub;", "insert": "DROP DATABASE SchoolClub;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "DROP DATABASE SchoolClub;"}], "answer": "DROP DATABASE SchoolClub;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：刪除資料庫（危險！教學環境先用）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "backupdb", "group": "database", "nav": "SQL Backup DB", "title": "備份", "pill": "備份資料庫", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">-- 備份多用工具／複製檔案\n-- 例：複製 schoolclub.db → schoolclub_backup.db</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "-- 備份多用工具／複製檔案\n-- 例：複製 schoolclub.db → schoolclub_backup.db", "insert": "-- 備份多用工具／複製檔案\n-- 例：複製 schoolclub.db → schoolclub_backup.db"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "-- 備份多用工具／複製檔案\n-- 例：複製 schoolclub.db → schoolclub_backup.db"}], "answer": "-- 備份多用工具／複製檔案\n-- 例：複製 schoolclub.db → schoolclub_backup.db", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：備份通常係複製資料庫檔或用管理工具匯出"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "createtable", "group": "database", "nav": "SQL Create Table", "title": "CREATE TABLE", "pill": "建立表", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">CREATE TABLE ACTIVITY (\n  ActID TEXT PRIMARY KEY,\n  ActName TEXT NOT NULL,\n  ClubID TEXT,\n  Fee INTEGER DEFAULT 0\n);</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "CREATE TABLE ACTIVITY (\n  ActID TEXT PRIMARY KEY,\n  ActName TEXT NOT NULL,\n  ClubID TEXT,\n  Fee INTEGER DEFAULT 0\n);", "insert": "CREATE TABLE ACTIVITY (\n  ActID TEXT PRIMARY KEY,\n  ActName TEXT NOT NULL,\n  ClubID TEXT,\n  Fee INTEGER DEFAULT 0\n);"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "CREATE TABLE ACTIVITY (\n  ActID TEXT PRIMARY KEY,\n  ActName TEXT NOT NULL,\n  ClubID TEXT,\n  Fee INTEGER DEFAULT 0\n);"}], "answer": "CREATE TABLE ACTIVITY (\n  ActID TEXT PRIMARY KEY,\n  ActName TEXT NOT NULL,\n  ClubID TEXT,\n  Fee INTEGER DEFAULT 0\n);", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：建立 ACTIVITY 表結構"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "droptable", "group": "database", "nav": "SQL Drop Table", "title": "DROP TABLE", "pill": "刪表", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">DROP TABLE ACTIVITY;</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "DROP TABLE ACTIVITY;", "insert": "DROP TABLE ACTIVITY;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "DROP TABLE ACTIVITY;"}], "answer": "DROP TABLE ACTIVITY;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：刪除成張表（連資料）"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "altertable", "group": "database", "nav": "SQL Alter Table", "title": "ALTER TABLE", "pill": "改表結構", "mode": "demo", "teach": "<p>資料定義語言（DDL）用於改結構／管理庫。</p>\n        <pre class=\"sql\">ALTER TABLE CLUBMEMBER ADD COLUMN Phone TEXT;</pre>\n        <div class=\"tip\">本課顯示示範結果，唔會改教學種子資料。</div>", "tryNote": "撳執行睇示範說明。", "snippets": [{"label": "ALTER TABLE CLUBMEMBER ADD COLUMN Phone TEXT;", "insert": "ALTER TABLE CLUBMEMBER ADD COLUMN Phone TEXT;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "示範語句", "sql": "ALTER TABLE CLUBMEMBER ADD COLUMN Phone TEXT;"}], "answer": "ALTER TABLE CLUBMEMBER ADD COLUMN Phone TEXT;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：加欄 Phone"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "constraints", "group": "database", "nav": "SQL Constraints", "title": "Constraints 總覽", "pill": "資料庫", "mode": "demo", "teach": "<p>限制（Constraints）保證資料合理：NOT NULL、UNIQUE、PRIMARY KEY、FOREIGN KEY、CHECK、DEFAULT。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'Constraints: NOT NULL / UNIQUE / PK / FK / CHECK / DEFAULT' AS Note;", "insert": "SELECT 'Constraints: NOT NULL / UNIQUE / PK / FK / CHECK / DEFAULT' AS Note;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'Constraints: NOT NULL / UNIQUE / PK / FK / CHECK / DEFAULT' AS Note;"}], "answer": "SELECT 'Constraints: NOT NULL / UNIQUE / PK / FK / CHECK / DEFAULT' AS Note;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["限制令資料更可靠；建表時一齊宣告。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "notnull", "group": "database", "nav": "SQL Not Null", "title": "NOT NULL", "pill": "資料庫", "mode": "demo", "teach": "<p><span class=\"kw\">NOT NULL</span>：該欄唔可以係空。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'MemName TEXT NOT NULL' AS Example;", "insert": "SELECT 'MemName TEXT NOT NULL' AS Example;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'MemName TEXT NOT NULL' AS Example;"}], "answer": "SELECT 'MemName TEXT NOT NULL' AS Example;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["MemName 必須有值。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "unique", "group": "database", "nav": "SQL Unique", "title": "UNIQUE", "pill": "資料庫", "mode": "demo", "teach": "<p><span class=\"kw\">UNIQUE</span>：該欄值唔可重複（NULL 處理視系統）。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'MemID TEXT UNIQUE' AS Example;", "insert": "SELECT 'MemID TEXT UNIQUE' AS Example;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'MemID TEXT UNIQUE' AS Example;"}], "answer": "SELECT 'MemID TEXT UNIQUE' AS Example;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["MemID 唔可重複。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "pk", "group": "database", "nav": "SQL Primary Key", "title": "PRIMARY KEY", "pill": "資料庫", "mode": "live", "teach": "<p><span class=\"kw\">PRIMARY KEY</span> = 唯一識別一列（常含 NOT NULL＋UNIQUE）。</p><div class=\"tip\">可執行相關 SELECT 觀察種子資料。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT MemID, MemName FROM CLUBMEMBER;", "insert": "SELECT MemID, MemName FROM CLUBMEMBER;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT MemID, MemName FROM CLUBMEMBER;"}], "answer": "SELECT MemID, MemName FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "fk", "group": "database", "nav": "SQL Foreign Key", "title": "FOREIGN KEY", "pill": "資料庫", "mode": "live", "teach": "<p><span class=\"kw\">FOREIGN KEY</span> 指向另一表主鍵，維持參照完整性。例：CLUBMEMBER.ClubID → CLUB.ClubID。</p><div class=\"tip\">可執行相關 SELECT 觀察種子資料。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT m.MemName, m.ClubID, c.ClubName FROM CLUBMEMBER m LEF…", "insert": "SELECT m.MemName, m.ClubID, c.ClubName FROM CLUBMEMBER m LEF…"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT m.MemName, m.ClubID, c.ClubName FROM CLUBMEMBER m LEFT JOIN CLUB c ON m.ClubID = c.ClubID;"}], "answer": "SELECT m.MemName, m.ClubID, c.ClubName FROM CLUBMEMBER m LEFT JOIN CLUB c ON m.ClubID = c.ClubID;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "check", "group": "database", "nav": "SQL Check", "title": "CHECK", "pill": "資料庫", "mode": "demo", "teach": "<p><span class=\"kw\">CHECK (Fee &gt;= 0)</span> 限制合理範圍。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'CHECK (Fee >= 0)' AS Example;", "insert": "SELECT 'CHECK (Fee >= 0)' AS Example;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'CHECK (Fee >= 0)' AS Example;"}], "answer": "SELECT 'CHECK (Fee >= 0)' AS Example;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["Fee 唔可以係負數。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "default", "group": "database", "nav": "SQL Default", "title": "DEFAULT", "pill": "資料庫", "mode": "demo", "teach": "<p>插入時若冇提供值，用 <span class=\"kw\">DEFAULT</span>。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'Fee INTEGER DEFAULT 100' AS Example;", "insert": "SELECT 'Fee INTEGER DEFAULT 100' AS Example;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'Fee INTEGER DEFAULT 100' AS Example;"}], "answer": "SELECT 'Fee INTEGER DEFAULT 100' AS Example;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["預設年費 100。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "index", "group": "database", "nav": "SQL Create Index", "title": "INDEX", "pill": "資料庫", "mode": "demo", "teach": "<p>索引加快搜尋，但佔空間、減慢寫入。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "CREATE INDEX idx_category ON CLUBMEMBER(Category);", "insert": "CREATE INDEX idx_category ON CLUBMEMBER(Category);"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "CREATE INDEX idx_category ON CLUBMEMBER(Category);"}], "answer": "CREATE INDEX idx_category ON CLUBMEMBER(Category);", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：喺 Category 建索引"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "autoinc", "group": "database", "nav": "SQL Auto Increment", "title": "AUTOINCREMENT", "pill": "資料庫", "mode": "demo", "teach": "<p>整數主鍵自動加一。SQLite：INTEGER PRIMARY KEY AUTOINCREMENT。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'INTEGER PRIMARY KEY AUTOINCREMENT' AS Example;", "insert": "SELECT 'INTEGER PRIMARY KEY AUTOINCREMENT' AS Example;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'INTEGER PRIMARY KEY AUTOINCREMENT' AS Example;"}], "answer": "SELECT 'INTEGER PRIMARY KEY AUTOINCREMENT' AS Example;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["自動編號主鍵。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "dates", "group": "database", "nav": "SQL Dates", "title": "日期", "pill": "資料庫", "mode": "live", "teach": "<p>本表 <span class=\"kw\">JoinDate</span> 以 TEXT 存 'YYYY-MM-DD'。可用字串比較做先後。</p><div class=\"tip\">可執行相關 SELECT 觀察種子資料。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT MemName, JoinDate FROM CLUBMEMBER WHERE JoinDate >= '…", "insert": "SELECT MemName, JoinDate FROM CLUBMEMBER WHERE JoinDate >= '…"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT MemName, JoinDate FROM CLUBMEMBER WHERE JoinDate >= '2024-01-01' ORDER BY JoinDate;"}], "answer": "SELECT MemName, JoinDate FROM CLUBMEMBER WHERE JoinDate >= '2024-01-01' ORDER BY JoinDate;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "views", "group": "database", "nav": "SQL Views", "title": "VIEW", "pill": "資料庫", "mode": "demo", "teach": "<p>檢視（View）係儲存嘅查詢，用起嚟似表。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "CREATE VIEW AdultMember AS SELECT MemID, MemName, Fee FROM C…", "insert": "CREATE VIEW AdultMember AS SELECT MemID, MemName, Fee FROM C…"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "CREATE VIEW AdultMember AS SELECT MemID, MemName, Fee FROM CLUBMEMBER WHERE Category = 'Adult';"}], "answer": "CREATE VIEW AdultMember AS SELECT MemID, MemName, Fee FROM CLUBMEMBER WHERE Category = 'Adult';", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["示範：建立 AdultMember 檢視"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "injection", "group": "database", "nav": "SQL Injection", "title": "SQL Injection", "pill": "資料庫", "mode": "demo", "teach": "<p><strong>SQL Injection</strong>：惡意輸入改變 SQL 意思。防護：參數化查詢、唔好拼接用戶輸入。</p><div class=\"errbox\">危險例子（唔好學來攻擊）：WHERE user = '' OR '1'='1'</div><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT '請用參數化查詢，唔好串接用戶輸入' AS SafetyTip;", "insert": "SELECT '請用參數化查詢，唔好串接用戶輸入' AS SafetyTip;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT '請用參數化查詢，唔好串接用戶輸入' AS SafetyTip;"}], "answer": "SELECT '請用參數化查詢，唔好串接用戶輸入' AS SafetyTip;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["安全提示：參數化／預處理。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "params", "group": "database", "nav": "SQL Parameters", "title": "參數", "pill": "資料庫", "mode": "demo", "teach": "<p>參數化：SQL 用 <span class=\"kw\">?</span> 或 <span class=\"kw\">@name</span> 佔位，值另行綁定。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'SELECT * FROM CLUBMEMBER WHERE MemID = ?' AS ParamExample;", "insert": "SELECT 'SELECT * FROM CLUBMEMBER WHERE MemID = ?' AS ParamExample;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'SELECT * FROM CLUBMEMBER WHERE MemID = ?' AS ParamExample;"}], "answer": "SELECT 'SELECT * FROM CLUBMEMBER WHERE MemID = ?' AS ParamExample;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["佔位符例子。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "prepared", "group": "database", "nav": "SQL Prepared Statements", "title": "Prepared", "pill": "資料庫", "mode": "demo", "teach": "<p>Prepared Statement 預先編譯 SQL，重用時只換參數，有助防 injection。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT 'Prepare once, bind parameters, execute' AS Note;", "insert": "SELECT 'Prepare once, bind parameters, execute' AS Note;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT 'Prepare once, bind parameters, execute' AS Note;"}], "answer": "SELECT 'Prepare once, bind parameters, execute' AS Note;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["預處理語句概念。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "hosting", "group": "database", "nav": "SQL Hosting", "title": "Hosting", "pill": "資料庫", "mode": "demo", "teach": "<p>學校專案可能用網上 MySQL／雲端 DB。課堂練習用本頁離線 SQLite 足夠。</p><div class=\"tip\">本課以概念／示範為主。</div>", "tryNote": "試執行或睇示範。", "snippets": [{"label": "SELECT '課堂：離線 sql.js；正式系統：伺服器資料庫' AS Note;", "insert": "SELECT '課堂：離線 sql.js；正式系統：伺服器資料庫' AS Note;"}, {"label": ";", "insert": ";"}], "examples": [{"label": "例子", "sql": "SELECT '課堂：離線 sql.js；正式系統：伺服器資料庫' AS Note;"}], "answer": "SELECT '課堂：離線 sql.js；正式系統：伺服器資料庫' AS Note;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["訊息"], "rows": [["Hosting 概念。"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "cert", "group": "cert", "nav": "SQL Certificate", "title": "學習目標檢核", "pill": "自評", "mode": "live", "teach": "<p>對照 DSE ICT 常見要求，自問會唔會：</p>\n    <ol>\n      <li>寫 SELECT／WHERE／ORDER BY</li>\n      <li>用聚合同 GROUP BY</li>\n      <li>解釋 PK／FK</li>\n      <li>讀懂簡單 JOIN</li>\n    </ol>\n    <p>唔係官方證書頁；畀課堂自評用。</p>", "tryNote": "自測：取出每位 Adult 嘅姓名同年費，按年費降序。", "snippets": [{"label": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Adult' ORDER BY Fee DESC", "insert": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Adult' ORDER BY Fee DESC"}, {"label": ";", "insert": ";"}], "examples": [{"label": "自測題", "sql": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult'\nORDER BY Fee DESC;"}], "answer": "SELECT MemName, Fee\nFROM CLUBMEMBER\nWHERE Category = 'Adult'\nORDER BY Fee DESC;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "quiz", "group": "cert", "nav": "SQL Quiz", "title": "小測驗", "pill": "Quiz", "mode": "live", "teach": "<p>心算先再寫 SQL：</p>\n    <ul>\n      <li>Q1：邊個關鍵字排序？</li>\n      <li>Q2：去重用邊個？</li>\n      <li>Q3：分組後篩選用 WHERE 定 HAVING？</li>\n    </ul>\n    <div class=\"tip\">答案：ORDER BY；DISTINCT；HAVING。</div>", "tryNote": "實作：每個 Category 人數，只留人數 &gt; 2。", "snippets": [{"label": "GROUP BY Category HAVING COUNT(*) > 2", "insert": "GROUP BY Category HAVING COUNT(*) > 2"}, {"label": ";", "insert": ";"}], "examples": [{"label": "測驗實作", "sql": "SELECT Category, COUNT(*) AS Num\nFROM CLUBMEMBER\nGROUP BY Category\nHAVING COUNT(*) > 2;"}], "answer": "SELECT Category, COUNT(*) AS Num\nFROM CLUBMEMBER\nGROUP BY Category\nHAVING COUNT(*) > 2;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "exercises", "group": "cert", "nav": "SQL Exercises", "title": "練習題", "pill": "Exercises", "mode": "live", "teach": "<p>綜合練習（寫完再開參考）：</p>\n    <ol>\n      <li>列出 ClubName 同該會會員人數</li>\n      <li>找出未分會會員</li>\n    </ol>", "tryNote": "完成：每個學會嘅會員人數（INNER JOIN + GROUP BY）。", "snippets": [{"label": "SELECT c.ClubName, COUNT(*) AS Num\nFROM CLUB c\nINNER JOIN CLUBMEMBER m ON c.ClubID = m.ClubID\nGROUP BY c.ClubName", "insert": "SELECT c.ClubName, COUNT(*) AS Num\nFROM CLUB c\nINNER JOIN CLUBMEMBER m ON c.ClubID = m.ClubID\nGROUP BY c.ClubName"}, {"label": ";", "insert": ";"}], "examples": [{"label": "學會人數", "sql": "SELECT c.ClubName, COUNT(m.MemID) AS Num\nFROM CLUB c\nLEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID\nGROUP BY c.ClubName;"}], "answer": "SELECT c.ClubName, COUNT(m.MemID) AS Num\nFROM CLUB c\nLEFT JOIN CLUBMEMBER m ON c.ClubID = m.ClubID\nGROUP BY c.ClubName;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "datatypes", "group": "ref", "nav": "SQL Data Types", "title": "資料型別", "pill": "參考", "mode": "live", "teach": "<p>常見型別（概念）：</p>\n    <ul>\n      <li>整數：INT / INTEGER</li>\n      <li>文字：TEXT / VARCHAR</li>\n      <li>實數：REAL / DECIMAL</li>\n      <li>日期：DATE / TEXT（SQLite 常存字串）</li>\n    </ul>", "tryNote": "本課參考。", "snippets": [{"label": "SELECT typeof(Fee), typeof(MemName) FROM CLUBMEMBER LIMIT 1", "insert": "SELECT typeof(Fee), typeof(MemName) FROM CLUBMEMBER LIMIT 1"}, {"label": ";", "insert": ";"}], "examples": [{"label": "typeof", "sql": "SELECT typeof(Fee) AS FeeType, typeof(MemName) AS NameType FROM CLUBMEMBER LIMIT 1;"}], "answer": "SELECT typeof(Fee) AS FeeType, typeof(MemName) AS NameType FROM CLUBMEMBER LIMIT 1;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "keywords", "group": "ref", "nav": "SQL Keywords", "title": "關鍵字速查", "pill": "參考", "mode": "live", "teach": "<p>本教學出現過嘅重要關鍵字：SELECT FROM WHERE GROUP BY HAVING ORDER BY JOIN UNION INSERT UPDATE DELETE CREATE ALTER DROP DISTINCT AS AND OR NOT LIKE IN BETWEEN CASE NULL …</p>", "tryNote": "任意試 SELECT。", "snippets": [{"label": "SELECT * FROM CLUBMEMBER LIMIT 2", "insert": "SELECT * FROM CLUBMEMBER LIMIT 2"}, {"label": ";", "insert": ";"}], "examples": [{"label": "試表", "sql": "SELECT * FROM CLUBMEMBER LIMIT 2;"}], "answer": "SELECT * FROM CLUBMEMBER LIMIT 2;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "quickref", "group": "ref", "nav": "SQL Quick Ref", "title": "快速參考", "pill": "一頁紙", "mode": "live", "teach": "<div class=\"syntax-box\">SELECT 欄 FROM 表<br>WHERE 條件<br>GROUP BY 欄 HAVING 條件<br>ORDER BY 欄 DESC<br>LIMIT n;</div>\n    <p>JOIN：<span class=\"kw\">FROM A INNER JOIN B ON A.id = B.id</span></p>", "tryNote": "用速查寫：Senior 按 Fee 降序。", "snippets": [{"label": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Senior' ORDER BY Fee DESC", "insert": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Senior' ORDER BY Fee DESC"}, {"label": ";", "insert": ";"}], "examples": [{"label": "Senior 降序", "sql": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Senior' ORDER BY Fee DESC;"}], "answer": "SELECT MemName, Fee FROM CLUBMEMBER WHERE Category = 'Senior' ORDER BY Fee DESC;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": false}, {"id": "examples", "group": "examples", "nav": "SQL Examples", "title": "例子庫", "pill": "Examples", "mode": "live", "teach": "<p>常用句型速練（點範例插入再改）。</p>", "tryNote": "揀一個例子執行。", "snippets": [{"label": "SELECT * FROM CLUBMEMBER", "insert": "SELECT * FROM CLUBMEMBER"}, {"label": "SELECT DISTINCT Category FROM CLUBMEMBER", "insert": "SELECT DISTINCT Category FROM CLUBMEMBER"}, {"label": ";", "insert": ";"}], "examples": [{"label": "全部", "sql": "SELECT * FROM CLUBMEMBER;"}, {"label": "分組", "sql": "SELECT Category, COUNT(*) AS N FROM CLUBMEMBER GROUP BY Category;"}, {"label": "JOIN", "sql": "SELECT m.MemName, c.ClubName FROM CLUBMEMBER m INNER JOIN CLUB c ON m.ClubID = c.ClubID;"}], "answer": "SELECT Category, COUNT(*) AS N FROM CLUBMEMBER GROUP BY Category;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "editor", "group": "examples", "nav": "SQL Editor", "title": "自由練習區", "pill": "Editor", "mode": "live", "teach": "<p>冇指定題目：對住兩張表自由寫 SELECT。可用片段同範例。</p>\n    <div class=\"tip\">Ctrl/Cmd + Enter = 執行</div>", "tryNote": "自由發揮。", "snippets": [{"label": "SELECT", "insert": "SELECT "}, {"label": "FROM CLUBMEMBER", "insert": "FROM CLUBMEMBER"}, {"label": "FROM CLUB", "insert": "FROM CLUB"}, {"label": "JOIN", "insert": " JOIN "}, {"label": "WHERE", "insert": " WHERE "}, {"label": "GROUP BY", "insert": " GROUP BY "}, {"label": "ORDER BY", "insert": " ORDER BY "}, {"label": "LIMIT", "insert": " LIMIT "}, {"label": ";", "insert": ";"}], "examples": [{"label": "會員", "sql": "SELECT * FROM CLUBMEMBER;"}, {"label": "學會", "sql": "SELECT * FROM CLUB;"}], "answer": "SELECT * FROM CLUBMEMBER;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": null, "extraTables": true}, {"id": "syllabus", "group": "examples", "nav": "SQL Syllabus", "title": "課堂大綱", "pill": "Syllabus", "mode": "demo", "teach": "<ol>\n      <li>認識表同 SELECT</li>\n      <li>WHERE／邏輯／LIKE／IN／BETWEEN</li>\n      <li>ORDER BY、DISTINCT、LIMIT</li>\n      <li>聚合同 GROUP BY／HAVING</li>\n      <li>JOIN、UNION</li>\n      <li>DDL／約束／保安（Injection）概念</li>\n    </ol>", "tryNote": "大綱課。", "snippets": [{"label": "SELECT '跟大綱由 Select 學起' AS Tip", "insert": "SELECT '跟大綱由 Select 學起' AS Tip"}, {"label": ";", "insert": ";"}], "examples": [{"label": "提示", "sql": "SELECT '跟大綱由 Select 學起' AS Tip;"}], "answer": "SELECT '跟大綱由 Select 學起' AS Tip;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["Tip"], "rows": [["跟大綱由 Select 學起"]], "note": "本課示範結果"}, "extraTables": false}, {"id": "studyplan", "group": "examples", "nav": "SQL Study Plan", "title": "溫習計劃", "pill": "計劃", "mode": "demo", "teach": "<ul>\n      <li>第 1 堂：HOME→Where→Order By</li>\n      <li>第 2 堂：聚合→Group By→Having</li>\n      <li>第 3 堂：Join→Union→小測</li>\n    </ul>", "tryNote": "計劃課。", "snippets": [{"label": "SELECT '今日先完成 WHERE + ORDER BY' AS Plan", "insert": "SELECT '今日先完成 WHERE + ORDER BY' AS Plan"}, {"label": ";", "insert": ";"}], "examples": [{"label": "今日目標", "sql": "SELECT '今日先完成 WHERE + ORDER BY' AS Plan;"}], "answer": "SELECT '今日先完成 WHERE + ORDER BY' AS Plan;", "placeholder": "寫你嘅 SQL…", "challenge": null, "demoResult": {"columns": ["Plan"], "rows": [["今日先完成 WHERE + ORDER BY"]], "note": "本課示範結果"}, "extraTables": false}];

  const SEED_MEMBERS = [
    { MemID: 'M001', MemName: 'Chan Tai Man', Category: 'Adult', Fee: 300, ClubID: 'C01', JoinDate: '2023-09-01' },
    { MemID: 'M002', MemName: 'Wong Siu Ming', Category: 'Junior', Fee: 120, ClubID: 'C02', JoinDate: '2024-01-15' },
    { MemID: 'M003', MemName: 'Lam Mei Ling', Category: 'Senior', Fee: 180, ClubID: 'C01', JoinDate: '2022-11-20' },
    { MemID: 'M004', MemName: 'Cheung Ka Ho', Category: 'Adult', Fee: 300, ClubID: 'C03', JoinDate: '2023-03-08' },
    { MemID: 'M005', MemName: 'Ng Yan Wing', Category: 'Junior', Fee: 120, ClubID: null, JoinDate: '2025-02-10' },
    { MemID: 'M006', MemName: 'Ho Pui Shan', Category: 'Senior', Fee: 180, ClubID: 'C02', JoinDate: '2021-08-30' },
    { MemID: 'M007', MemName: 'Lee Chun Yin', Category: 'Adult', Fee: 350, ClubID: 'C01', JoinDate: '2024-06-01' },
    { MemID: 'M008', MemName: 'Tsang Man Yee', Category: 'Junior', Fee: 100, ClubID: null, JoinDate: '2025-09-12' },
    { MemID: 'M009', MemName: 'Yip Chi Keung', Category: 'Senior', Fee: 200, ClubID: 'C03', JoinDate: '2020-05-18' },
    { MemID: 'M010', MemName: 'Cheng Wing Sze', Category: 'Adult', Fee: 280, ClubID: 'C02', JoinDate: '2023-12-05' }
  ];
  const SEED_CLUBS = [
    { ClubID: 'C01', ClubName: 'Computer Club', Advisor: 'Mr Chan' },
    { ClubID: 'C02', ClubName: 'Drama Club', Advisor: 'Ms Wong' },
    { ClubID: 'C03', ClubName: 'Sports Club', Advisor: 'Mr Lee' },
    { ClubID: 'C04', ClubName: 'Music Club', Advisor: 'Ms Ho' }
  ];
  const MEM_COLS = ['MemID', 'MemName', 'Category', 'Fee', 'ClubID', 'JoinDate'];
  const CLUB_COLS = ['ClubID', 'ClubName', 'Advisor'];

  let db = null;
  let engine = 'fallback';
  let currentId = LESSONS[0].id;

  const GROUP_LABELS = {
    tutorial: 'SQL Tutorial',
    database: 'SQL Database',
    cert: 'SQL Cert',
    ref: 'SQL References',
    examples: 'SQL Examples'
  };
  const GROUP_ORDER = ['tutorial', 'database', 'cert', 'ref', 'examples'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderTable(container, columns, rows) {
    if (!container) return;
    if (!columns || !columns.length) {
      container.innerHTML = '<p class="sample-note">（無結果）</p>';
      return;
    }
    let html = '<table class="data"><thead><tr>';
    columns.forEach(c => { html += '<th>' + esc(c) + '</th>'; });
    html += '</tr></thead><tbody>';
    if (!rows.length) {
      html += '<tr><td colspan="' + columns.length + '" style="color:#94a3b8">0 列</td></tr>';
    } else {
      rows.forEach(r => {
        html += '<tr>';
        columns.forEach((c, i) => {
          const v = Array.isArray(r) ? r[i] : r[c];
          html += '<td>' + esc(v == null ? 'NULL' : v) + '</td>';
        });
        html += '</tr>';
      });
    }
    html += '</tbody></table>';
    container.innerHTML = html;
  }

  function setStatus(el, msg, kind) {
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'status ' + (kind || 'info');
  }

  /* ---------- fallback engine (enhanced) ---------- */
  function stripComments(sql) {
    return sql.replace(/--[^\n]*/g, ' ').replace(/\/\*[\s\S]*?\*\//g, ' ');
  }

  function tokenizeStrings(sql) {
    const strings = [];
    const text = sql.replace(/'([^']|'')*'/g, m => {
      strings.push(m.slice(1, -1).replace(/''/g, "'"));
      return '__STR' + (strings.length - 1) + '__';
    });
    return { text, strings };
  }

  function restoreStr(token, strings) {
    const m = /^__STR(\d+)__$/.exec(token);
    return m ? strings[+m[1]] : token;
  }

  function splitArgs(s) {
    const out = []; let cur = ''; let depth = 0;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (ch === '(') depth++;
      if (ch === ')') depth--;
      if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; }
      else cur += ch;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  function normalizeIdent(s) {
    return s.trim().replace(/^["`\[\]]+|["\`\]]+$/g, '');
  }

  function likeMatch(val, pattern) {
    if (val == null) return false;
    let p = String(pattern);
    // escape regex special except % _
    let re = '';
    for (let i = 0; i < p.length; i++) {
      const ch = p[i];
      if (ch === '%') re += '.*';
      else if (ch === '_') re += '.';
      else re += ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    return new RegExp('^' + re + '$', 'i').test(String(val));
  }

  function getTableRows(name) {
    const u = name.toUpperCase();
    if (u === 'CLUBMEMBER') return SEED_MEMBERS.map(r => Object.assign({}, r));
    if (u === 'CLUB') return SEED_CLUBS.map(r => Object.assign({}, r));
    throw new Error('未知表：' + name + '（可用 CLUBMEMBER / CLUB）');
  }

  function getTableCols(name) {
    const u = name.toUpperCase();
    if (u === 'CLUBMEMBER') return MEM_COLS.slice();
    if (u === 'CLUB') return CLUB_COLS.slice();
    throw new Error('未知表：' + name);
  }

  function parseSelectItem(item) {
    let expr = item, alias = null;
    const asMatch = item.match(/^([\s\S]+?)\s+AS\s+([A-Za-z_][A-Za-z0-9_]*)$/i);
    if (asMatch) { expr = asMatch[1].trim(); alias = asMatch[2]; }
    else {
      const sp = item.match(/^(.+?)\s+([A-Za-z_][A-Za-z0-9_]*)$/);
      if (sp) {
        const left = sp[1].trim();
        const right = sp[2];
        if (!/^(ASC|DESC|AND|OR)$/i.test(right)) {
          if (/^(COUNT|SUM|AVG|MAX|MIN|IFNULL|TYPEOF)\s*\(/i.test(left) || /^[A-Za-z_][A-Za-z0-9_.]*$/.test(left)) {
            expr = left; alias = right;
          }
        }
      }
    }
    const ifnull = expr.match(/^IFNULL\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*(.+)\s*\)$/i);
    if (ifnull) {
      return { type: 'ifnull', col: ifnull[1], fallback: ifnull[2].trim(), alias: alias || 'IFNULL' };
    }
    const agg = expr.match(/^(COUNT|SUM|AVG|MAX|MIN)\s*\(\s*(\*|([A-Za-z_][A-Za-z0-9_]*))\s*\)$/i);
    if (agg) {
      return { type: 'agg', fn: agg[1].toUpperCase(), arg: agg[2] === '*' ? '*' : normalizeIdent(agg[3] || agg[2]), alias: alias || agg[1].toUpperCase() };
    }
    // table.col or col
    const id = expr.trim();
    if (/^[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)?$/.test(id)) {
      const name = id.includes('.') ? id.split('.')[1] : id;
      return { type: 'col', name: name, raw: id, alias: alias || name };
    }
    if (id === '*') return { type: 'star' };
    throw new Error('唔支援嘅 SELECT 表達式：' + item);
  }

  function parseConditionList(body, strings) {
    // Split AND/OR at top level, but keep BETWEEN x AND y intact
    const chunks = [];
    let i = 0;
    let cur = '';
    const upper = body.toUpperCase();
    while (i < body.length) {
      // detect AND/OR as whole words
      const rest = body.slice(i);
      const mAnd = /^\s+AND\s+/i.exec(rest);
      const mOr = /^\s+OR\s+/i.exec(rest);
      if (mAnd) {
        // if current unfinished cond has BETWEEN without second bound, keep AND
        if (/\bBETWEEN\b/i.test(cur) && !/\bBETWEEN\b[\s\S]+\bAND\b/i.test(cur)) {
          cur += mAnd[0];
          i += mAnd[0].length;
          continue;
        }
        chunks.push({ type: 'cond', text: cur.trim() });
        chunks.push({ type: 'op', text: 'AND' });
        cur = '';
        i += mAnd[0].length;
        continue;
      }
      if (mOr) {
        chunks.push({ type: 'cond', text: cur.trim() });
        chunks.push({ type: 'op', text: 'OR' });
        cur = '';
        i += mOr[0].length;
        continue;
      }
      cur += body[i];
      i++;
    }
    if (cur.trim()) chunks.push({ type: 'cond', text: cur.trim() });

    function one(text) {
      let t = text.trim();
      let neg = false;
      if (/^NOT\s+/i.test(t)) { neg = true; t = t.replace(/^NOT\s+/i, ''); }

      let mm = t.match(/^([A-Za-z_][A-Za-z0-9_.]*)\s+IS\s+(NOT\s+)?NULL$/i);
      if (mm) {
        const col = mm[1].includes('.') ? mm[1].split('.')[1] : mm[1];
        return { kind: 'null', col, not: !!mm[2], neg };
      }
      mm = t.match(/^([A-Za-z_][A-Za-z0-9_.]*)\s+LIKE\s+(.+)$/i);
      if (mm) {
        const col = mm[1].includes('.') ? mm[1].split('.')[1] : mm[1];
        let raw = mm[2].trim();
        let value = /^__STR\d+__$/.test(raw) ? restoreStr(raw, strings) : raw.replace(/^'|'$/g, '');
        return { kind: 'like', col, value, neg };
      }
      mm = t.match(/^([A-Za-z_][A-Za-z0-9_.]*)\s+IN\s*\((.+)\)$/i);
      if (mm) {
        const col = mm[1].includes('.') ? mm[1].split('.')[1] : mm[1];
        const vals = splitArgs(mm[2]).map(v => {
          v = v.trim();
          if (/^__STR\d+__$/.test(v)) return restoreStr(v, strings);
          if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
          if (/^'.*'$/.test(v)) return v.slice(1, -1);
          return restoreStr(v, strings);
        });
        return { kind: 'in', col, vals, neg };
      }
      mm = t.match(/^([A-Za-z_][A-Za-z0-9_.]*)\s+BETWEEN\s+(.+?)\s+AND\s+(.+)$/i);
      if (mm) {
        const col = mm[1].includes('.') ? mm[1].split('.')[1] : mm[1];
        const parseV = (raw) => {
          raw = raw.trim();
          if (/^__STR\d+__$/.test(raw)) return restoreStr(raw, strings);
          if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
          return raw.replace(/^'|'$/g, '');
        };
        return { kind: 'between', col, a: parseV(mm[2]), b: parseV(mm[3]), neg };
      }
      mm = t.match(/^([A-Za-z_][A-Za-z0-9_.]*)\s*(=|<>|!=|>=|<=|>|<)\s*(.+)$/);
      if (!mm) throw new Error('無法解析條件：' + text);
      const col = mm[1].includes('.') ? mm[1].split('.')[1] : mm[1];
      let rawVal = mm[3].trim();
      let value;
      if (/^__STR\d+__$/.test(rawVal)) value = restoreStr(rawVal, strings);
      else if (/^NULL$/i.test(rawVal)) value = null;
      else if (/^-?\d+(\.\d+)?$/.test(rawVal)) value = Number(rawVal);
      else if (/^'.*'$/.test(rawVal)) value = rawVal.slice(1, -1).replace(/''/g, "'");
      else if (/^\([\s\S]*\)$/.test(rawVal) || /^SELECT\b/i.test(rawVal)) {
        throw new Error('內建引擎對複雜子查詢支援有限；請用 sql.js（有網絡）或簡化條件。');
      } else throw new Error('文字值請加單引號。問題：' + text);
      return { kind: 'cmp', col, op: mm[2] === '!=' ? '<>' : mm[2], value, neg };
    }

    return chunks.map(c => c.type === 'op' ? c : { type: 'cond', ...one(c.text) });
  }

  function evalCondPart(row, part) {
    let ok = false;
    const actual = row[part.col];
    switch (part.kind) {
      case 'null': ok = part.not ? actual != null : actual == null; break;
      case 'like': ok = likeMatch(actual, part.value); break;
      case 'in': ok = part.vals.some(v => actual == v); break;
      case 'between': {
        const n = actual;
        ok = n >= part.a && n <= part.b;
        break;
      }
      case 'cmp': {
        const v = part.value;
        switch (part.op) {
          case '=': ok = actual == v; break;
          case '<>': ok = actual != v; break;
          case '>': ok = Number(actual) > Number(v); break;
          case '<': ok = Number(actual) < Number(v); break;
          case '>=': ok = Number(actual) >= Number(v); break;
          case '<=': ok = Number(actual) <= Number(v); break;
        }
        break;
      }
    }
    return part.neg ? !ok : ok;
  }

  function evalWhere(row, where) {
    if (!where) return true;
    let result = null; let pending = null;
    for (const part of where) {
      if (part.type === 'op') { pending = part.text; continue; }
      const ok = evalCondPart(row, part);
      if (result === null) result = ok;
      else if (pending === 'AND') result = result && ok;
      else if (pending === 'OR') result = result || ok;
      pending = null;
    }
    return !!result;
  }

  function aggCompute(fn, arg, list) {
    if (fn === 'COUNT') {
      if (arg === '*') return list.length;
      return list.filter(r => r[arg] != null).length;
    }
    const nums = list.map(r => Number(r[arg])).filter(n => !isNaN(n));
    if (fn === 'SUM') return nums.reduce((a, b) => a + b, 0);
    if (fn === 'AVG') return nums.length ? Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) / 100 : null;
    if (fn === 'MAX') return nums.length ? Math.max(...nums) : null;
    if (fn === 'MIN') return nums.length ? Math.min(...nums) : null;
    throw new Error('未知聚合：' + fn);
  }

  function sortRows(rows, columns, order) {
    const idxs = order.map(o => {
      let i = columns.findIndex(c => c.toLowerCase() === o.col.toLowerCase());
      if (i < 0) throw new Error('ORDER BY 欄唔喺結果：' + o.col);
      return { i, dir: o.dir };
    });
    return rows.slice().sort((a, b) => {
      for (const { i, dir } of idxs) {
        let av = a[i], bv = b[i];
        if (typeof av === 'string') av = av.toLowerCase();
        if (typeof bv === 'string') bv = bv.toLowerCase();
        let cmp = av < bv ? -1 : av > bv ? 1 : 0;
        if (cmp) return dir === 'DESC' ? -cmp : cmp;
      }
      return 0;
    });
  }

  function parseOrder(body) {
    return splitArgs(body).map(item => {
      const mm = item.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(ASC|DESC)?$/i);
      if (!mm) throw new Error('無法解析 ORDER BY：' + item);
      return { col: mm[1], dir: (mm[2] || 'ASC').toUpperCase() };
    });
  }

  function runFallback(sql) {
    let s = stripComments(sql).trim();
    if (s.endsWith(';')) s = s.slice(0, -1).trim();

    // UNION / UNION ALL
    const unionParts = s.split(/\bUNION\s+ALL\b|\bUNION\b/i);
    const unionAll = /\bUNION\s+ALL\b/i.test(s);
    if (unionParts.length > 1 && !/\bJOIN\b/i.test(s)) {
      const results = unionParts.map(p => runFallback(p.trim()));
      const columns = results[0].columns;
      let rows = [];
      results.forEach(r => { rows = rows.concat(r.rows); });
      if (!unionAll) {
        const seen = new Set();
        rows = rows.filter(r => {
          const k = JSON.stringify(r);
          if (seen.has(k)) return false;
          seen.add(k); return true;
        });
      }
      return { columns, rows };
    }

    if (/\bJOIN\b/i.test(s)) {
      throw new Error('內建引擎暫未支援 JOIN；請連網用 sql.js，或開「睇參考」睇示範。');
    }
    if (/\bCASE\b/i.test(s)) {
      throw new Error('內建引擎暫未支援 CASE；請連網用 sql.js。');
    }
    if (/\bEXISTS\b|\(\s*SELECT\b/i.test(s)) {
      throw new Error('內建引擎對子查詢支援有限；請連網用 sql.js。');
    }

    const { text, strings } = tokenizeStrings(s);
    if (!/^\s*SELECT\s+/i.test(text)) {
      throw new Error('內建引擎只執行 SELECT。DDL/DML 請睇「本課示範結果」。');
    }

    // DISTINCT?
    let selectBody, fromBody, whereBody, groupBody, havingBody, orderBody, limitBody;
    const clauseRe = /\b(SELECT|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|LIMIT)\b/gi;
    const idxs = []; let m;
    while ((m = clauseRe.exec(text)) !== null) {
      idxs.push({ kw: m[1].toUpperCase().replace(/\s+/g, ' '), start: m.index, end: m.index + m[0].length });
    }
    if (!idxs.length || idxs[0].kw !== 'SELECT') throw new Error('找不到 SELECT。');
    const parts = [];
    for (let i = 0; i < idxs.length; i++) {
      const end = i + 1 < idxs.length ? idxs[i + 1].start : text.length;
      parts.push({ kw: idxs[i].kw, body: text.slice(idxs[i].end, end).trim() });
    }
    const get = kw => { const p = parts.find(x => x.kw === kw); return p ? p.body : null; };
    selectBody = get('SELECT');
    fromBody = get('FROM');
    whereBody = get('WHERE');
    groupBody = get('GROUP BY');
    havingBody = get('HAVING');
    orderBody = get('ORDER BY');
    limitBody = get('LIMIT');

    if (!fromBody) throw new Error('缺少 FROM。');
    let distinct = false;
    if (/^DISTINCT\s+/i.test(selectBody)) {
      distinct = true;
      selectBody = selectBody.replace(/^DISTINCT\s+/i, '');
    }

    const tableTok = fromBody.split(/\s+/)[0].replace(/["`]/g, '');
    const aliasMatch = fromBody.match(/^[A-Za-z_][A-Za-z0-9_]*\s+([A-Za-z_][A-Za-z0-9_]*)$/);
    // ignore simple alias for single-table
    const tableName = tableTok;
    let rows = getTableRows(tableName);
    const COLS = getTableCols(tableName);

    const where = whereBody ? parseConditionList(whereBody, strings) : null;
    if (where) rows = rows.filter(r => evalWhere(r, where));

    let selectAll = selectBody.trim() === '*';
    let selectItems = [];
    if (!selectAll) {
      selectItems = splitArgs(selectBody).map(parseSelectItem);
      if (selectItems.some(it => it.type === 'star')) selectAll = true;
    }

    let columns, outRows;

    if (groupBody) {
      const groupCols = splitArgs(groupBody).map(c => normalizeIdent(c.includes('.') ? c.split('.')[1] : c));
      const groups = new Map();
      rows.forEach(r => {
        const key = groupCols.map(c => r[c]).join('\x1e');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(r);
      });
      if (selectAll) throw new Error('GROUP BY 時唔好用 SELECT *');
      columns = selectItems.map(it => it.alias);
      outRows = [];
      groups.forEach(list => {
        const arr = selectItems.map(it => {
          if (it.type === 'col') {
            if (!groupCols.includes(it.name)) throw new Error('欄 ' + it.name + ' 要喺 GROUP BY 或用聚合');
            return list[0][it.name];
          }
          if (it.type === 'agg') return aggCompute(it.fn, it.arg, list);
          if (it.type === 'ifnull') {
            const v = list[0][it.col];
            if (v != null) return v;
            const fb = it.fallback;
            if (/^__STR\d+__$/.test(fb)) return restoreStr(fb, strings);
            return fb.replace(/^'|'$/g, '');
          }
          throw new Error('唔支援');
        });
        outRows.push({ arr, list });
      });

      if (havingBody) {
        // support HAVING COUNT(*) >= n  or HAVING COUNT(*) > n
        const hm = havingBody.match(/^(COUNT\s*\(\s*\*\s*\))\s*(>=|>|<=|<|=)\s*(\d+)$/i);
        if (!hm) throw new Error('內建引擎 HAVING 只支援 COUNT(*) 比較數字');
        const op = hm[2]; const n = +hm[3];
        outRows = outRows.filter(o => {
          const cnt = o.list.length;
          if (op === '>=') return cnt >= n;
          if (op === '>') return cnt > n;
          if (op === '<=') return cnt <= n;
          if (op === '<') return cnt < n;
          return cnt === n;
        });
      }
      outRows = outRows.map(o => o.arr);
    } else {
      if (havingBody) throw new Error('HAVING 需要 GROUP BY');
      if (selectAll) {
        columns = COLS.slice();
        outRows = rows.map(r => COLS.map(c => r[c]));
      } else {
        const hasAgg = selectItems.some(it => it.type === 'agg');
        const hasCol = selectItems.some(it => it.type === 'col' || it.type === 'ifnull');
        if (hasAgg && hasCol) throw new Error('有聚合時請加 GROUP BY（或只選聚合）');
        if (hasAgg) {
          columns = selectItems.map(it => it.alias);
          outRows = [selectItems.map(it => aggCompute(it.fn, it.arg, rows))];
        } else {
          columns = selectItems.map(it => it.alias);
          outRows = rows.map(r => selectItems.map(it => {
            if (it.type === 'ifnull') {
              const v = r[it.col];
              if (v != null) return v;
              const fb = it.fallback;
              if (/^__STR\d+__$/.test(fb)) return restoreStr(fb, strings);
              return String(fb).replace(/^'|'$/g, '');
            }
            if (!(it.name in r) && !COLS.includes(it.name)) throw new Error('欄唔存在：' + it.name);
            return r[it.name];
          }));
        }
      }
    }

    if (distinct) {
      const seen = new Set();
      outRows = outRows.filter(r => {
        const k = JSON.stringify(r);
        if (seen.has(k)) return false;
        seen.add(k); return true;
      });
    }

    if (orderBody) {
      outRows = sortRows(outRows, columns, parseOrder(orderBody));
    }
    if (limitBody) {
      const n = parseInt(limitBody.trim(), 10);
      if (!isNaN(n)) outRows = outRows.slice(0, n);
    }
    return { columns, rows: outRows };
  }

  /* ---------- sql.js ---------- */
  async function initSqlJsEngine() {
    try {
      if (typeof initSqlJs !== 'function') return false;
      const SQL = await initSqlJs({
        locateFile: file => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/' + file
      });
      db = new SQL.Database();
      db.run(`CREATE TABLE CLUB (
        ClubID TEXT PRIMARY KEY,
        ClubName TEXT,
        Advisor TEXT
      );`);
      db.run(`CREATE TABLE CLUBMEMBER (
        MemID TEXT PRIMARY KEY,
        MemName TEXT,
        Category TEXT,
        Fee INTEGER,
        ClubID TEXT,
        JoinDate TEXT
      );`);
      SEED_CLUBS.forEach(r => {
        db.run('INSERT INTO CLUB VALUES (?, ?, ?)', [r.ClubID, r.ClubName, r.Advisor]);
      });
      SEED_MEMBERS.forEach(r => {
        db.run('INSERT INTO CLUBMEMBER VALUES (?, ?, ?, ?, ?, ?)',
          [r.MemID, r.MemName, r.Category, r.Fee, r.ClubID, r.JoinDate]);
      });
      engine = 'sqljs';
      return true;
    } catch (e) {
      console.warn(e);
      return false;
    }
  }

  function runSqlJs(sql) {
    const res = db.exec(sql);
    if (!res.length) {
      // DML with no result set
      return { columns: ['訊息'], rows: [['已執行（無結果集）']] };
    }
    return { columns: res[0].columns, rows: res[0].values };
  }

  function isMutating(sql) {
    const t = stripComments(sql).trim();
    return /^(INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|REPLACE)\b/i.test(t);
  }

  function runQuery(sql, lesson) {
    const trimmed = (sql || '').trim();
    if (!trimmed) throw new Error('請先輸入 SQL。');

    if (lesson && lesson.mode === 'demo' && lesson.demoResult && isMutating(trimmed)) {
      return { ...lesson.demoResult, demo: true };
    }
    if (lesson && lesson.mode === 'demo' && lesson.demoResult && !/^\s*SELECT\b/i.test(trimmed)) {
      return { ...lesson.demoResult, demo: true };
    }

    if (engine === 'sqljs' && db) {
      try {
        // For mutating in live lessons, still block permanent damage by wrapping?
        if (isMutating(trimmed) && lesson && lesson.mode === 'demo') {
          return { ...lesson.demoResult, demo: true };
        }
        if (isMutating(trimmed)) {
          throw new Error('練習區唔執行會改資料嘅語句；DDL/DML 請睇示範課「本課示範結果」。');
        }
        return runSqlJs(trimmed);
      } catch (e) {
        try { return runFallback(trimmed); }
        catch (e2) { throw new Error(e.message || String(e)); }
      }
    }
    if (isMutating(trimmed)) {
      if (lesson && lesson.demoResult) return { ...lesson.demoResult, demo: true };
      throw new Error('內建引擎唔執行 DDL/DML；請睇本課示範。');
    }
    return runFallback(trimmed);
  }

  /* ---------- UI ---------- */
  function buildNav() {
    const nav = document.getElementById('navSteps');
    let html = '<div class="legend"><span style="color:#34d399">●</span> 即時執行 &nbsp; <span style="color:#fbbf24">●</span> 示範結果</div>';
    let last = null;
    LESSONS.forEach(L => {
      if (L.group !== last) {
        html += '<div class="side-title">' + esc(GROUP_LABELS[L.group] || L.group) + '</div>';
        last = L.group;
      }
      html += '<button type="button" data-id="' + esc(L.id) + '">' +
        esc(L.nav) + '<span class="mode-dot ' + L.mode + '"></span></button>';
    });
    nav.innerHTML = html;
  }

  function highlightSql(sql) {
    return esc(sql)
      .replace(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|JOIN|INNER|LEFT|RIGHT|FULL|OUTER|ON|UNION|ALL|AND|OR|NOT|AS|DISTINCT|LIKE|IN|BETWEEN|CASE|WHEN|THEN|ELSE|END|NULL|IS|EXISTS|DEFAULT|PRIMARY|KEY|FOREIGN|REFERENCES|INDEX|VIEW|DISTINCT)\b/gi,
        '<span style="color:#6ee7b7;font-weight:600">$1</span>');
  }

  function renderLesson(id) {
    const L = LESSONS.find(x => x.id === id) || LESSONS[0];
    currentId = L.id;
    document.querySelectorAll('#navSteps button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-id') === L.id);
    });
    const root = document.getElementById('lessonRoot');
    const pillClass = L.mode === 'demo' ? 'pill demo' : 'pill';
    const pillText = L.mode === 'demo' ? (L.pill + ' · 示範') : L.pill;

    let snipHtml = '';
    if (L.snippets && L.snippets.length) {
      snipHtml += '<p class="panel-label">常用片段（點一下插入）</p><div class="btn-row">';
      L.snippets.forEach(s => {
        snipHtml += '<button type="button" class="snip" data-insert="' + esc(s.insert) + '">' + esc(s.label) + '</button>';
      });
      snipHtml += '</div>';
    }
    if (L.examples && L.examples.length) {
      snipHtml += '<p class="sub-label">範例句（插入，可再改）</p><div class="btn-row">';
      L.examples.forEach(ex => {
        snipHtml += '<button type="button" class="snip ex" data-insert="' + esc(ex.sql) + '">' + esc(ex.label) + '</button>';
      });
      snipHtml += '</div>';
    }

    root.innerHTML =
      '<div class="card teach">' +
        '<h2>' + esc(L.title) + ' <span class="' + pillClass + '">' + esc(pillText) + '</span></h2>' +
        L.teach +
      '</div>' +
      '<div class="tryit">' +
        '<h3>Try it' + (L.mode === 'demo' ? ' · 示範模式' : '') + '</h3>' +
        '<p class="try-note">' + esc(L.tryNote) + '</p>' +
        '<div class="snippet-panel" data-target="sql-input">' + snipHtml + '</div>' +
        '<label for="sql-input"><strong>自己寫 SQL：</strong></label>' +
        '<textarea class="sql-input" id="sql-input" spellcheck="false" placeholder="' + esc(L.placeholder) + '"></textarea>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="btnRun">執行</button>' +
          '<button type="button" class="btn btn-ghost" id="btnClear">清空</button>' +
        '</div>' +
        '<div class="status info" id="status"></div>' +
        '<div class="table-wrap"><div id="result"></div></div>' +
        '<details class="ref-box">' +
          '<summary>睇參考（答完先開）</summary>' +
          '<p class="ref-note">參考答案只供核對。載入會覆寫編輯區。</p>' +
          '<pre class="sql">' + highlightSql(L.answer || '') + '</pre>' +
          '<div class="btn-row"><button type="button" class="btn btn-ghost" id="btnLoad">載入到編輯區</button></div>' +
        '</details>' +
      '</div>';

    // sample tables on home
    const sh = document.getElementById('sampleTableHome');
    if (sh) renderTable(sh, MEM_COLS, SEED_MEMBERS.map(r => MEM_COLS.map(c => r[c])));
    const sc = document.getElementById('sampleTableClub');
    if (sc) renderTable(sc, CLUB_COLS, SEED_CLUBS.map(r => CLUB_COLS.map(c => r[c])));

    document.getElementById('btnRun').onclick = doRun;
    document.getElementById('btnClear').onclick = function () {
      document.getElementById('sql-input').value = '';
      setStatus(document.getElementById('status'), '', 'info');
      document.getElementById('result').innerHTML = '';
    };
    document.getElementById('btnLoad').onclick = function () {
      const ta = document.getElementById('sql-input');
      ta.value = L.answer || '';
      ta.focus();
    };

    const ws = document.querySelector('.workspace');
    if (ws) ws.scrollTop = 0;
    document.getElementById('navSteps').classList.remove('open');
  }

  function insertAtCursor(ta, text) {
    if (!ta) return;
    const start = ta.selectionStart != null ? ta.selectionStart : ta.value.length;
    const end = ta.selectionEnd != null ? ta.selectionEnd : ta.value.length;
    ta.value = ta.value.slice(0, start) + text + ta.value.slice(end);
    const pos = start + text.length;
    ta.focus();
    try { ta.setSelectionRange(pos, pos); } catch (e) {}
    ta.classList.add('insert-flash');
    setTimeout(() => ta.classList.remove('insert-flash'), 350);
  }

  function doRun() {
    const L = LESSONS.find(x => x.id === currentId);
    const sql = document.getElementById('sql-input').value;
    const status = document.getElementById('status');
    const result = document.getElementById('result');
    try {
      // If demo lesson and empty-ish matching answer intent: allow showing demo
      let out;
      if (L.mode === 'demo' && L.demoResult && (!sql.trim() || isMutating(sql) || !/^\s*SELECT\b/i.test(sql))) {
        out = { ...L.demoResult, demo: true };
      } else {
        out = runQuery(sql, L);
      }
      // CASE / complex: if fallback failed message, try demo for demo lessons
      renderTable(result, out.columns, out.rows);
      if (out.demo || out.note) {
        setStatus(status, (out.note || '本課示範結果') + ' · ' + (out.rows ? out.rows.length : 0) + ' 列', 'info');
      } else {
        setStatus(status, '成功 · ' + out.rows.length + ' 列' + (engine === 'sqljs' ? '（sql.js）' : '（內建引擎）'), 'ok');
      }
    } catch (err) {
      if (L.mode === 'demo' && L.demoResult) {
        renderTable(result, L.demoResult.columns, L.demoResult.rows);
        setStatus(status, (L.demoResult.note || '本課示範結果') + '（無法即時執行時顯示）', 'info');
      } else {
        result.innerHTML = '';
        setStatus(status, '錯誤：' + (err.message || err), 'err');
      }
    }
  }

  document.getElementById('navSteps').addEventListener('click', e => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    renderLesson(btn.getAttribute('data-id'));
  });

  document.body.addEventListener('click', e => {
    const ins = e.target.closest('[data-insert]');
    if (!ins) return;
    insertAtCursor(document.getElementById('sql-input'), ins.getAttribute('data-insert'));
  });

  document.body.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (e.target.id === 'sql-input') { e.preventDefault(); doRun(); }
    }
  });

  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('navSteps').classList.toggle('open');
  });

  function updateEngineBar(ok, detail) {
    document.getElementById('engineDot').className = 'dot ' + (ok ? 'on' : 'off');
    document.getElementById('engineMsg').textContent = detail;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('load fail'));
      document.head.appendChild(s);
    });
  }

  buildNav();
  renderLesson(LESSONS[0].id);

  (async function boot() {
    updateEngineBar(false, '正在載入 sql.js… 內建引擎已可用（單表 SELECT）');
    engine = 'fallback';
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js');
      const ok = await initSqlJsEngine();
      if (ok) updateEngineBar(true, 'SQL 引擎：sql.js（SQLite）· JOIN／CASE／子查詢可用 · 共 ' + LESSONS.length + ' 課');
      else updateEngineBar(true, 'SQL 引擎：內建 · 共 ' + LESSONS.length + ' 課');
    } catch (e) {
      updateEngineBar(true, 'SQL 引擎：內建（離線）· 共 ' + LESSONS.length + ' 課');
    }
  })();
})();
