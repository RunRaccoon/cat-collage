const catImages = [
  "images/cat1.jpg",
  "images/cat2.jpg",
  "images/cat3.jpg"
];

// Get a cat of the day using today's date as seed
function getCatOfTheDay() {
  const date = new Date();
  const seed = date.getFullYear() + date.getMonth() + date.getDate();
  const index = seed % catImages.length;
  return catImages[index];
}

function displayCatOfTheDay() {
  const catSrc = getCatOfTheDay();
  const container = document.getElementById("cat-of-the-day");

  container.innerHTML = `
    <div style="text-align:center;">
      <img src="images/crown.png" alt="Crown" style="width:50px; position:relative; top:15px;">
      <img src="${catSrc}" alt="Cat of the Day" style="width:300px; border-radius:10px;">
      <h3>Cat of the Day 🏆</h3>
    </div>
  `;
}

window.onload = displayCatOfTheDay;
