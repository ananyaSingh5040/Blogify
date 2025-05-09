import mongoose from "mongoose";
import { randomBytes } from "crypto";

const { createHmac } = await import("node:crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhotoUrl: {
      type: String,
      default: "/public/images/profile.jpg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function () {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
    this.salt = salt;
    this.password=hashedPassword;
});
const User = mongoose.model("user", userSchema);
export default User;
