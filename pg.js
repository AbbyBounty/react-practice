const personName = `abby`;
const age = 20;
const address = "pune";

const template = (
    <div>
        <h1>Person</h1>
        <div>
            <strong>name</strong> {personName}
        </div>
        <div>
            <strong>age</strong> {age}
        </div>
        <div>
            <strong>address</strong> {address}
        </div>
        <div>

        </div>
        <div>
            
        </div>
    </div>
);

const root = document.getElementById("app");

ReactDOM.render(template, root);
