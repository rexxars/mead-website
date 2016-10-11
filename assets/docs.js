(function() {
  var hamburger = document.querySelector('.doc-hamburger')
  var docNav = document.querySelector('.doc-nav')

  hamburger.addEventListener('click', toggleNav, false)

  function toggleNav() {
    docNav.classList.toggle('forced')
  }
})()
