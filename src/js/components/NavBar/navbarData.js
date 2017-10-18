exports.NavbarData = {
    brand :
    {linkTo: "#", text: "Site Brand", image: "images/globe.png"},
    links : [
    {linkTo: "#", text: "Link 1", active: true},
    {linkTo: "#", text: "Link 2"},
    {dropdown: true, text: "Dropdown", links: [
        {linkTo: "#", text: "Dropdown Link 1"},
        {linkTo: "#", text: "Dropdown Link 2"},
        {linkTo: "#", text: "Dropdown Link 3"}
    ]},
    {linkTo: "#", text: "Link 3"}
    ]
};
    