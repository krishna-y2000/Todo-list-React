import React, { Component } from 'react'
import Todolist from "./Components/Todolist";
import Todoinput from "./Components/Todoinput";
import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid"; 

export default class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  }
  handleChange =(e) =>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit =(e) =>{
    e.preventDefault()
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    
    
    const updatedItems=[...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:"",
      id:uuid(),
      editItem:false
    })
  };
  clearList =() =>{
    this.setState({
      items:[]
    })
  }
  handleDelete = (id) =>{
    const filterItem=this.state.items.filter(item =>item.id !==id);   
      this.setState({
        items:filterItem
      });  
  }
  handleEdit= (id) =>{
    const filterItem=this.state.items.filter(item =>
      item.id !==id);
      this.setState({
        items:filterItem
      });
      const selectItem=this.state.items.find(item => item.id===id)
      console.log(selectItem);
      this.setState({
        items:filterItem,
        item:selectItem.title,
        editItem:true,
        id:id
      })
  }
  render() {
    return (
      <div className="container"> 
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                  <h1 className="text-capitalize text-center">Todo Input </h1>
                  <Todoinput  item={this.state.item} handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                  <Todolist items={this.state.items} clearList={this.clearList}
                   handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
              </div>  
          </div>  
      </div>
    )
  }
}
