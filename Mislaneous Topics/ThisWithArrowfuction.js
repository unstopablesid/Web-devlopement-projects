

marks = "90%";

const stud = {
    name:"mayur",
    age:20,
    marks: "95%",
    getName : function () {
        console.log(this.name);
    }
    ,
    getMarks : () =>{
        console.log(this.marks);
    }

}
stud.getMarks();
stud.getName();