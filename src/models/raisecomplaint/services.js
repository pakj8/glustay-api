const complaintSchema = require("./schema");

exports.createComplaint = async (ComplaintInput) => {
  try {
    const data = await complaintSchema?.create(ComplaintInput);
    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.get = async () => {
  try {
    const data = await complaintSchema?.find().populate("hotelId", "hotelName");
    return data;
  } catch (error) {
    console.error(errpr);
  }
};
