import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const userSchema = new Schema({ 
    name: {
        type: String,
        required: true,
    },
    username :{
      type:String,
      required:true,
      unique:true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
  });
    
const User = model('User', userSchema);

export default User;