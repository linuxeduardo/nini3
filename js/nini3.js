function handleDropdown() {
  document
    .getElementById('dropdown')
    .classList.toggle('dropdown-show');
}

window.onclick = function (e) {
  if (!e.target.matches('.btn-dropdown')) {
    const dropdowns = document.getElementsByClassName(
      'dropdown-content',
    );
    let i;

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdowns = dropdowns[i];
      if (openDropdowns.classList.contains('dropdown-show')) {
        openDropdowns.classList.remove('dropdown-show');
      }
    }
  }
};
