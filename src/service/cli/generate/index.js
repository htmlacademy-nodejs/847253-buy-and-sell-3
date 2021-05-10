'use strict';

const {ExitCode} = require(`../../../constants`);
const {FILE_NAME, OFFERS_MIN_AMOUNT, OFFERS_MAX_AMOUNT} = require(`./constants`);
const {generateOffers, writeJsonToFile} = require(`./utils`);

module.exports = {
  name: `--generate`,
  run(args) {
    let [amount] = args;
    amount = Number.parseInt(amount, 10);

    if (Number.isNaN(amount)) {
      console.error(`Параметр "amount" обязательный`);
      process.exit(ExitCode.error);
    } else if (amount > OFFERS_MAX_AMOUNT || amount < OFFERS_MIN_AMOUNT) {
      console.error(`Параметр "amount" не может быть меньше ${OFFERS_MIN_AMOUNT} или больше ${OFFERS_MAX_AMOUNT}`);
      process.exit(ExitCode.error);
    }

    writeJsonToFile(FILE_NAME, generateOffers(amount));
  }
};
