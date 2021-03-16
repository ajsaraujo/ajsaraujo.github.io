function userLanguageIsPortuguese() {
  const language = navigator.language || navigator.userLanguage;
  return language.includes('pt');
}

function createDictionary() {
  const dictionary = new Map();

  dictionary.set('Desenvolvedor de Software', 'Software Developer');
  
  dictionary.set(
    'Olá, meu nome é Allan! Sou estudante de Ciência da Computação pela Universidade Federal de Sergipe. Na graduação, já participei de tudo um pouco - desde maratona de programação até iniciação científica e empresa júnior. Hoje, atuo como desenvolvedor Angular na SergipeTec. Amo o que faço e vejo a programação como uma arte, na qual procuro me aperfeiçoar todos os dias.',
    "Hi, my name is Allan! I'm a Computer Science student at Federal University of Sergipe. In grad school, I've done a bit of everything - from programming contests and scientific research to junior enterprises. Nowadays, I work as an Angular developer at SergipeTec. I love what I do and I see programming as an art, in which I try to improve everyday.");
  
  dictionary.set('Visite minhas redes sociais', 'Visit my social media profiles');

  return dictionary;
}

function translate(element, dictionary) {
  const key = element.innerText;
  const translation = dictionary.get(key);

  if (translation) {
    element.innerText = translation;
  }
}

function translateAllTextToEnglish() {
  const translatableElements = document.querySelectorAll('[data-i18n]');
  const dictionary = createDictionary();

  translatableElements.forEach(element => translate(element, dictionary));

  document.title = 'Allan Juan - Software Developer';
}

function handleClick(selector, handler) {
  const button = document.querySelector(selector);
  button.addEventListener('click', handler);
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function main() {
  if (!userLanguageIsPortuguese()) {
    translateAllTextToEnglish();
  }

  handleClick('.theme-toggler', toggleTheme);
}

main();