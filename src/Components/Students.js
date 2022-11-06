import React from 'react'
import './Students.css'
class Students extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Students Constructed");
    }
    render() {

        return (
            <div className="alert alert-info">
                <h2>Students Details</h2>
                {/* Student Id : {this.props.sid}
                <br/>
                Student Name : {this.props.sname}
                <br/>
                Student Age : {this.props.sage}
                <br/>
                {new Date(2022,9,27).toISOString()} */}
                <table class="table table-striped">

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            Student Id : {this.props.sid}
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            Student Name : {this.props.sname}
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            Student Age : {this.props.sage}
                        </tr>
                        new Date(2022,9,27).toISOString()
                    </tbody>
                </table>
            </div>

        );
    }

}
export default Students;