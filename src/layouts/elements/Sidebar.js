import { Link } from 'react-router-dom'
function Sidebar(){
    return(
        <>
             <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>
        
            <nav className="pcoded-navbar">
                <div className="navbar-wrapper">
                    <div className="navbar-brand header-logo">
                        <Link to="/dashboard" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Datta Able</span>
                        </Link>
                        <a className="mobile-menu" id="mobile-collapse" href="index.html"><span></span></a>
                    </div>
                    <div className="navbar-content scroll-div">
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption">
                                <label>Navigation</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                                <Link to="/dashboard" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                            </li>
                            <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item ">
                                <Link to="/users" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">User Mangement</span></Link>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                                <Link to="/products" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Products Mangement</span></Link>
                            </li>
                            <li data-username="Table bootstrap datatable footable" className="nav-item">
                                <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server"></i></span><span className="pcoded-mtext">Table</span></a>
                            </li>
                            <li data-username="Charts Morris" className="nav-item">
                                <Link to="/charts" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Chart</span></Link>
                            </li>
                            <li data-username="Maps Google" className="nav-item"><a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Maps</span></a></li>
                            
                            <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li>
                            <li data-username="Disabled Menu" className="nav-item "><a href="index.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Logout</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Sidebar;