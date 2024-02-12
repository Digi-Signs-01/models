import mongoose from "mongoose";
const { userType } = require("../enums/User");
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now,
    },
    phone : {
        type : String,
        default : ""
    },
    role: {
        type: String,
        enum: Object.values(userType),
        default: userType.user,
    },
    avatar: {
        type: String,
        default: "",
    },
    screensAllowed : {
        type : [String],
        default : []
    },
    screenGroupsAllowed : {
        type : [String],
        default : []
    },
});

 const User = mongoose.model("UserNewUi", UserSchema);
 export default User;
