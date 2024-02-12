import mongoose from "mongoose";
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
        default: "clientUser",
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
