class Person{
    constructor(name,address,age){
        this.name=name
        this.address=address
        this.age=age
    }

    printInfo(){
        console.log(this.name+this.address+this.age)
        console.log('')
    }
}

class Student extends Person{
    constructor(roll,name,address,age){
        super(name,address,age)
        this.roll=roll
    }
printInfo(){
    console.log(this.roll)
    super.printInfo()

}
    
}



const p=new Person('person1','pune',20)
p.printInfo()

const s=new Student(1,'student 1','mumbai',33)
s.printInfo()