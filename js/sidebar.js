var menuButton = document.querySelector('#menuButton');
var closeButton = document.querySelector('#closeButton');
var sideBar = document.querySelector('#sideBar');

menuButton.addEventListener('click', function (evt) {
  sideBar.classList.toggle('active');
});

closeButton.addEventListener('click', function (evt) {
  sideBar.classList.toggle('active');
});
