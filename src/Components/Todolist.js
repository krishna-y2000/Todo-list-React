import React, { Component } from 'react'
import Todoitem from "./Todoitem"
export default class Todolist extends Component {
    render() {
      const {items,clearList,handleDelete,handleEdit,editItem} =this.props;
        return (
            <div>           
              <ul className="list-group my-3">                
                <h3 className="text-capitalize text-center" > TodoList</h3>
               {
                 items.map(item=>{
                  return( <Todoitem key={item.id } 
                  title={item.title} 
                  handleDelete={() =>
                    handleDelete(item.id)}
                    handleEdit={() =>
                      handleEdit(item.id)}
                      
                          />
                        )
                 })
               }
              
               
                <button className="btn btn-danger btn-block mt-5" onClick={clearList}>Clear list </button>
              </ul>

            </div>

        )
    }
}
