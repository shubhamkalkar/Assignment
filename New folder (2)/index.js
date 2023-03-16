

const heading1 = React.createElement("p",{},"I like React");


const heading2 = React.createElement("h1",{},"I like front development");

const container = React.createElement("div",{},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);