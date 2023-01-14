let student = {
    firstName: 'Abhishek',
    lastName: 'Sahu',
    birthYear: 1993,
    getFullName: function(){
        return this.firstName+" "+this.lastName
    },
    getAge:function(){
        let age = new Date().getFullYear()-this.birthYear -1;
        return age
    }
}

console.log(student.getFullName());
console.log(student.getAge());
