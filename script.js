// Lấy tất cả các radio button
const filters = document.querySelectorAll('input[name="continent"]');

// Lấy tất cả các thẻ location-card
const cards = document.querySelectorAll('.location-card');

// Thêm sự kiện lắng nghe cho mỗi radio button
filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const selected = filter.id;

        cards.forEach(card => {
            // Nếu chọn 'all', hiển thị tất cả các ảnh
            if (selected === 'all' || card.classList.contains(selected)) {
                card.style.display = 'block'; // Hiện ảnh
            } else {
                card.style.display = 'none'; // Ẩn ảnh
            }
        });
    });
});
