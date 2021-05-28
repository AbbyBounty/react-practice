class Person {

    constructor(name, address, phone) {
        console.log(`inside ctor`)
        this.name = name;
        this.address = address;
        this.phone = phone
    }

    printInfo() {
        console.log(this.name + this.address + this.phone)

    }

    getDescription(){
        console.log(this.address)
    }

}


const person = new Person("abby", "pune", "090900")
person.printInfo()
person.getDescription()
