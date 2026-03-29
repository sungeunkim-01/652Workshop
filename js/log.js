// Append msg to the battle log and provides clearLog() to wipe it on reset
// type arg maps to css class. ex) plater = logPlayer, firewall= logFirewall
function logMessage(msg, type = 'normal') {
  const log   = document.getElementById('battleLog');
  const entry = document.createElement('div');
  entry.className   = 'logEntry log' + type.charAt(0).toUpperCase() + type.slice(1);
  entry.textContent = '> ' + msg;
  log.prepend(entry);
}

function clearLog() {
  document.getElementById('battleLog').innerHTML = '';
}
