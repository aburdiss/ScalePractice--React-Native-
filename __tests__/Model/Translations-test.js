import 'react-native';
import React from 'react';

import englishTranslations from '../../src/Translations/en.json';
import frenchTranslations from '../../src/Translations/fr.json';
// import spanishTranslations from '../../src/Translations/es.json';
import chineseTranslations from '../../src/Translations/zh.json';
// import japaneseTranslations from '../../src/Translations/ja.json';
// import koreanTranslations from '../../src/Translations/ko.json';

let englishTranslationList = Object.keys(englishTranslations);

test.each(englishTranslationList)('french translations all exist', (item) => {
  expect(frenchTranslations).toHaveProperty(item);
});

// test.each(englishTranslationList)('spanish translations all exist', (item) => {
//   expect(spanishTranslations).toHaveProperty(item);
// });

test.each(englishTranslationList)('chinese translations all exist', (item) => {
  expect(chineseTranslations).toHaveProperty(item);
});

// test.each(englishTranslationList)('korean translations all exist', (item) => {
//   expect(koreanTranslations).toHaveProperty(item);
// });

// test.each(englishTranslationList)('japanese translations all exist', (item) => {
//   expect(japaneseTranslations).toHaveProperty(item);
// });
