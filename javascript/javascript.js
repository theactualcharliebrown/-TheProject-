function toggler() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



const items = document.querySelectorAll('.grid-item')

const options = {
  threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  entry.target.classList.add('slide-in'); }
  });
}, options)

items.forEach(item => {
  observer.observe(item);
})