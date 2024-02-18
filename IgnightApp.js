import React from "react";
import ReactDOM from "react-dom/client";

// // React.createContext => ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement("h1",{},"Hello App React Prabaht");
const root = ReactDOM.createRoot(document.getElementById("root"));

// // JSX => React.createContext => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = (<h1 className="head" tabIndex={0}>Hello App React Jsx</h1>)
// // root.render(heading);
// root.render(jsxHeading);
const Title = (
    <div>
        <h1>Namaste React Function Title</h1>
    </div>
) 
const Title2 = ()=> (
    <div>
        <h1>Namaste React Function Title2 Com2</h1>
    </div>
);
const Title3 = ()=> (
    <div>
        <h1>Namaste React Function Title3 Com</h1>
    </div>
);
const HeaderComponent = ()=>(
    <div>
        {/* element  */}
        {Title} 
         {/* component  */}
        {<Title2/>}
         {/* component call */}
        {Title3()}
        <Title2/>
        <h1>Namaste React Function component</h1>
    </div>

)
root.render(<HeaderComponent/>);