document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // 1. 切換按鈕的 active 狀態樣式
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. 獲取目前點選的分類標籤
      const filterValue = button.getAttribute('data-filter');

      // 3. 卡片動態顯示與淡出切換
      cards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
});