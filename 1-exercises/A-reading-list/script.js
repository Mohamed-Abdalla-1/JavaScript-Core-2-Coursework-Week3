function readingList(books) {
  // Write your code here...
  const list = document.querySelector("#reading-list");

  books.forEach((book) => {
    const listElement = document.createElement("li");
    const paragraph = document.createElement("p");
    paragraph.innerText = book.title + " by " + book.author;
    list.appendChild(listElement);
    listElement.appendChild(paragraph);

    const image = document.createElement("img")
    image.src = book.bookCoverImage
    listElement.appendChild(image);

    return book.alreadyRead
      ? (listElement.style.backgroundColor = "green")
      : (listElement.style.backgroundColor = "red");


    // const image = document.createElement("img")
    // image.
  });
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
