(function() {
    // 初始化设置
    const STORAGE_KEY = 'wc81_lang';
    const DEFAULT_LANG = 'en';
    
    // 获取当前语言
    function getCurrentLang() {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }
  
    // 应用语言到页面
    function applyLanguage(lang) {
      const translations = window.__LANG_DATA__[lang];
      
      // 更新所有翻译元素
      document.querySelectorAll('[data-translate]').forEach(el => {
        const keys = el.dataset.translate.split('.');
        let value = translations;
        keys.forEach(key => value = value[key]);
        el.textContent = value;
      });
  
      // 更新按钮状态
      document.getElementById('langToggle').textContent = 
        lang === 'en' ? __LANG_DATA__.zh.language_btn : __LANG_DATA__.en.language_btn;
      
      // 更新HTML lang属性
      document.documentElement.lang = lang;
    }
  
    // 切换语言
    function toggleLanguage() {
      const newLang = getCurrentLang() === 'en' ? 'zh' : 'en';
      localStorage.setItem(STORAGE_KEY, newLang);
      applyLanguage(newLang);
    }
  
    // 初始化
    document.addEventListener('DOMContentLoaded', () => {
      applyLanguage(getCurrentLang());
      document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    });
  })();

// 在lang-switcher.js中添加
window.addEventListener('error', (e) => {
    if (e.message.includes('__LANG_DATA__')) {
      console.error('语言数据加载失败，请检查_data/lang目录');
      document.getElementById('langToggle').style.display = 'none';
    }
  });