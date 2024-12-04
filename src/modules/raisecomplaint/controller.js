const complaintServices = require("../../models/raisecomplaint/services");

exports.createRaiseComplaint = async (ComplaintInput) => {
  try {
    const data = await complaintServices?.createComplaint(ComplaintInput);
    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.getComplaint = async () => {
  try {
    const data = await complaintServices?.get();
    return data;
  } catch (error) {
    console.error(error);
  }
};
