// Confetti effect
function showConfetti() {
  const confettiSettings = { target: 'confetti-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

// Play sound effect
function playSound() {
  const audio = new Audio('sounds/cash.mp3');
  audio.play();
}

// Copy transaction ID
function copyTransaction() {
  const transactionId = document.getElementById('transactionId').innerText;
  navigator.clipboard.writeText(transactionId);
  alert('Transaction ID copied!');
}

// Download fake receipt
function downloadReceipt() {
  const link = document.createElement('a');
  link.href = 'receipt.pdf';
  link.download = 'PayPal-Receipt.pdf';
  link.click();
}

// Redeem button action
function redeemNow() {
  window.location.href = 'redeem.html';
}

// Loading screen logic
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading-screen').style.display = 'none';
    document.querySelector('.container').classList.remove('hidden');
    showConfetti();
  }, 2000);
});
