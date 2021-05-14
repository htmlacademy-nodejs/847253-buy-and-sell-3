'use strict';

const generateRandomNumber = (min, max) => {
  const roundedUpMin = Math.ceil(min);
  const roundedDownMax = Math.floor(max);

  return Math.floor(Math.random() * (roundedDownMax - roundedUpMin + 1)) + roundedUpMin;
};

const getRandomArrayValue = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomObjectValue = (object) => {
  const objectKeys = Object.keys(object);
  const randomObjectKey = getRandomArrayValue(objectKeys);

  return object[randomObjectKey];
};

const shuffleArray = (array) => {
  const copiedArray = array.slice();

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomArrayIndex = Math.floor(Math.random() * i);

    [copiedArray[i], copiedArray[randomArrayIndex]] = [copiedArray[randomArrayIndex], copiedArray[i]];
  }

  return copiedArray;
};

module.exports = {
  generateRandomNumber,
  getRandomArrayValue,
  getRandomObjectValue,
  shuffleArray,
};
