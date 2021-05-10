'use strict';

const fs = require(`fs`);

const {
  generateRandomNumber,
  getRandomArrayValue,
  getRandomObjectValue,
  shuffleArray,
} = require(`../../../../src/utils`);

const {
  TITLES,
  PICTURE_MIN_NUMBER,
  PICTURE_MAX_NUMBER,
  TEXT_SENTENCES_MAX_AMOUNT,
  TEXT_SENTENCES,
  SUM_MIN_AMOUNT,
  SUM_MAX_AMOUNT,
  CATEGORIES_MAX_AMOUNT,
  CATEGORIES,
  OfferType,
} = require(`./constants`);

const generatePictureName = () => {
  const randomPictureNumber = generateRandomNumber(PICTURE_MIN_NUMBER, PICTURE_MAX_NUMBER);
  const paddedFromStartRandomPictureNumber = String(randomPictureNumber).padStart(2, `0`);

  return `item${paddedFromStartRandomPictureNumber}.jpg`;
};

const generateText = () => shuffleArray(TEXT_SENTENCES)
  .slice(0, TEXT_SENTENCES_MAX_AMOUNT)
  .join(` `);

const generateCategories = () => {
  const shuffledCategories = shuffleArray(CATEGORIES);
  const maxCategoriesAmount = Math.min(CATEGORIES.length, CATEGORIES_MAX_AMOUNT);
  const randomCategoriesAmount = generateRandomNumber(1, maxCategoriesAmount);

  return shuffledCategories.slice(0, randomCategoriesAmount);
};

const generateOffer = () => ({
  title: getRandomArrayValue(TITLES),
  picture: generatePictureName(),
  description: generateText(),
  type: getRandomObjectValue(OfferType),
  sum: generateRandomNumber(SUM_MIN_AMOUNT, SUM_MAX_AMOUNT),
  categories: generateCategories(),
});

const generateOffers = (amount) => Array.from({length: amount}).map(() => generateOffer());

const writeJsonToFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
    console.info(`Данные успешно записаны в "/${path}"`);
  } catch (error) {
    console.error(`Не удалось произвести запись в "/${path}"\n\n${error}`);
    throw error;
  }
};

module.exports = {generateOffers, writeJsonToFile};
