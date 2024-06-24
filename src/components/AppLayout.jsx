import Projects from "../Project/Projects";
import Body from "./Body";
import BodyFood from "./BodyFood";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  // call
  const obj = {
    name: "Prabhat",
  };
  function display(a, b = "") {
    console.log(this.name + " " + a + " " + b);
  }
  ////display.call(obj, "Chandu", "Sinha");

  // apply
  //display.apply(obj, ["Chandra", "Sinha"]);

  //bind
  // const bind = display.bind(obj);
  // bind("Chandra");

  let person = {
    frname: "Saroj",
    getName: function () {
      console.log(this.frname);
    },
  };
  setTimeout(person.getName, 5000); // undefined
  const funBind = person.getName.bind(person);
  setTimeout(funBind, 3000); // undefined

  // function sum(a) {
  //   return function (b) {
  //     if (b) return sum(a + b);
  //     return a;
  //   };
  // }
  // console.log(sum(1)(2)(3)());

  // let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

  // const res = arr.filter((item, index) => {
  //   return arr.indexOf(item) === index;
  // });
  // console.log(res);

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
