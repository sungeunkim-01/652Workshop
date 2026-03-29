//Handles the firewall's automated attack each turn, randomly choosing a normal or strong hit
// Damage is reduced if the player has Encrypt active then the turn is returned to the player
function firewallTurn() {
  if (state.gameOver) {
    return;
  }
  const isStrong = Math.random() < CONFIG.firewallStrongChance;
  let damage= CONFIG.firewallBaseDamage + (isStrong ? CONFIG.firewallStrongDamageBonus : 0);
  let msg;

  if (state.isEncrypted) {
    damage = Math.floor(damage * (1 - CONFIG.encryptDamageReduction));
    state.isEncrypted = false;
    msg = `Firewall attacks${isStrong ? ' hard' : ''}! Your Encrypt blocked half : only ${damage} damage got through.`;
  } else if (isStrong) {
    msg = `Firewall hits hard for ${damage} damage!`;
  } else {
    msg = `Firewall attacks you for ${damage} damage.`;
  }

  state.playerHp -= damage;
  logMessage(msg, 'firewall');

  render();
  checkGameOver();

  if (!state.gameOver) {
    state.playerTurn = true;
    render();
  }
}
