import mongoose from "mongoose"
import NextCors from 'nextjs-cors';

const connectToDB = handler => async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect('mongodb://localhost:27017/domnikpizza');
  return handler(req, res)
}

export default connectToDB;