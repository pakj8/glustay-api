const checkoutSchema = require("./schema");

exports.findUser = async (reservationId) => {
  try {
    const data = await checkoutSchema?.findOne({ reservationId });

    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.createCheckout = async (InputCheckout) => {
  try {
    return await checkoutSchema?.create(InputCheckout);
  } catch (error) {
    console.error(error);
  }
};

exports.getAll = async () => {
  try {
    return await checkoutSchema?.find().populate("hotelId", "hotelName");
  } catch (error) {
    console.error(error);
  }
};
