import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'


function SideBar() {



  useEffect(() => {


    
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header 
          headerpd.classList.toggle('body-pd');
        });
      }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_links');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('actives'));
        this.classList.add('actives');
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));
  }, []);





  return (

    <>  

  

      <body className='sidebar-body' id="body-pd">
         <header className="header " id="header">
            <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
            <div className="header_img"> <img src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1" alt=""/> </div>
        </header> 
    <div className="main-body">

        <div className="l-navbar bg-white" id="nav-bar">
          <nav className="nav"> 
            <div>
              <Link  className="nav_logo">
                <i className="bx bx-dumbbell nav_logo-icon"></i>{' '}
                <span className="nav_logo-name">OXFIT</span>
              </Link>
              <div className="nav_list">
                <Link to='/' className="nav_links actives">
                  <i className="bx bx-home nav_icon"></i>{' '}
                  <span className="nav_name">Home</span>
                </Link>
                <Link to='/admission' className="nav_links">
                  <i className="bx bx-detail nav_icon"></i>{' '}
               <span className="nav_name" >Admission</span> </Link> 

         
                <Link to='/members' className="nav_links">
                  <i className="bx bx-group nav_icon"></i>{' '}
                  <span className="nav_name">Members</span>
                </Link>
                <Link  className="nav_links">
                  <i className="bx bx-message-square-detail nav_icon"></i>{' '}
                  <span className="nav_name">Messages</span>
                </Link>
           
                <Link  className="nav_links">
                  <i className="bx bx-bell nav_icon"></i>{' '}
                  <span className="nav_name">Notification</span>
                </Link>  <Link className="nav_links">
                  <i className="bx bx-receipt nav_icon"></i>{' '}
                  <span className="nav_name">Payment's</span>
                </Link>
                <Link  className="nav_links">
                  <i className="bx bx-user nav_icon"></i>{' '}
                  <span className="nav_name">Profile</span>
                </Link>
              </div>
            </div>

            <Link  className="nav_links">
              <i className="bx bx-log-out nav_icon"></i>{' '}
              <span className="nav_name">Logout</span>
            </Link>
          </nav>

          </div>
        

    </div>

          </body>


        </>
)
}
export default SideBar