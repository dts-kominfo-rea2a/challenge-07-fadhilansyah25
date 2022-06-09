const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  try {
    let output = await promiseTheaterIXX().then((data) => {
      return promiseTheaterVGC().then((data2) => {
        return data.concat(data2);
      });
    });

    return output.filter((data) => data.hasil === hasil).length;

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
