import { userData } from "./data.js";

document.getElementById("entryForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const phoneNumber = document.getElementById("phoneInput").value.trim();
  const loader = document.getElementById("loader");
  const errorMessage = document.getElementById("errorMessage");

  loader.classList.remove("hidden");
  errorMessage.classList.add("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    const userByPhone = userData.find((user) => user.phoneNumber === phoneNumber);

    if (!userByPhone) {
      showError(`The phone number "${phoneNumber}" was not found in our records.`);
    } else {
      // Store user data in localStorage and navigate to newYearPage.html
      localStorage.setItem('user', JSON.stringify(userByPhone));
      window.location.href = 'newYearPage.html';  // Redirect to the new page
    }
  }, 1000);
});

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}
