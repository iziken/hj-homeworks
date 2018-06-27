let photo = [
  "i/breuer-building.jpg",
  "i/guggenheim-museum.jpg",
  "i/headquarters.jpg",
  "i/IAC.jpg",
  "i/new-museum.jpg"
]
const currentPhoto = document.getElementById('currentPhoto');
let i = 0;
currentPhoto.src = photo[i];

function showPrev() {
  i > 0 ? i-- : i = photo.length-1;
  currentPhoto.src = photo[i];
}

function showNext() {
  i < photo.length-1 ? i++ : i = 0;
  currentPhoto.src = photo[i];
}

document.getElementById("prevPhoto").onclick = showPrev;
document.getElementById("nextPhoto").onclick = showNext;
