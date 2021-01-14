import React, { Component } from 'react'
import Todoitem from "./Todoitem"
export default class Todoinput extends Component {
    render() {
        const{item,handleChange,handleSubmit,editItem}=this.props;
        return (
            <div className="card card-body my-3" >
              <form onSubmit={handleSubmit}>  
                 <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book" />
                        </div>
                    </div>
                
                    <input type="text" className="form-control" placeholder="add a todo list item" value={item} onChange={handleChange}/>                 
                 </div>
                 <button className={editItem?"btn btn-block mt-3 btn-success":"btn btn-block mt-3 btn-primary"}  >{editItem? 'edit item' :'add item'}</button>
               </form>
            </div>
        )
    }
}
