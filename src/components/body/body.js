import axios from 'axios';
import "./body.css"
import React, { Component } from 'react';
class Body extends Component {
    state={
        isloading:false,
        items:[]
    }
    componentDidMount(){
        axios.get("https://thronesapi.com/api/v2/Characters").then((res)=>{
            console.log(res.data);
            this.setState({items:res.data,isloading:true})
        })
    }
    render() { 
        
         return this.state.isloading===true ? <div className="main_div">
            
                 <div className="main">
             {this.state.items.map((item)=>{
                 return  <img src={item.imageUrl} alt="" height="250PX" width="250px"/>
             })}
            
         </div>
         
            </div> :<div style={{boxSizing:'border-box',height:"100vh",display:'flex',justifyContent:"center",alignItems:'center'}} class="fa-3x">
 
  <i class="fas fa-spinner fa-pulse"></i>
 
</div>
        
       
    }
}
 
export default Body;