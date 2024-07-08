import mongoose, { Document, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

// Create User model based on user schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
