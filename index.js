let books = [];

fetch("books.json")
  .then((res) => res.json())
  .then((books) => {
    const limitedBooks = books.slice(0, 6); // Display first 6 books
    const bookList = document.getElementById("bookList");

    bookList.innerHTML = limitedBooks
      .map(
        (book) => `
            <li class="mb-4 px-5 pb-2 pt-1 bg-white shadow rounded-lg">
              <h3 class="text-lg font-semibold text-gray-800">${book.title}</h3>
              <p class="text-gray-600">Author: ${book.author}</p>
              <p class="text-gray-600">Genre: ${book.genre}</p>
              <p class="text-sm ${book.available ? "text-green-600" : "text-red-600"
          }">${book.available ? "Available" : "Not Available"}</p>
            </li>
          `
      )
      .join("");
  });


function showRecommendation() {
  const list = document.getElementById('bookList');
  const availableBooks = books.filter(book => book.available);
  const random = availableBooks[Math.floor(Math.random() * availableBooks.length)];
  alert(`📚 Try reading "${random.title}" by ${random.author} - Available at Section: ${random.section}, Shelf: ${random.shelf}, Row: ${random.row}`);
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('chatInput').value.trim().toLowerCase();
    const found = books.find(book => book.title.toLowerCase() === input);

    if (found) {
      alert(`📖 "${found.title}" is located at Section: ${found.section}, Shelf: ${found.shelf}, Row: ${found.row}. Status: ${found.available ? 'Available ✅' : 'Unavailable ❌'}`);
    } else {
      alert("Sorry, I couldn't find that book.");
    }

    document.getElementById('chatInput').value = '';
  }
}
