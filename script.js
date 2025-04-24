const catImages = [
  "images/cat1.jpg",
  "images/cat2.jpg",
  "images/cat3.jpg"
];

function showRandomCat() {
  const index = Math.floor(Math.random() * catImages.length);
  const container = document.getElementById("random-cat");
  container.innerHTML = `<img src="${catImages[index]}" alt="Random Cat" width="300" style="border-radius:10px;" />`;
}
