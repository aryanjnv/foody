const heading=React.createElement("h1",{id:"heading"},"Hello world From React");
 const root=ReactDOM.createRoot(document.getElementById("root"));


const parent=React.createElement("div",{id:"parent"},[
React.createElement
("div","id:child1",[
React.createElement
("h1",{},"I am in h1 child1"),
("h2",{},"I am in h2 child1")
]
),
("div","id:child2",[
React.createElement
("h1",{},"I am in h1 child2"),
("h2",{},"I am in h2 child2")
]
)
])
 root.render(parent);