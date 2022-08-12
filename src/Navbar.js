// a component is just a function that returns a jsx template and that function is exported at the bottom of the file
// sfc+tab : stateless functional component
// { } means dynamic value
// {{ }} means object inside dynamic value

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mooji Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create"> New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;