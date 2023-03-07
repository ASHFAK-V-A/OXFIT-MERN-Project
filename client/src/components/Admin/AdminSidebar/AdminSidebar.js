import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import  './AdminSidebar.css'



function AdminSidebar() {



useEffect(()=>{

    
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
},[])



  return (




    <div>
       
      <body className='sidebar-body' id="body-pd">
         <header className="header " id="header">
            <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
           <button className='btn btn-primary'>Logout</button>
              </header> 
    <div className="admin-body">

        <div className="l-navbar" id="nav-bar">
          <nav className="nav"> 
            <div>
              <Link  className="nav_logo">
                <i className="bx bx-dumbbell nav_logo-icons"></i>{' '}
                <span className="nav_logo-names">OXFIT-Admin Panel</span>
              </Link>
       
              <div className="nav_lists">
                <Link to='/dashboard'  className="nav_link active">
                  <i className="bx bxs-home nav_icon"></i>{' '}
                  <span className="nav_name">Home</span>
                </Link>
            

         
                <Link to='/members'  className="nav_link">
                  <i className="bx bxs-group nav_icon"></i>{' '}
                  <span className="nav_name">Members Managment</span>
                </Link>
                <Link  className="nav_link">
                  <i className="bx bx-run nav_icon" ></i>{' '}
                  <span className="nav_name">Staff Managment</span>
                </Link>
                <Link to ='/addmember' className="nav_link">
                  <i className="bx bxs-user-plus nav_icon" ></i>{' '}
                  <span className="nav_name">Add Member</span>
                </Link>
              
                <Link href="#" className="nav_link">
                  <i className="bx bxs-receipt nav_icon"></i>{' '}
                  <span className="nav_name">Payment's</span>
                </Link>
                <Link href="#" className="nav_link">
                  <i className="bx bxs-bell nav_icon"></i>{' '}
                  <span className="nav_name">Notification</span>
                </Link>  
          
              </div>
            </div>

     
          </nav>

          </div>
        

    </div>

          </body>
    </div>
  )
}

export default AdminSidebar
