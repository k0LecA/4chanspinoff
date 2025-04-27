// Get query param
const params = new URLSearchParams(window.location.search);
const boardName = params.get("name");

fetch('data/boards.json')
  .then(res => res.json())
  .then(boards => {
    const board = boards.find(b => b.name === boardName);
    if (!board) {
      document.getElementById("board-title").textContent = "Board Not Found";
      return;
    }

    document.getElementById("board-title").textContent = board.title;

    const container = document.getElementById("image-container");
    board.images.forEach(img => {
      const image = document.createElement("img");
      image.src = `images/${board.name}/${img}`;
      image.alt = img;
      image.style.width = "200px";
      image.style.margin = "10px";
      container.appendChild(image);
    });
  });
