import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  estateType: String,
  fullName: String,
  phone: Number,
  email: String,
  region: String,
  district: String,
});

// const clientSchema = mongoose.Schema({
//   estateType: {
//     type: String,
//     required: true,
//   },
//   fullName: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   region: {
//     type: String,
//     required: true,
//   },
//   district: {
//     type: String,
//     required: true,
//   },
// });

const ClientData = mongoose.model('NewClient', clientSchema);

export default ClientData;
