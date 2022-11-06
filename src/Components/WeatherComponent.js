import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WeatherComponent.css';

WeatherComponent.propTypes = {
    
};

function WeatherComponent(props) {
    //var data;
    var[wdata,setwdata]=useState({wdate:'',
       tc:0,
       tf:0,
       wsummary:''});
    
    var callme=()=>{
        //alert('hello')
        setwdata(()=>{
            return{wdate:props.wdate,
            tc:props.tc,
            tf:props.tf,
            wsummary:props.wsummary}
        });
    }
    return (
        <div className='alert alert-info weather'>
            Date:{wdata.wdate.toString()}
            <br/>
            TemperatureC:{wdata.tc}
            <br/>
            TemperatureF:{wdata.tf}
            <br/>
            Summary:{wdata.wsummary}
            <br/>
            <button onClick={callme} className='btn btn-primary'>Show</button> 
        </div>
    );
}

export default WeatherComponent;