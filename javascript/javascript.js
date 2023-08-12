// Dark Mode Toggler
function toggler() {
  $("body").toggleClass("dark-mode");
}

// Intersecting Slide-in(with Jquery)
const items = $(".grid-item");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $(entry.target).addClass('slide-in');
    }
  });
}, options);

items.each((index, item) => {
  observer.observe(item);
});

// Form Validation(Now with more Jquery!)
const form = $('form');
const thankYou = $('.thank-you');
const nameInput = $('input[name="name"]');
const emailInput = $('input[name="email"]');
const messageInput = $('textarea[name="message"]');

let isFormValid = false;
let isValidationOn = true;

const resetElm = (elm) => {
  $(elm).removeClass("invalid");
  $(elm).next().addClass("hidden");
}

const invalidateElm = (elm) => {
  $(elm).addClass("invalid");
  $(elm).next().removeClass("hidden");
}

const validateInputs = () => {
  if (!isValidationOn) return;

  isFormValid = true;
  resetElm(nameInput);
  resetElm(emailInput);
  resetElm(messageInput);

  if (!nameInput.val()) {
    isFormValid = false;
    invalidateElm(nameInput);
  }

  if (!emailInput.val()) {
    isFormValid = false;
    invalidateElm(emailInput);
  }

  if (!messageInput.val()) {
    isFormValid = false;
    invalidateElm(messageInput);
  }
}

form.on("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.removeClass("hidden");
  }
});

nameInput.on('input', () => {
  validateInputs();
});

emailInput.on('input', () => {
  validateInputs();
});

messageInput.on('input', () => {
  validateInputs();
});


//List Sorter
// Merge Sort implementation using tail recursion

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Output for List Sorter
const sortButton = document.getElementById("sortButton");
const inputList = document.getElementById("inputList");
const output = document.getElementById("outputBox");

sortButton.addEventListener("click", () => {
  const inputValues = inputList.value.split(",").map(value => parseFloat(value));
  const sortedList = mergeSort(inputValues);

  output.innerHTML = `<p>Sorted List: ${sortedList.join(", ")}</p>`;
});


