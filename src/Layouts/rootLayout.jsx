import { Link, NavLink, Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {MoneyCollectFilled, UsergroupAddOutlined, FileAddOutlined} from '@ant-design/icons';
import Nav from "../components/Nav";
import { HomeTwoTone, FileAddTwoTone, MoneyCollectTwoTone } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import '../assets/styles/cards.css'

const RootLayout = ({ children }) => {
    return (
    <>
    <Nav />
     <div className="container">
        <nav className="root">
          <ul>
            <NavLink to="/"><li><HomeTwoTone /> Home</li></NavLink>
            <NavLink to="/post"><li><FileAddTwoTone /> Post</li></NavLink>
            <NavLink to="/seed"><li><MoneyCollectTwoTone /> Seed/Giving</li></NavLink>

          </ul>


        </nav>

        <div className="main">
          {/* Home Card Component will be here.  */}
          <div className="card-container">
           <NavLink to="/">
            <div className="card">
              <b><UsergroupAddOutlined /> Users</b>
              <h2> 2k</h2>
            </div>
           </NavLink>

           <NavLink to="/post">
            <div className="card">
              <b><FileAddOutlined /> Post</b>
              <h2>100</h2>
            </div>
           </NavLink>

           <NavLink to="/seed">
            <div className="card">
              <b><MoneyCollectFilled /> Seed</b>
              <h2>$100M</h2>
            </div>
           </NavLink>
          </div>

          <hr style={{marginBottom: "30px"}}/>
          {/* <h1>Cards should be here</h1>
          <Link to="/"><p>Home</p></Link>
          <Link to="/post"><p>Post</p></Link> */}
         <Outlet>
           {children}
         </Outlet>
        </div>

     </div>
     </>
    );
  };
  
  export default RootLayout;