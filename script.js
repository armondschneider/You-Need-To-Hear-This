const submitButton = document.getElementById("submit-button");
const messageOutput = document.getElementById("message-output");
const input = document.getElementById("thought-input");

const messages = [
  "You got this.",
  "I believe in you.",
  "We want you to win.",
  "Do not ever give up. Just keep trying.",
  "You are the one to make this work.",
  "This is your time.",
];

submitButton.addEventListener("click", () => {
  // Hide the input field with a transition effect
  input.style.opacity = 0;
  input.style.transition = "opacity 0.2s ease-in-out";

  // Generate a random message
  const randomIndex = Math.floor(Math.floor(Math.random() * messages.length));
  const message = messages[randomIndex];

  // Display the message with a transition effect
  messageOutput.textContent = message;
  messageOutput.style.display = "block";
  messageOutput.style.opacity = 25;
  messageOutput.style.transition = "opacity 2.0s ease-in-out";

  // Set the button's position to stay fixed
  submitButton.style.position = "absolute";
  submitButton.style.top = "100%";
  submitButton.style.left = "50%";
  submitButton.style.transform = "translate(-50%, -50%)";
});
