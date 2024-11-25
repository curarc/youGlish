let youglishWidget;

// Function to load language file
function loadLanguageFile(language) {
  const supportedLanguages = {
    'en-US': 'en',
    'zh-CN': 'zh_CN',
    'zh-TW': 'zh_TW',
    'ja': 'ja',
    'ko': 'ko',
    'vi': 'vi',
    'fr': 'fr',
    'de': 'de',
    'it': 'it',
    'ar': 'ar'
  };
  const lang = supportedLanguages[language] || 'en';
  return fetch(`locales/${lang}.json`)
    .then(response => response.json())
    .catch(() => fetch('locales/en.json').then(response => response.json()));
}

// Function to update UI text
function updateUIText(translations) {
  document.title = translations.title; // Update the page title
  document.getElementById('searchButton').textContent = translations.search;
  document.getElementById('prevButton').textContent = translations.previous;
  document.getElementById('nextButton').textContent = translations.next;
  document.getElementById('resultsLabel').textContent = translations.results;
  document.getElementById('searchInput').placeholder = translations.enter_word;
}

// Detect browser language and load translations
const userLanguage = navigator.language || navigator.userLanguage;
loadLanguageFile(userLanguage).then(translations => {
  updateUIText(translations);
}).catch(error => {
  console.error('Error loading language file:', error);
});

function loadYouGlishScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'widget.js';
    script.onload = resolve;
    script.onerror = (e) => {
      console.error('Script loading error:', e);
      reject(e);
    };
    document.body.appendChild(script);
  });
}

async function initializeWidget() {
  try {
    await loadYouGlishScript();
    
    if (!window.YG) {
      throw new Error('YG object not found');
    }

    youglishWidget = new YG.Widget('youglish', {
      width: 510,
      height: 450,
      components: 72,
      events: {
        'onFetchDone': function (data) {
          updateResultCount(data);
        },
        'onError': function(error) {
          console.error('YouGlish error:', error);
          document.getElementById('resultCount').textContent = 'Error: ' + error.message;
        }
      }
    });
    
    // Add event listeners
    document.getElementById('searchButton').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    document.getElementById('prevButton').addEventListener('click', () => youglishWidget.previous());
    document.getElementById('nextButton').addEventListener('click', () => youglishWidget.next());
  } catch (error) {
    console.error('Failed to initialize YouGlish:', error);
    document.getElementById('resultCount').textContent = 'Failed to load YouGlish widget: ' + error.message;
  }
}

function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.trim();
  if (searchTerm && youglishWidget) {
    try {
      youglishWidget.fetch(searchTerm, 'english');
    } catch (error) {
      console.error('Search error:', error);
      document.getElementById('resultCount').textContent = 'Error performing search: ' + error.message;
    }
  }
}

function updateResultCount(data) {
  const resultCount = document.getElementById('resultCount');
  if (data.totalResult > 0) {
    resultCount.textContent = `Found ${data.totalResult} results`;
  } else {
    resultCount.textContent = 'No results found';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWidget);
