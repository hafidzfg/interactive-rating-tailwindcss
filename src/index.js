console.log("This runs");
// ratings
const rate1 = document.getElementById("1");
const rate2 = document.getElementById("2");
const rate3 = document.getElementById("3");
const rate4 = document.getElementById("4");
const rate5 = document.getElementById("5");
const userRating = document.getElementById("user");
const thanks = document.getElementById("thanks");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const big = document.querySelector("#bigText");

// console.log(document.getElementById("result").innerText);
ratings = [rate1, rate2, rate3, rate4, rate5];
ratings.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    result.textContent = `You selected ${this.value} out of 5`;
    e.preventDefault();
  });
});
submit.addEventListener("click", function (e) {
  e.preventDefault();
  thanks.classList.remove("hidden");
  userRating.classList.add("hidden");
});
