// Manages turn flow - hands control to the firewall after the player acts and checks win or loss conditions
// also provide resetGame() to restart the match from a state
function afterPlayerAction() {
  state.playerTurn = false;
  render();
  checkGameOver();
  if (!state.gameOver) {
    setTimeout(firewallTurn, CONFIG.firewallAttackDelay);
  }
}

function checkGameOver() {
  if (state.firewallHp <= 0 || state.playerHp <= 0) {
    state.gameOver = true;
    render();
  }
}

function resetGame() {
  resetState();
  clearLog();
  render();
  logMessage('Game started. Pick an ability to attack', 'normal');
}
