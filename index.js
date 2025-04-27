const boards = ['b', 'po', 'tech', 'v'];


//node
// 1. Import Express
const express = require('express');
const app = express();


// 2. Set the port
const PORT = 3000;

// 3. Serve static files (like images, CSS, HTML) from "public" folder
app.use(express.static('public'));

// 4. Main page route
app.get('/', (req, res) => {
  res.send('Welcome to your Image Board!');
});

// 5. Example route for a board (like /b or /po)
app.get('/:board', (req, res) => {
  const boardName = req.params.board;

  if (boards.includes(boardName)) {
    res.sendFile(__dirname + '/public/board.html');
  } else {
    res.status(404).send('Board not found');
  }
});

// 6. Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
