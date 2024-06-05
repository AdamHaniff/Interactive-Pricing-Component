import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const slider = document.querySelector(".pricing__traffic-slider");
const numPageviews = document.querySelector(".pricing__traffic");
const price = document.querySelector(".pricing__price");
const checkbox = document.querySelector(".pricing__checkbox");

const pageviewLabels = {
  1: "10K Pageviews",
  2: "50K Pageviews",
  3: "100K Pageviews",
  4: "500K Pageviews",
  5: "1M Pageviews",
};

const colors = {
  iceCold: "#a4f3eb",
  titanWhite: "#ecf0fb",
};

const pricingPerMonth = {
  1: 8,
  2: 12,
  3: 16,
  4: 24,
  5: 36,
};

// EVENT LISTENER
slider.addEventListener("input", function () {
  const sliderValue = this.value;
  const fullPrice = pricingPerMonth[sliderValue];

  // Update the text content of 'numPageviews' based on the slider's current value
  numPageviews.textContent = pageviewLabels[sliderValue];

  // Update the background of the slider based on the slider's current value
  const percentage = (sliderValue - 1) * 25;
  this.style.background = `linear-gradient(to right, ${colors.iceCold} ${percentage}%, ${colors.titanWhite} ${percentage}%)`;

  // Update the text content of 'price' based on the slider's current value and if the checkbox is checked or not
  if (checkbox.checked) {
    const discountedPrice = `$${(fullPrice - fullPrice * 0.25).toFixed(2)}`;
    price.textContent = discountedPrice;
  } else {
    price.textContent = `$${fullPrice.toFixed(2)}`;
  }
});

checkbox.addEventListener("change", function () {
  // Update the text content of 'price' based on the slider's current value and if the checkbox is checked or not
  const sliderValue = slider.value;
  const fullPrice = pricingPerMonth[sliderValue];

  if (checkbox.checked) {
    const discountedPrice = `$${(fullPrice - fullPrice * 0.25).toFixed(2)}`;
    price.textContent = discountedPrice;
  } else {
    price.textContent = `$${fullPrice.toFixed(2)}`;
  }
});
