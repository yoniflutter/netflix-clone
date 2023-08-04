import  logo from '../assets/images/logo.png';
const Header = () => {
    return ( 
        <div className="Header">
            <nav>
                <div className="Logo">
                    <img src={logo} height={"44px"} alt="Logo" />
                </div>
                <div className="Btn">
                    <button className='Signin'>Sign In</button>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;