// player.js
// Inicializa NuvPlayer com configuração do formulário e exibe logs de diagnóstico.

// ------- Helpers de log ----------
function log(msg) {
  var el = document.getElementById('log');
  var time = new Date().toLocaleTimeString();
  el.textContent = `[${time}] ${msg}\n` + el.textContent;
}
function clearLog() {
  document.getElementById('log').textContent = '';
}

// ------- Utils ----------
function buildDomain(protocol, domain, port) {
  domain = domain.trim();
  port = (port || '').toString().trim();
  if (!domain) return null;
  return port ? `${protocol}://${domain}:${port}` : `${protocol}://${domain}`;
}

// Tenta carregar uma imagem simples do servidor para checar se ele responde
function testConnectivity(rootUrl, timeoutMs = 5000) {
  return new Promise(function(resolve) {
    var img = new Image();
    var timer = setTimeout(function() {
      img.src = ''; // cancela
      log(`Conectividade: timeout ao tentar acessar ${rootUrl}`);
      resolve({ ok: false, reason: 'timeout' });
    }, timeoutMs);

    img.onload = function() {
      clearTimeout(timer);
      log(`Conectividade: recurso carregado com sucesso de ${rootUrl}`);
      resolve({ ok: true });
    };
    img.onerror = function() {
      clearTimeout(timer);
      log(`Conectividade: erro ao carregar recurso de ${rootUrl} — pode ser bloqueio/CORS/404`);
      resolve({ ok: false, reason: 'error' });
    };

    // tenta um recurso simples (favicon). acrescenta timestamp para evitar cache.
    var tryUrl = rootUrl.replace(/\/$/, '') + '/favicon.ico?_=' + Date.now();
    img.src = tryUrl;
  });
}

// ------- Estado global -------
window.myNuvPlayer = null;

// ------- Função que inicializa o player com os valores do formulário -------
async function initPlayerFromForm() {
  clearLog();
  log('Inicializando...');

  var protocol = document.getElementById('protocol').value;
  var domain = document.getElementById('domain').value.trim();
  var port = document.getElementById('port').value.trim();
  var id = document.getElementById('id').value.trim();
  var user = document.getElementById('user').value;
  var password = document.getElementById('password').value;
  var width = document.getElementById('width').value || '640';
  var height = document.getElementById('height').value || '360';

  if (!domain) {
    log('Erro: preencha o campo domain/IP.');
    return;
  }

  var root = buildDomain(protocol, domain, port);
  log('URL montada: ' + root);

  // Teste simples de conectividade
  log('Testando conectividade (tentativa de carregar favicon)...');
  var c = await testConnectivity(root);
  if (!c.ok) {
    log('Aviso: o teste de conectividade falhou. Mesmo assim tentaremos inicializar o NuvPlayer (o problema pode ser CORS, rede, porta ou recurso ausente).');
  }

  // Remover instância anterior (se houver)
  try {
    if (window.myNuvPlayer && typeof window.myNuvPlayer.destroy === 'function') {
      try { window.myNuvPlayer.destroy(); log('Instância anterior destruída.'); } catch(e){ /* ignore */ }
    }
  } catch(e) {}

  // Garante que a biblioteca NuvPlayer esteja carregada
  if (typeof NuvPlayer === 'undefined') {
    log('ERRO: biblioteca NuvPlayer não encontrada. Verifique se o arquivo nuvplayer.js foi carregado.');
    console.error('NuvPlayer não definido');
    return;
  }

  // Monta o objeto de configuração conforme seu snippet original
  var config = {
    domain: domain,         // NOTA: a biblioteca antiga pode querer apenas o host sem protocolo/porta.
    id: id,
    protocol: protocol,
    user: user,
    password: password,
    height: height,
    width: width,
    mute: false,
    playerElement: "player"
  };

  // Alguns servidores precisam que você coloque porta dentro do domain: "ip:porta"
  if (port) {
    // se a lib espera domain sem protocolo, passe com :porta
    config.domain = domain + ':' + port;
    log('Configurado domain com porta: ' + config.domain);
  }

  try {
    var container = document.getElementById('player');
    container.innerHTML = ''; // limpa
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    // Criar a instância
    var myPlayer = new NuvPlayer(config);
    window.myNuvPlayer = myPlayer;
    log('Instância do NuvPlayer criada. Chamando prepare()...');
    if (typeof myPlayer.prepare === 'function') {
      try {
        myPlayer.prepare();
        log('myPlayer.prepare() chamado — verifique mensagens do console do navegador para erros adicionais.');
      } catch (err) {
        log('Erro ao chamar prepare(): ' + String(err));
        console.error(err);
      }
    } else {
      log('Advertência: método prepare() não encontrado na instância do NuvPlayer.');
    }

    // registra eventos se a API suportar (exemplo genérico)
    if (typeof myPlayer.on === 'function') {
      try {
        myPlayer.on('ready', function(){ log('Evento: ready'); });
        myPlayer.on('error', function(e){ log('Evento: error — ' + JSON.stringify(e)); });
      } catch(e) {
        // muitas libs têm APIs diferentes; ignore se falhar
      }
    }

  } catch(e) {
    log('Erro ao instanciar NuvPlayer: ' + String(e));
    console.error(e);
  }
}

// Botões auxiliares (play/pause/mute)
function attachControlButtons() {
  document.getElementById('btnPlay').addEventListener('click', function(){
    if (window.myNuvPlayer && typeof window.myNuvPlayer.play === 'function') {
      window.myNuvPlayer.play();
      log('Chamado myNuvPlayer.play()');
    } else {
      log('Método play() não disponível na instância do NuvPlayer.');
    }
  });
  document.getElementById('btnPause').addEventListener('click', function(){
    if (window.myNuvPlayer && typeof window.myNuvPlayer.pause === 'function') {
      window.myNuvPlayer.pause();
      log('Chamado myNuvPlayer.pause()');
    } else {
      log('Método pause() não disponível na instância do NuvPlayer.');
    }
  });
  document.getElementById('btnMute').addEventListener('click', function(){
    if (window.myNuvPlayer && typeof window.myNuvPlayer.setMute === 'function') {
      var newMute = !(window.myNuvPlayer.isMuted);
      window.myNuvPlayer.setMute(newMute);
      log('Chamado setMute(' + newMute + ')');
    } else if (window.myNuvPlayer && typeof window.myNuvPlayer.mute === 'function') {
      window.myNuvPlayer.mute();
      log('Chamado mute()');
    } else {
      log('Métodos de mute não disponíveis na instância do NuvPlayer.');
    }
  });
}

// Botões do formulário
function attachFormButtons() {
  document.getElementById('btnInit').addEventListener('click', function(){
    initPlayerFromForm();
  });
  document.getElementById('btnTryFetch').addEventListener('click', function(){
    var protocol = document.getElementById('protocol').value;
    var domain = document.getElementById('domain').value.trim();
    var port = document.getElementById('port').value.trim();
    if (!domain) { log('Preencha o domain para testar conectividade.'); return; }
    var root = buildDomain(protocol, domain, port);
    log('Iniciando teste de conectividade manual para ' + root);
    testConnectivity(root);
  });
  document.getElementById('btnOpenRoot').addEventListener('click', function(){
    var protocol = document.getElementById('protocol').value;
    var domain = document.getElementById('domain').value.trim();
    var port = document.getElementById('port').value.trim();
    if (!domain) { log('Preencha o domain para abrir a raiz.'); return; }
    var root = buildDomain(protocol, domain, port);
    log('Abrindo: ' + root + ' (navegador)');
    window.open(root, '_blank');
  });
}

// Auto attach
document.addEventListener('DOMContentLoaded', function(){
  attachControlButtons();
  attachFormButtons();
  log('Ferramenta carregada. Preencha os dados e clique em Start / Reinitialize.');
});
