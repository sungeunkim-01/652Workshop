// Defines 4 hacker abilities: Brute Force, Encrypt, Patch System,Zero-Day Exploit
// Each function updates game state and calls afterPlayerAction() to hand the turn to the firewall
function bruteForce() {
  if (state.gameOver || !state.playerTurn) return;

  let damage = CONFIG.bruteForceDamage;
  if (state.patchPenaltyActive) {
    damage = Math.max(0, damage - CONFIG.patchAttackPenalty);
    state.patchPenaltyActive = false;
  }

  state.firewallHp -= damage;
  logMessage(`Brute Force deals ${damage} damage to the Firewall.`, 'player');
  afterPlayerAction();
}

function encrypt() {
  if (state.gameOver || !state.playerTurn) return;

  state.isEncrypted = true;
  logMessage('You used Encrypt. The next hit you take is reduced by 50%.', 'player');
  afterPlayerAction();
}

function patchSystem() {
  if (state.gameOver || !state.playerTurn) return;

  state.playerHp = Math.min(CONFIG.playerMaxHp, state.playerHp + CONFIG.patchHeal);
  state.patchPenaltyActive = true;
  logMessage(`You used Patch System. Healed ${CONFIG.patchHeal} HP, but your next attack is weaker.`, 'player');
  afterPlayerAction();
}

//=======================================================================================================================================
function zeroDayExploit() {
  
  if (state.gameOver || !state.playerTurn) return;

  // Calculate damage
  let damage = Math.floor(CONFIG.bruteForceDamage * CONFIG.zeroDayMultiplier);

  //====================================================
  // TODO 1: Apply patch penalty
  // - If state.patchPenaltyActive is true,
  // - reduce damage by CONFIG.patchAttackPenalty (never go below 0) 
  //   - **use Math.max**,
  // - then set state.patchPenaltyActive = false

  //================================================
  // TODO2: Backfire check
  // - Write if/else
  //
  // - If it is less than CONFIG.zeroDayBackfireChance, the exploit backfired:
  //   - Subtract CONFIG.zeroDayBackfireDamage from state.playerHp
  //   - Call logMessage() with a backfire message and type 'danger'
  //     - example: logMessage(`....`, 'danger');
  //
  // - Otherwise:
  //   - Subtract damage from state.firewallHp
  //   - Call logMessage() with hit msg and type 'player'
  const backfired = Math.random() < CONFIG.zeroDayBackfireChance;

  //=======================================================
  // TODO3:End turn by calling afterPlayerAction()
}
