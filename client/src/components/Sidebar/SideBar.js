import React, { useEffect } from 'react';
import './SideBar.css';

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
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));
  }, []);

  return (
    <>   
      <body className='sidebar-body' id="body-pd">
      <header class="header" id="header">
            <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
            <div class="header_img"> <img src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1" alt=""/> </div>
        </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a href="#" className="nav_logo">
                <i className="bx bx-dumbbell nav_logo-icon"></i>{' '}
                <span className="nav_logo-name">OXFIT</span>
              </a>
              <div className="nav_list">
                <a href="#" className="nav_link active">
                  <i className="bx bx-home nav_icon"></i>{' '}
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-detail nav_icon"></i>{' '}
                  <span className="nav_name">Admission</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-group nav_icon"></i>{' '}
                  <span className="nav_name">Members</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-message-square-detail nav_icon"></i>{' '}
                  <span className="nav_name">Messages</span>
                </a>
           
                <a href="#" className="nav_link">
                  <i className="bx bx-bell nav_icon"></i>{' '}
                  <span className="nav_name">Notification</span>
                </a>  <a href="#" className="nav_link">
                  <i className="bx bx-receipt nav_icon"></i>{' '}
                  <span className="nav_name">Payment's</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-user nav_icon"></i>{' '}
                  <span className="nav_name">Profile</span>
                </a>
              </div>
            </div>
            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon"></i>{' '}
              <span className="nav_name">Logout</span>
            </a>
          </nav>
          </div>
          </body>
        </>
    
)
}
export default SideBar