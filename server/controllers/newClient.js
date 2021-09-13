import ClientData from '../models/clientData.js';

export const getClients = async (req, res) => {
  try {
    const clientData = await ClientData.find();

    console.log(clientData);

    res.status(200).json(clientData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const { estateType, fullName, phone, email, region, district } = req.body;

  const newClient = new ClientData({
    estateType,
    fullName,
    phone,
    email,
    region,
    district,
  });

  try {
    await newClient.save();

    res.status(201).json(newClient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
