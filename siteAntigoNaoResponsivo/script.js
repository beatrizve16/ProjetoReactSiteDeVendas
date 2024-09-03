document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-bar input');
    const books = document.querySelectorAll('.book-container');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        
        books.forEach(function (book) {
            const title = book.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
});

