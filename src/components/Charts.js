import React, { useState,useEffect } from 'react';
import { BarChart,Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

import moment from 'moment'
const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  
  
function Charts(){
    // const [users, setUsers] = useState('');
    // const [isloading, setIsloading] = useState(false);  
    const handleDateClick=(arg)=>{
     console.log(arg, "props");
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
                                                <h5 className="m-b-10">User Analysis Chart</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                                <li className="breadcrumb-item"><a href="index.html">User Analysis Chart</a></li>
                                                <li className="breadcrumb-item"><a href="index.html">User Analysis Chart</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                            <div className="main-body">
                                <div className="page-wrapper">                                
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>Email Analysis Chart</h5>
                                                </div>
                                                <div className="card-block table-border-style">                                                    
                                                    <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                    </LineChart>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>Amount Analysis Chart</h5>
                                                </div>
                                                <div className="card-block table-border-style">                                                    
                                                    <BarChart width={700} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis dataKey="amt"/>
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="amt" barSize={20} fill="#8884d8" />
                                                    </BarChart>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* calender view  */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <FullCalendar
                                            plugins={[ dayGridPlugin,interactionPlugin ]}
                                            initialView="dayGridMonth"
                                            weekends={false}
                                            events={[
                                                { title: 'event 1', date: '2022-08-01' },
                                                { title: 'event 2', date: '2022-08-02' }
                                            ]}
                                            dateClick={()=>{handleDateClick()}}
                                        />
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
export default Charts;