console.log('hrllo')





const products = [
    { id: 1, title: 'product1', description: "des 1", reviews: ["worst"] },
    { id: 1, title: 'product1', description: "des 1", reviews: ["worst"] },
    { id: 1, title: 'product1', description: "des 1" },
    { id: 1, title: 'product1', description: "des 1", reviews: ["worst"] },
    { id: 1, title: 'product1', description: "des 1" }
]


const template = (
    <div>
        <h3>App3 </h3>

        {
            products.map((product) => {
                return (<div >
                    <div>title:{product.title}</div>
                    <div>id:{product.id}</div>
                    <div>description:{product.description}</div>
                    {product.reviews && <div> Review : {product.reviews}</div>}
                    <hr></hr>
                </div>
                )
            })
        }

    </div>
)



const root = document.getElementById("app")

ReactDOM.render(template, root)


