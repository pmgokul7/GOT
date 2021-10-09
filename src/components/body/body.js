import axios from 'axios';
import "./body.css"
import React, { Component } from 'react';
import logo from "../../logo.png"
class Body extends Component {
    state={
        isloading:true,
        items:[],
        input:""
    }
    componentDidMount(){
        axios.get("https://thronesapi.com/api/v2/Characters").then((res)=>{
            console.log(res.data);
            this.setState({items:res.data,isloading:true})
        })
    }
  render(){
      const {items,input}=this.state;
      return <div className="container">
       <div className="in">
         <input type="text" placeholder="search.." onChange={(e)=>{
           this.setState({input:e.target.value})
         }} value={this.state.input}/>
         <img className="logo" src={logo} alt=""  height="100px" width="150px"/>
       </div>
      
      
      <div className="main">
       
       
        
      
      {
          items.filter(item=>{
            if(input=="")
            {
              return item
            }
            else if(item.fullName.toLowerCase().includes(input.toLowerCase()))
            {
              return item
            }
          }).map((item)=>{
            return <div className="inner">
                <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={item.imageUrl} alt="Avatar" style={{width:"300px",height:"300px"}}/>
              </div>
              <div class="flip-card-back">
                <br/>
                <h1>{item.fullName}</h1>
                <hr/>  <br/>
                <p>{`Family:${item.family}`}</p> <br/>
                <p>{`Title:${item.title}`}</p>
              </div>
            </div>
          </div>
            </div>
          
        
          })
      }
          </div>

      
      
            
          

         
      
 
      </div>
  }
}
 
export default Body;