const  mongoose = require("mongoose");
const {Schema} = mongoose


const StudentSchema = new Schema({
    name:{
        type:String
    },
    phoneno:{
        type:Number
    },
    clas:{
        type:String
    },
    rollno:{
        type:Number
    },
    
    maths:{
        type:Number
    },
    science:{
        type:Number
    },
    Kannada:{
        type:Number
    },
    Hindi:{
        type:Number
    },
    total:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now()
    },
    udate:{
        type:Date,
    }
})

module.exports = mongoose.model("StudentSchema", StudentSchema)

