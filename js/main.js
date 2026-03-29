//runs once the page loads to do the initial render and wire up button click events
window.addEventListener('DOMContentLoaded', () => {
  render();
  logMessage('Game started. Pick an ability to attack', 'normal');

  document.getElementById('btnBrute').addEventListener('click', bruteForce);
  document.getElementById('btnEncrypt').addEventListener('click', encrypt);
  document.getElementById('btnPatch').addEventListener('click', patchSystem);
  document.getElementById('btnZeroday').addEventListener('click', zeroDayExploit);
  document.getElementById('btnReset').addEventListener('click', resetGame);
});
