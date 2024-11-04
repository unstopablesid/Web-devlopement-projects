const student ={
    name:"mayur",
    age:20,
    math : 95,
    science :95,
    english : 85,
    getAvg(){
        let avg = (this.math + this.science + this.english)/3;
        console.log(avg);
    }
}
student.getAvg();