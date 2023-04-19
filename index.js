
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // add async before function for below to work. 
  // I like the below bettter buuut wont pass the test
  // const url = "https://anapioficeandfire.com/api/books"
  // const respone = await fetch(url)
  // const books = await respone.json()  
  // return renderBooks(books)
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
