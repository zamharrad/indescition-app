
var varRoot = document.getElementById("root")

const app = {
    titile: 'Indescition-App',
    subtitle: 'put your hands on the computer',
    options:[]
}


const removeAll = () => {
    app.options = [];
    render();
}

const onFormSubmit = (e) =>{
 e.preventDefault();

 const option = e.target.elements.username.value;

 if(option){
     app.options.push(option);
     e.target.elements.username.value ='';
 }
 render();
}

    const render = () =>{

        const template = (<div>
    <h2 >{app.titile}</h2>
    <p>{app.subtitle}</p>

    <p>{app.options.length > 0 ? 'here are your options' : 'No option available'} </p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) =>{
                        return <li key={option}>{option}</li>;
                    }) 
                }
            </ol>
        <ui>
            <li>One</li>
            <li>Two</li>
        </ui>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="username"></input>
        <button onClick=""> Submit</button>
    </form>
</div>

        )
        ReactDOM.render(template,varRoot);
    };

render();


