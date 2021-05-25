console.log('hrllo')





const person = {
    name: 'Person2',
    address: 'pune',
    
}



const template = (
    <div>
        <h3>App1 </h3>
        <div>Name: {person.name}</div>
        <div>phone: {person.address}</div>
        {/* {conditinal compilation} */}
            {
                person.email && <div>Email : {person.email}</div>
            }

    
    </div>
)



const root = document.getElementById("app")

ReactDOM.render(template, root)


{/* <div>phone: {person.email ? person.email : 'N/A'}</div> */}
