import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        default:
          'https://images.app.goo.gl/wL8Xw9xPRLcmAZDK8',
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );

const User = mongoose.model('user', userSchema);