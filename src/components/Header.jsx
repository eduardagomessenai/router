import { Link } from "react-router-dom"

const navigation = [
    {component: "/", name:"Home"},
    {component: "/contact", name:"Contato"},
    {component: "/sobre", name:"Sobre"},
    {component: "/login", name:"Login"},
];

const Header = () => {
  return (
    <nav>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contato</Link> */}
        {navigation.map((iten) => (
            <Link key={iten.name} to={iten.component}>{iten.name}</Link>
        ))}
    </nav>
  );
};

export default Header