// Stores all tunable numbers for the game (HP, damage, chances, delays)

const CONFIG = {
  //Starting hp
  playerMaxHp:100,
  firewallMaxHp: 100,

  //Brute Force
  // Damage dealt each use
  bruteForceDamage: 15,

  // Encrypt
  // 50% reduction on nxt hit
  encryptDamageReduction: 0.5,

  //Patch Sys
  // 18hp restored and 5 dmg penalty on hacker's nxt attack
  patchHeal:18,
  patchAttackPenalty: 5,

  //===============================================================================================================
  //Zero-Day Exploit

  // TODO: Set zeroDayMultiplier, how many times stronger than Brute Force this hit is
  // Try number btw 1.5 and 3.0
  //Default: 2.2
  zeroDayMultiplier: 2.2,

  //TODO: Set zeroDayBackfireChance, probability (0.0 to 1.0) the exploit blows up in hacker's face
  // 0.0 = never backfires, 1.0 = always backfires
  // Try 0.2 to 0.4
  zeroDayBackfireChance: 0.3,

  // TODO:Set zeroDayBackfireDamage, how much HP the hacker loses when it backfires
  //Try value btw 10 and 20
  zeroDayBackfireDamage: 12,
  //===============================================================================================================

  //firewall
  // 10 normal attack damage
  // 6 extra damage on strong attack
  // 0.0 to 1.0 probability of strong attack
  // 700 millisecs befo enemy responds
  firewallBaseDamage: 10,
  firewallStrongDamageBonus: 6,
  firewallStrongChance: 0.30,
  firewallAttackDelay: 700,
};
