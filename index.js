// const heading = React.createElement("h1",{},"Hello React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Add Attribute
// const heading = React.createElement(
// "h1",
// {id:"heading"},
// "Hello React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Task 1
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *              <h1>Hello Prabhat</h1>
 *       </div>
 * </div>
 * 

 * 
 */

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const headingDiv = React.createElement(
//  "div",
// {id:"parent"},
//     React.createElement(
//         "div", 
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "Hello Prabhat"
//         )
//     )
// )

// root.render(headingDiv)


// Task 2
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *            <h1>Hello Prabhat</h1>
 *            <h2>Chandra</h2>
 *       </div>
 * </div>
 * 

 * 
 */

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const headingDiv = React.createElement(
//  "div",
// {id:"parent"},
//     React.createElement(
//         "div", 
//         {id:"child"},
//         [React.createElement(
//             "h1",
//             {},
//             "Hello Prabhat"
//         ),React.createElement(
//             "h2",
//             {},
//             "Hello Chandra"
//         )]
//     )
// )

// root.render(headingDiv)


// Task 3
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *            <h1>Hello Prabhat</h1>
 *            <h2>Chandra</h2>
 *       </div>
 *      <div id="child2">
 *            <h1>Hello Prabhat</h1>
 *            <h2>Chandra</h2>
 *       </div>
 * </div>
 * 

 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))
const headingDiv = React.createElement(
 "div",
{id:"parent"},
[React.createElement("div", {id:"child"},[React.createElement( "h1",{},"Hello Prabhat"), React.createElement("h2",{},"Hello Chandra")]),
React.createElement("div", {id:"child2"},[React.createElement( "h1",{},"Hello Saroj"), React.createElement("h2",{},"Hello Singh")])
]
)

root.render(headingDiv)