document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'zh';
  
    // 初始化页面语言
    function setLanguage(lang) {
      // 切换文本内容
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = siteData[lang][key];
      });
  
      // 切换 Markdown 内容显示
      document.querySelectorAll('.lang-en, .lang-zh').forEach(el => {
        el.style.display = 'none';
      });
      document.querySelectorAll(`.lang-${lang}`).forEach(el => {
        el.style.display = 'block';
      });
  
      // 更新按钮文本
      toggleButton.textContent = lang === 'zh' ? 'EN' : '中';
      localStorage.setItem('lang', lang);
    }
  
    // 按钮点击事件
    toggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      setLanguage(currentLang);
    });
  
    // 初始化
    setLanguage(currentLang);
  });