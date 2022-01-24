## toods

### fixing

#### Q:切換頁面

#### 狀況描述：

1. 點擊不同頁面 link 時，要進行渲染(根據不同情境篩選渲染內容)

#### 作法：

切分成三個 components，分別在內部呼叫 local 值，並且透過 props 傳給 todo

---

### todo

1. 完成取消點擊（作出對應值）
2. adding judgment to decide add icon(calendar,comment).
3. 調整代辦事項的優先度

### finished

1. done,click star's effect
   - toggle css name
   - store to local
2. 個別表單內容的更新
   - 取消按鈕
   - 儲存新內容的按鈕
3. 渲染表單的功能
   - 將新增內容同步存入本地（為了重整畫面內容時）
4. switch pages's feature

   - 點擊頁面時，透過 dynamic component 達到分頁功能

   *
