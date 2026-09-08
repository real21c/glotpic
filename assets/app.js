/* GlotPic landing — language (ko/en) and theme toggles. No dependencies. */
(function(){
  var I18N = {
    en: {
      'nav.how': 'How it works', 'nav.auto': 'Automation', 'nav.contact': 'Contact',
      'hero.kicker': 'Automatic in-image text translation',
      'hero.title': 'One image in.<br>Every language out.',
      'hero.lede': 'The design stays, only the words change. Drop in one thumbnail, banner or poster and get every language version at once.',
      'hero.cta1': 'Talk to us', 'hero.cta2': 'See results ↓',
      'demo.before': 'Original',
      'demo.note': 'Every image above was produced by GlotPic. Font size, colors, highlights and alignment follow the original. Right-to-left scripts are supported.',
      'how.title': 'Three steps, done',
      'how.s1': 'Upload an image', 'how.s1d': 'JPG, PNG, WebP. Thumbnails, banners, posters, schedules.',
      'how.s2': 'Pick languages', 'how.s2d': 'One or ten. One file per language.',
      'how.s3': 'Download', 'how.s3d': 'Same size, same place as the original. Ready to publish.',
      'how.f1': 'Only the text is erased and rewritten. Photos, logos and backgrounds are untouched.',
      'how.f2': 'Font size, color, highlight color and alignment follow the original. Text shrinks only when the translation is longer.',
      'how.f3': 'Right-to-left languages such as Arabic, plus Thai, Chinese and Japanese typography.',
      'how.f4': 'Uncertain text is left as is. A wrong guess never ruins the image.',
      'auto.kicker': 'Integrated automation',
      'auto.title': 'New post? Already translated.',
      'auto.lede': 'GlotPic is a pipeline, not just an upload tool. The moment a post or banner is saved in your system it is queued, and the translated images land in your storage automatically. Your site simply serves the file matching the visitor’s language.',
      'auto.n1': 'Your system', 'auto.n1s': 'Boards · admin banners', 'auto.e1': 'queued on save',
      'auto.n2s': 'detect · translate · re-typeset', 'auto.e2': 'upload per language', 'auto.n3': 'Storage / CDN',
      'auto.f1': 'Nobody has to touch it. From intake to upload it runs unattended.',
      'auto.f2': 'Languages are set per site. Nine for one customer, three for another.',
      'auto.f3': 'A simple file-name rule means any site can hook in with a few lines.',
      'auto.f4': 'Running in production today on Korean church websites for sermon thumbnails and banners.',
      'contact.title': 'Want it on your site?',
      'contact.lede': 'Tell us which site you run and which languages you need. We’ll explain how integration works and what it costs.',
      'contact.note': 'A self-service upload tool is coming.',
      'foot.by': 'a <a href="https://now100k.com">now100k studio</a> product'
    }
  };
  var KO = {};  // captured from the HTML on first switch
  var lang = 'ko';

  function apply(to){
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++){
      var el = els[i], key = el.getAttribute('data-i18n');
      if (!(key in KO)) KO[key] = el.innerHTML;
      var v = to === 'ko' ? KO[key] : (I18N[to] && I18N[to][key]);
      if (v != null) el.innerHTML = v;
    }
    document.documentElement.lang = to;
    document.title = to === 'ko' ? 'GlotPic — 이미지 속 글자를, 세계의 언어로' : 'GlotPic — One image in. Every language out.';
    var b = document.getElementById('langBtn');
    if (b) b.textContent = to === 'ko' ? 'EN' : '한국어';
    lang = to;
    try { localStorage.setItem('glotpic.lang', to); } catch(e){}
  }

  function setTheme(t){
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    try { t ? localStorage.setItem('glotpic.theme', t) : localStorage.removeItem('glotpic.theme'); } catch(e){}
  }

  document.addEventListener('DOMContentLoaded', function(){
    var saved = null, theme = null;
    try { saved = localStorage.getItem('glotpic.lang'); theme = localStorage.getItem('glotpic.theme'); } catch(e){}
    if (theme) setTheme(theme);
    var start = saved || ((navigator.language || 'ko').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en');
    if (start !== 'ko') apply(start);

    var lb = document.getElementById('langBtn');
    if (lb) lb.addEventListener('click', function(){ apply(lang === 'ko' ? 'en' : 'ko'); });
    var tb = document.getElementById('themeBtn');
    if (tb) tb.addEventListener('click', function(){
      var cur = document.documentElement.getAttribute('data-theme');
      var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = cur ? cur === 'dark' : sysDark;
      setTheme(isDark ? 'light' : 'dark');
    });
  });
})();
