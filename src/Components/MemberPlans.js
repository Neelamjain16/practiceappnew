import React, { useEffect, useState } from 'react';
import './MemberPlans.css'


function MemberPlans() {
    const[data,setData]=useState([])

    const url=("")
    useEffect(()=>{
        fetch(url)
        .then(response=>console.log(response.json()))
        .then(json=>{
            console.log("jsooon",json)
            setData(json)
        }).catch(e=>{
            console.log("e",e)
        })
    }, [])
    return (
        <div className="MemberPlans">
            <h2>Member Plan details</h2> 
            {
            //    <div class="boxed">
                            
            //                         <td>Member Plan Id={data.Id}</td>
            //                         <br/>
            //                         <td>Plan name={data.pName}</td>
            //                         <br/>
            //                         <td>Plan Duration={data.duration}</td>
            //                         <br/>
            //                         <td>Plan Amount={data.amount}</td> 
            //                         <button className='btn btn-warning'>update plans</button>
            //             </div>

            <table class="table table-striped">
 
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Member Plan Id={data.Id}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Plan name={data.pName}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Plan Duration={data.duration}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Plan Amount={data.amount}</td> 
    </tr>
    <button className='btn btn-warning'>update plans</button>
  </tbody>
</table>
               }
                
            
            
        </div>
    );
}

export default MemberPlans;