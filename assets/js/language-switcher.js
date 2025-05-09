document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'zh';
  
    // 初始化页面语言
    function setLanguage(lang) {
      // 切换导航栏文本
      document.querySelectorAll('.masthead__menu-item a span').forEach(el => {
        el.style.display = 'none';
      });
      document.querySelectorAll(`.masthead__menu-item a .lang-${lang}`).forEach(el => {
        el.style.display = 'inline';
      });

      // 切换作者栏文本
      document.querySelectorAll('.author__desktop a span').forEach(el => {
        el.style.display = 'none';
      });
      document.querySelectorAll(`.author__desktop a .lang-${lang}`).forEach(el => {
        el.style.display = 'inline';
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