

const addOne = () => {
    count++;
    varRender();
}
var count =5;

var varRoot = document.getElementById("root")

const varRender = () => {
    var tem =( <div>
        <h2>Count :{count}</h2>
        <button onClick={addOne} id="my-id">+1</button>
        <ui>
            <li>One</li>
            <li>Two</li>
        </ui>
     </div>  
    );

    ReactDOM.render(tem,varRoot)
}

varRender();
