const rangeInput = document.querySelector('input[type=range]');
const pgViewsDisplay = document.querySelector('h3');
const prices = document.querySelectorAll('.price');
const discountSlider = document.querySelector('input[type=checkbox]');

let isDiscounted = false;

function updateViews() {
  pgViewsDisplay.textContent =
    rangeInput.value * 10 === 1000
      ? '1M PAGEVIEWS'
      : `${Number(rangeInput.value) * 10}K PAGEVIEWS`;
}

function changePriceText(discountPrice, regularPrice) {
  prices[0].textContent = isDiscounted ? discountPrice : regularPrice;
  prices[1].textContent = isDiscounted ? discountPrice : regularPrice;
}

function updatePrice(inputValue) {
  if (inputValue >= 10000 && inputValue < 50000) {
    changePriceText('$6', '$8');
  }
  if (inputValue >= 50000 && inputValue < 100000) {
    changePriceText('$9', '$12');
  }
  if (inputValue >= 100000 && inputValue < 500000) {
    changePriceText('$12', '$16');
  }
  if (inputValue >= 500000 && inputValue < 1000000) {
    changePriceText('$18', '$24');
  }
  if (inputValue === 1000000) {
    changePriceText('$27', '$36');
  }
}

rangeInput.addEventListener('change', () => {
  updateViews();
  updatePrice(rangeInput.value * 10000);
});

discountSlider.addEventListener('change', () => {
  isDiscounted = isDiscounted ? false : true;
  updateViews();
  updatePrice(rangeInput.value * 10000);
});
