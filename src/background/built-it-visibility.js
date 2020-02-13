
let visiblity = false;

const changeVisibility = () =>{
    visiblity = !visiblity;
    render();
} 
const render = () =>{
    const jsx = (
        <div>
            <h2>Visibility Toggel</h2>
    <button onClick={changeVisibility}>{visiblity ? 'hide details' : 'show details'}</button>

    {visiblity && (<div>
        <p>show the corana details</p>        
    </div>)}
        </div>
        

    );

    
ReactDOM.render(jsx,document.getElementById('root'));
}

render();