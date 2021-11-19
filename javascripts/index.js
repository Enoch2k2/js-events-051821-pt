const books = [];

/** NODE GETTERS **/
const getForm = () => document.getElementById('form');
const getTitle = () => document.getElementById('title');
const getAuthor = () => document.getElementById('author');
const getMain = () => document.getElementById('main')

/** Templates **/

const bookTemplate = book => {
  // <div>
  //     <h3>Book Title</h3>
  //     <p>Author: Author Name</p>
  //     <button>Click Me To Turn Text Blue</button>
  //   </div>

  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const button = document.createElement('button');

  h3.innerText = book.title;
  p.innerText = `Author: ${ book.author }`;
  button.innerText = "Click Me To Turn Text Blue";

  button.addEventListener('click', changeToBlue);

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);

  getMain().appendChild(div);
}

/** EventListeners **/
// const attachEventToButton = () => {
//   getButton().addEventListener('click', changeToBlue);
// }

const attachSubmitToForm = () => {
  getForm().addEventListener('submit', createBook);
}

/** Event Handlers **/
const changeToBlue = (event) => {
  event.target.style.backgroundColor = 'blue'
  event.target.style.color = 'white'
}

const createBook = (event) => {
  event.preventDefault();
  const bookObj = {
    title: getTitle().value,
    author: getAuthor().value
  }
  books.push(bookObj)

  getTitle().value = ""
  getAuthor().value = ""

  bookTemplate(bookObj);
}

/** Events **/

document.addEventListener('DOMContentLoaded', () => {
  // attach events to nodes
  // attachEventToButton();
  attachSubmitToForm()
})