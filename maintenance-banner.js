(function () {
  function injectBanner() {
    if (document.getElementById('maintenance-banner-root')) return;

    var body = document.body;
    if (!body) return;

    var style = document.createElement('style');
    style.id = 'maintenance-banner-style';
    style.textContent = [
      '.maintenance-banner-wrap{background:#000;margin:0;padding:30px 0;}',
      '.maintenance-banner-panel{background:#d9e0e5;width:min(1800px,calc(100% - 48px));margin:0 auto;padding:92px 120px;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif;color:#101214;}',
      '.maintenance-banner-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:70px 86px;}',
      '.maintenance-banner-item{display:flex;align-items:flex-start;gap:10px;min-width:0;}',
      '.maintenance-banner-flag{width:27px;height:20px;object-fit:cover;flex:0 0 auto;margin-top:3px;}',
      '.maintenance-banner-title{margin:0 0 8px;font-size:16px;line-height:1.18;font-weight:700;color:#0f1215;}',
      '.maintenance-banner-text{margin:0 0 10px;font-size:14px;line-height:1.34;color:#1f252a;}',
      '.maintenance-banner-text:last-child{margin-bottom:0;}',
      '@media (max-width:1400px){.maintenance-banner-panel{width:min(1800px,calc(100% - 32px));margin:0 auto;padding:56px 44px;}.maintenance-banner-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:50px 46px;}.maintenance-banner-title{font-size:16px;}.maintenance-banner-text{font-size:14px;}}',
      '@media (max-width:820px){.maintenance-banner-wrap{background:#d9e0e5;padding:0;}.maintenance-banner-panel{width:100%;margin:0;padding:28px 18px 34px;}.maintenance-banner-grid{grid-template-columns:1fr;gap:32px;}.maintenance-banner-title{font-size:15px;}.maintenance-banner-text{font-size:13px;}}'
    ].join('');

    var banner = document.createElement('section');
    banner.id = 'maintenance-banner-root';
    banner.className = 'maintenance-banner-wrap';
    banner.innerHTML = '' +
      '<div class="maintenance-banner-panel">' +
        '<div class="maintenance-banner-grid">' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-gb.svg" alt="GB" /><div><h3 class="maintenance-banner-title">Maintenance in progress</h3><p class="maintenance-banner-text">Our websites are currently experiencing a technical issue. Our teams are actively working to restore service as soon as possible.</p><p class="maintenance-banner-text">Thank you for your understanding.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-fr.svg" alt="FR" /><div><h3 class="maintenance-banner-title">Maintenance en cours</h3><p class="maintenance-banner-text">Nos sites rencontrent actuellement un problème technique. Nos équipes travaillent activement à leur rétablissement dans les plus brefs délais.</p><p class="maintenance-banner-text">Merci de votre compréhension.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-de.svg" alt="DE" /><div><h3 class="maintenance-banner-title">Wartungsarbeiten im Gange</h3><p class="maintenance-banner-text">Unsere Websites haben derzeit ein technisches Problem. Unsere Teams arbeiten aktiv an einer schnellstmöglichen Wiederherstellung.</p><p class="maintenance-banner-text">Vielen Dank für Ihr Verständnis.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-it.svg" alt="IT" /><div><h3 class="maintenance-banner-title">Manutenzione in corso</h3><p class="maintenance-banner-text">I nostri siti web stanno attualmente riscontrando un problema tecnico. I nostri team stanno lavorando attivamente per ripristinare il servizio il prima possibile.</p><p class="maintenance-banner-text">Grazie per la comprensione.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-es.svg" alt="ES" /><div><h3 class="maintenance-banner-title">Mantenimiento en curso</h3><p class="maintenance-banner-text">Nuestros sitios web están experimentando actualmente un problema técnico. Nuestros equipos están trabajando activamente para restablecer el servicio lo antes posible.</p><p class="maintenance-banner-text">Gracias por su comprensión.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-cn.svg" alt="CN" /><div><h3 class="maintenance-banner-title">网站维护中</h3><p class="maintenance-banner-text">我们的网站目前遇到技术问题。我们的团队正在积极努力尽快恢复服务。</p><p class="maintenance-banner-text">感谢您的理解</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-jp.svg" alt="JP" /><div><h3 class="maintenance-banner-title">現在メンテナンス中です</h3><p class="maintenance-banner-text">現在、当社のウェブサイトで技術的な問題が発生しております。復旧に向けてチームが対応しております。</p><p class="maintenance-banner-text">ご理解のほどよろしくお願いいたします。</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-pt.svg" alt="PT" /><div><h3 class="maintenance-banner-title">Manutenção em andamento</h3><p class="maintenance-banner-text">Nossos sites estão enfrentando um problema técnico no momento. Nossas equipes estão trabalhando ativamente para restabelecer o serviço o mais rápido possível.</p><p class="maintenance-banner-text">Agradecemos a sua compreensão.</p></div></article>' +
          '<article class="maintenance-banner-item"><img class="maintenance-banner-flag" src="/maintenance-icons/flag-ru.svg" alt="RU" /><div><h3 class="maintenance-banner-title">Техническое обслуживание</h3><p class="maintenance-banner-text">В настоящее время на наших сайтах возникла техническая проблема. Наши специалисты активно работают над скорейшим восстановлением работы.</p><p class="maintenance-banner-text">Благодарим за понимание.</p></div></article>' +
        '</div>' +
      '</div>';

    var head = document.head || document.getElementsByTagName('head')[0];
    if (head && !document.getElementById('maintenance-banner-style')) {
      head.appendChild(style);
    }

    if (body.firstChild) {
      body.insertBefore(banner, body.firstChild);
    } else {
      body.appendChild(banner);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanner);
  } else {
    injectBanner();
  }
})();
