exports.NavbarData = {
    links : [

    {dropdown: true, text: "All Category",  className : "dropdown-toggle", links: [
        {linkTo: "#", text: "Dropdown Link 1"},
        {linkTo: "#", text: "Dropdown Link 2"},
        {linkTo: "#", text: "Dropdown Link 3"},
        {sample: true, text: "Computers", className : "dropdown-toggle", links2: [
            {linkTo: "#", text: "Dropdown Link 3"},
            {linkTo: "#", text: "Link 1", },
            {linkTo: "#", text: "Link 2"},
        ]}
    ]},
    ]
};