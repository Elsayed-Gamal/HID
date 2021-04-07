const htmlDiv = document.querySelector('#skills .html');
const cssDiv = document.querySelector('#skills .css');
const jsDiv = document.querySelector('#skills .js');
const skillsBar = document.querySelector('#skills .bar');

function ChangeDiv() {
  if (screen.width > 640) {
    htmlDiv.style.right = `${skillsBar.offsetLeft + 100}px`;
    cssDiv.style.left = `${skillsBar.offsetLeft + 100}px`;
    jsDiv.style.right = `${skillsBar.offsetLeft + 100}px`;
  }
}

window.addEventListener('resize', ChangeDiv);

if (screen.width > 640) {
  // Position the HTML skill

  htmlDiv.style.right = `${skillsBar.offsetLeft + 100}px`;

  // Position the CSS skill

  cssDiv.style.left = `${skillsBar.offsetLeft + 100}px`;

  // Position the JS skill

  jsDiv.style.right = `${skillsBar.offsetLeft + 100}px`;
}
