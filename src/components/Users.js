import AuthService from '../services/AuthService';
import React, { useState,useEffect } from 'react';
function Users(){
    const [users, setUsers] = useState('');
    const [isloading, setIsloading] = useState(false);
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
                                                <h5 className="m-b-10">User Mangement</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                                <li className="breadcrumb-item"><a href="index.html">User Mangement</a></li>
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
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {   isloading ? (
                                                                    users.map((e, i) => {
                                                                        return <tr key={i}> 
                                                                            <td scope="row">{e.id}</td> 
                                                                            <td>{e.firstName}</td> 
                                                                            <td>{e.lastName}</td> 
                                                                            <td>{e.username}</td> 
                                                                            <td>{e.email}</td> 
                                                                            <td>{e.ein}</td> 
                                                                            <td>{e.phone}</td> 
                                                                            <td>{e.ssn}</td> 
                                                                            <td>{e.birthDate}</td> 
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
        </>
    );
}
export default Users;