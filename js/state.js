// Hold game state - HP, turn, status effects, game over flag
// use resetState() to restart, dont modify state props directly outside this file

let state = {
  playerHp: CONFIG.playerMaxHp,
  firewallHp: CONFIG.firewallMaxHp,
  isEncrypted: false,
  patchPenaltyActive:false,
  gameOver: false,
  playerTurn: true,
};

function resetState() {
  state.playerHp = CONFIG.playerMaxHp;
  state.firewallHp= CONFIG.firewallMaxHp;
  state.isEncrypted = false;
  state.patchPenaltyActive = false;
  state.gameOver = false;
  state.playerTurn= true;
}
