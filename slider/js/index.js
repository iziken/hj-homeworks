let links = [
  'i/airmax-jump.png',
  'i/airmax-on-foot.png',
  'i/airmax-playground.png',
  'i/airmax-top-view.png',
  'i/airmax.png'
];

let slider = document.getElementById('slider');

function changeImg() {
  if (links.currentId === undefined) {
    links.currentId = 0;
  }

  if (links[links.currentId] !== undefined) {
    slider.src = links[links.currentId];

    if (links.currentId < links.length - 1) {
      links.currentId++;
    } else {
      links.currentId = 0;
    }
  }
}

changeImg();

let sliderTimer = setInterval(changeImg, 5000);
