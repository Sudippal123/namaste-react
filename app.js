const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{id:"heading"},"Hello I am nested react script h1"),
                React.createElement("h2",{id:"heading2"},"Hello I am nested react script h2")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{id:"heading"},"Hello I am nested react script h1"),
                React.createElement("h2",{id:"heading2"},"Hello I am nested react script h2")
            ]
        )
    ]
)
console.log(parent)

const h1 =React.createElement("h1",{id:"heading",xyz:"test"},"Hello World React!!");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
