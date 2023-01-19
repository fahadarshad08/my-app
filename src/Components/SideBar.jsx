import React, { useState } from 'react'
import "./SideBar.css";
// import logo from "../images/logo.png"
import { MdSpaceDashboard } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaClipboardList } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdReportGmailerrorred } from 'react-icons/md';
import { MdAnalytics } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { MdOutlineClose } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';
import "./media.css";

function SideBar( props) {

    const [ open, setOpen] = useState (false);
    const toggle = ( ) => setOpen(!open);


  return (

    <div className={`sidebar ${props.mode} bg-${props.mode} ` }>
    <HiMenu className="iconmenu" onClick={toggle} />
    <div className='side'>              

        {/* logo */}
        <div className='logo'>
            {open && <h3>fahad </h3> }
            {/* <img src={logo} alt=""/> */}

            <button id="menu-btn" style={{ height: "fit-content" }}>
              <span>
              </span>
             {/* <MdOutlineClose className='close' id='close-btn'/> */}
            </button>
            </div>


            <div className='menu'>
            <Link  className="link" to="/Dashboard">
             {open&& 
                <div className='menuItem '>     
                <div > 
                <MdSpaceDashboard className='icon-size'/>
                </div>
                <span className='text'>Dashboard</span>
                </div> 
            }
             
 
            </Link  >
                <Link  className="link" to="/Service"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <RiCustomerService2Line className='icon-size'/>
                    </div>
                    <span className='text'>Service</span>
                </div>
                }
                </Link>
                <Link  className="link" to="/Order"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <FaClipboardList className='icon-size'/>
                    </div>
                    <span className='text'>Order</span>
                </div>
                }
                </Link>
                <Link  className="link" to="/Analytics"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <MdAnalytics className='icon-size' />
                    </div>
                    <span className='text'>Analytics</span>
                </div>  
                }
                </Link>
                <Link  className="link" to="/message"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <SiGooglemessages className='icon-size'/>
                    </div>
                    <span className='text'>message</span>
                </div>  
                }
                </Link>
                <Link  className="link" to="/products"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <AiOutlineFileDone className='icon-size'/>
                    </div>
                    <span className='text'>products</span>
                </div>  
                }
                </Link>
                <Link  className="link" to="/Report"> 
                 {open&& 
                 <div className='menuItem '>
                    <div > 
                        <MdReportGmailerrorred className='icon-size'/>
                    </div>
                    <span className='text'>Report</span>
                </div>  
                }
                </Link>
                <Link  className="link" to="/setting"> 
                 {open&& 
                 <div className='menuItem '>
                    <div> 
                        <FiSettings className='icon-size'/>
                    </div>
                    <span className='text'>setting</span>
                </div>  
                }
                </Link>
 { open&&  
                 <Link  className="link" to="/logout"> 
                 <div className='logout'>
                    <div> 
                        <IoMdExit className='icon-size'/>
                    </div>
                    <span className='text'>logout</span>
                   </div>  
                 </Link>
 }
                  </div>
                </div>
                </div>

  )
}

export default SideBar
