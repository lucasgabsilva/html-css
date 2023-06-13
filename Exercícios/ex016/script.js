const naoBtn = document.getElementById('nao-btn');
naoBtn.addEventListener('mousemove', function() {
  const newLeft = Math.random() * (window.innerWidth - naoBtn.clientWidth);
  const newTop = Math.random() * (window.innerHeight - naoBtn.clientHeight);
  naoBtn.style.left = `${newLeft}px`;
  naoBtn.style.top = `${newTop}px`;
});
