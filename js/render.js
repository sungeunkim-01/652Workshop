// Update DOM to reflect the current game state - hp bars, status badges, button disabled state, gamen over overlay
// these r called after every action so ui always stays in sync w state
function render() {
  const playerHp = Math.max(0, state.playerHp);
  const firewallHp= Math.max(0, state.firewallHp);
  const playerPct= (playerHp / CONFIG.playerMaxHp) *100;
  const firewallPct = (firewallHp  / CONFIG.firewallMaxHp)*100;

  document.getElementById('playerHpText').textContent = `${playerHp} / ${CONFIG.playerMaxHp}`;
  const playerBar = document.getElementById('playerBar');
  playerBar.style.width = playerPct + '%';
  playerBar.className= 'hpFill';

  document.getElementById('firewallHpText').textContent = `${firewallHp} / ${CONFIG.firewallMaxHp}`;
  const firewallBar = document.getElementById('firewallBar');
  firewallBar.style.width = firewallPct + '%';
  firewallBar.className = 'hpFill firewallFill';

  document.getElementById('badgeEncrypt').style.display = state.isEncrypted ? 'inline-block' : 'none';
  document.getElementById('badgePatch').style.display = state.patchPenaltyActive ? 'inline-block' : 'none';

  const disable = state.gameOver || !state.playerTurn;
  document.querySelectorAll('.abilityBtn').forEach(btn => (btn.disabled = disable));

  const overlay = document.getElementById('gameOverOverlay');
  if (state.gameOver) {
    const playerWon = state.firewallHp <= 0;
    document.getElementById('overTitle').textContent = playerWon ? 'You Win!' : 'You Lost!';
    document.getElementById('overSub').textContent = playerWon ? 'You defeated the Firewall.' : 'The Firewall won. Try again';
    document.getElementById('overTitle').className = playerWon ? 'winText' : 'loseText';
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
  }
}
