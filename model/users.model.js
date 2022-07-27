const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const Users = new Schema({
   name: { type: String },
   age: { type: Number, min: 18, max: 65 },
   address: { type: String },
   gender: {
      type: String,
      match: [
         /male$|female$/,
         'Gender must male or female, please try again ',
      ],
   },
   phone: { type: String },
   email: {
      type: String,
      validate: {
         validator: validator.isEmail,
         message: '{VALUE} is not a valid email',
         isAsync: false,
      },
   },
});

module.exports = mongoose.model('Users', Users);
