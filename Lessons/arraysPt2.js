console.log('java is running');

// Assign an empty array to a variable named books
const books = [];

// Add 'The Shining' to the books array
books.push('The Shining');

// Add 'Moby Dick' to the front of books
books.unshift('Moby Dick');

// Console.log the second element of books
console.log('2nd element', books);

// Update the second element by assigning to it 'Dune'
books[1] = 'Dune';

// Insert 'Great Expectations' as a new second element (between 'Moby Dick' & 'Dune')
books.splice(1, 0, 'Great Expectations');

// Iterate over the entire books array and console.log each book string
console.log('all books');
books.forEach(book => {
    console.log(book);
});