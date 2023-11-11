const { default: mongoose, Schema, models } = require("mongoose");

const userSchema=new Schema({

email:{
type :stringify,required:true

},
name:{
    type:stringify,
    required:true
}
},
{timestamps:true}

)
const User = models.User|| mongoose.model("User",userSchema);
export default User;