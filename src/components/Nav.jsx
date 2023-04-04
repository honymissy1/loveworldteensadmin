import ImageLogo from '../assets/images/LW Teens Ministry.png'


const Nav = () => {
    return (
    <div className="top-nav">
        <img src={ImageLogo} alt="logo" />
        <div className="admin-title">
            <h6>ADMIN</h6>
            <p>Ayomide Mike</p>
        </div>
    </div>
    );
  };
  
  export default Nav;