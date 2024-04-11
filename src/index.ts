import { CareerOneStopHelper } from "./career-one-stop.helper";

const apiHelper = new CareerOneStopHelper( {
  userId: process.env.USER_ID || '',
  token: process.env.TOKEN || '',
  baseUrl: process.env.BASE_URL || ''
} );