console.log('hrllo')


const personName = `Person 1`
const contact = `09090909909`


// const person = {
//     name: 'Person2',
//     address: 'pune'
// }


const person = ['person1', 'person2', 'person3']

const template = (
    <div>
        <h3>App1 </h3>
        {/* <div>Name: {person.name}</div>
        <div>phone: {person.address}</div> */}

        {person.map((per) => {
            return <p>{per}</p>
        })}
    </div>
)



const root = document.getElementById("app")

ReactDOM.render(template, root)