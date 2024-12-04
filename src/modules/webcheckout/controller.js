const checkoutServices = require("../../models/webcheckout/services");

exports.getCheckoutDetailsByReservationId = async (reservationId) => {
  try {
    const data = await checkoutServices?.findUser(reservationId);

    return data !== null;

    // if (data?.getCheckoutDetailsByReservationId) {
    //   return true;
    // } else {
    //   return false;
    // }
  } catch (error) {
    console.error(error);
  }
};

exports.createWebCheckout = async (InputCheckout) => {
  try {
    return await checkoutServices.createCheckout(InputCheckout);
  } catch (error) {
    console.error(error);
  }
};

exports.getAllWebCheckout = async () => {
  try {
    const data = await checkoutServices?.getAll();
    return data;
  } catch (error) {
    console.error(error);
  }
};
