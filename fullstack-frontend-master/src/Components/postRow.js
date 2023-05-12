import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:8080/post/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Order Successfully Deleted....")
        // window.location.replace('/inventoryView/'+this.props.obj.email);
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.pName}
               </td>
               <td>
                   {this.props.obj.stock}
               </td>
               <td>
                   {this.props.obj.pCode}
               </td>
               <td>
                   {this.props.obj.cost}
               </td>
               <td>
                   {this.props.obj.vender}
               </td>
               <td>
                   <Link to={"/edit/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;