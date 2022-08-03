import React, { useState,useEffect } from 'react';
import AuthService from '../services/AuthService';
import EditUserModal from './modals/EditUserModal';
function Users(){
    const [users, setUsers] = useState('');
    const [isloading, setIsloading] = useState(false);
    const [editaction, setEditaction] = useState(false);
    const [edituser, setEdituser] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const user_info = await AuthService.userListing();
            // console.log(user_info.users);
            if(user_info.users){
                setIsloading(true);
                setUsers(user_info.users);
            }
        }
        fetchData();

    },[]);
    const show_user_info=(evt,user)=>{        
        setEditaction(true);
        setEdituser(user);
    }
    const closeModal=(e)=>{        
        setEditaction(false);
        setEdituser(0);
    }
    const delete_user_info=async (evt,user_id)=>{
        let cflag=confirm('Are you sure to remove this record?');
        if(cflag){
            const deleted_data = await AuthService.deleteUser(user_id);  
            console.log(deleted_data);
        }
    }
    return(
        <>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content"> 
                            <div className="page-header">
                                <div className="page-block">
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className="page-header-title">
                                                <h5 className="m-b-10">User Management</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                                <li className="breadcrumb-item"><a href="index.html">User Management</a></li>
                                                <li className="breadcrumb-item"><a href="index.html">User Listing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                            <div className="main-body">
                                <div className="page-wrapper">                                
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>User Listing</h5>
                                                </div>
                                                <div className="card-block table-border-style">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>First Name</th>
                                                                    <th>Last Name</th>
                                                                    <th>Username</th>
                                                                    <th>Email</th>
                                                                    <th>EIN</th>
                                                                    <th>Phone</th>
                                                                    <th>SSN</th>
                                                                    <th>Birth Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {   isloading ? (
                                                                    users.map((user, i) => {
                                                                        return <tr key={i}> 
                                                                            <td scope="row">{user.id}</td> 
                                                                            <td>{user.firstName}</td> 
                                                                            <td>{user.lastName}</td> 
                                                                            <td>{user.username}</td> 
                                                                            <td>{user.email}</td> 
                                                                            <td>{user.ein}</td> 
                                                                            <td>{user.phone}</td> 
                                                                            <td>{user.ssn}</td> 
                                                                            <td>{user.birthDate}</td> 
                                                                            <td><a className="tag" onClick={(evt)=>show_user_info(evt,user)}>Edit</a> &nbsp;<a  className="tag" onClick={(evt)=>delete_user_info(evt,user.id)}>Delete</a></td> 
                                                                        </tr>
                                                                    })
                                                                ) : (
                                                                    <tr><td> No Record Found.</td></tr>
                                                                )
                                                            }
                                                                                                                         
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="edit_user_popup"></div> 
            {   editaction &&  edituser &&
                <EditUserModal user={edituser} showpop={editaction} destroyModal={()=>closeModal()}/>                
            }
        </>
    );
}
export default Users;