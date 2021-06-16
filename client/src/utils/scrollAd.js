export default function scrollAd(navBar) {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.current.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.current.classList.add('fix__nav');
  } else {
    navBar.current.classList.remove('fix__nav');
  }
}
