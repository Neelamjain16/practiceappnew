import React, { useEffect, useState } from 'react';
import './PlanDetails.css'
import { Link } from 'react-router-dom';


function PlanDetails() {
    const [data, setData] = useState([])
    const url = "http://localhost:4094/api/Plan"
    useEffect(() => {
        fetch(url)
            .then(response => response.json()).then(json => {
                console.log("jsooon", json)
                setData(json)
            }).catch(e => {
                console.log("e", e)
            })
    }, [])
    return (
        <div className="PlanDetails">
            <h2>Plan details</h2>
            {
                data.map(item => {
                    return (
                        <div key={item.pId} className="boxed">
                            {/*                             
                                    <td key={item.pId+1}>Plan Id={item.pId}</td>
                                    <br/>
                                    <td key={item.pId+2}>Plan name={item.pName}</td>
                                    <br/>
                                    <td key={item.pId+3}>Plan Duration={item.duration}</td>
                                    <br/>
                                    <td key={item.pId+4}>Plan Amount={item.amount}</td> 
                                    <button key={item.pId+5}className='btn btn-warning'>Select</button>
                                    <td><Link to ={"/update/"+item.pId}>Update plan</Link></td> */}
                            <table class="table table-striped">
                                <thead>  
                                <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td key={item.pId+1}>Plan Id={item.pId}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td key={item.pId+2}>Plan name={item.pName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td key={item.pId+3}>Plan Duration={item.duration}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td key={item.pId+4}>Plan Amount={item.amount}</td> 
                                    </tr>
                                    <button key={item.pId+5}className='btn btn-warning'>Select</button>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PlanDetails;