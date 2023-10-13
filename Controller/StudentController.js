const StudentSchema = require('../Module/StudentSchema');

const StudentInsert = async (req, res) => {
    try {
        const {name,phoneno,clas,rollno,maths,science,Kannada,Hindi} = req.body
        let marks = [{maths,science,Kannada,Hindi, total: maths+science+Kannada+Hindi}]
        

        const Student  = await new StudentSchema({
            name:name,
            phoneno:phoneno,
            clas:clas,
            rollno:rollno,
            marks
            // date:date
        })
        
        const savestd = await Student.save();
        res.send(savestd)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")
    }
};

//display

const Display = async (req, res) => {
    try {
        const Student = await StudentSchema.findById(req.params.id)
        if(!Student){
        res.send("Not Found try to add other id")
    }
   
     res.json([{name:Student.name, maths:Student.maths, Science: Student.science,hindi:Student.Hindi,Kannnada:Student.Kannada, total:Student.total}])
    } catch (error) {

         console.log(error);
        res.status(500).send("Internal Error")
        
    }
}

//delete

const Delete = async (req, res) => {
    let Student = await StudentSchema.findById(req.params.id)
    if(!Student){
        return res.send("Not Found")
    }

    Student = await StudentSchema.findByIdAndDelete(req.params.id)
    res.send({success: "Deleted", student:Student})
}

//update

const Update = async (req, res) => {

    const {name,phoneno,clas,rollno,maths,science,Kannada,Hindi} = req.body
    // const {name,phoneno,clas,rollno,maths,science,Kannada,Hindi} = req.body
    
   
    try {

        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const day = new Date().getDate()
        const date = `${year}-${month}-${day}`
        
        let newStudent = {udate:date}
        
        
        if(marks) {

        if(name) {newStudent.name  = name}
        if(phoneno) {newStudent.phoneno  = phoneno}
        if(clas) {newStudent.clas  = clas}
        if(rollno) {newStudent.rollno  = rollno}
        if(maths) {newStudent.marks[0].maths  = maths}
        if(science) {newStudent.marks[0].science  = science}
        if(Kannada) {newStudent.marks[0].Kannada  = Kannada}
        }


        
        let Student = await StudentSchema.findById(req.params.id)
        if(!Student){
            res.send("Note Found")

        }
        Student = await StudentSchema.findByIdAndUpdate(req.params.id, { $set: newStudent}, {new:true})
        res.send(Student)
        

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal error")
    }
}

module.exports = {StudentInsert, Display, Delete, Update};




