import React, { Component } from 'react';
import axios from 'axios';
class Checkbox extends Component {
  constructor(){
    super()
    this.state={
      checkedData:null,
      noData:false,
      sportsData:null,
      electronicsData:null
    }
  }

  check(key){
    if(key){
      fetch('http://my-json-server.typicode.com/habilelabs/fake-products/products').then((data)=>{
      data.json().then((resp) =>{
        console.warn('resp',resp)
        if (resp.length>0) { 
          this.setState({noData:false})
          this.setState({checkedData:resp})
          this.setState({sportsData: resp.map(val=> {
            if( val.stocked === true){
               return val
            }
          })})
          this.setState({electronicsData: resp.map(val=>{
            if( val.stocked === true){
              return val
           }
          })})
        }
        else
        {
          this.setState({noData:true}) 
          this.setState({electronicsData:null});
          this.setState({sportsData:null});
        }
        
      })
    })
    }else{
      this.setState({noData:true})
      this.setState({electronicsData:null});
      this.setState({sportsData:null});
    }
  }
  

  render(){
    console.log(this.state.sportsData);
    // console.log(this.state.electronicsData);
    return(
        <div>
        <label>Checkbox</label>
        <input className='box1' type='checkbox' onChange={(event)=>this.check(event.target.value)} />
        <div >
          {
            this.state.sportsData ?
            <div>
              {<div>
                DATA RECEIVED AFTER CLICKING ON CHECKBOX
                <div className='box'>
                  {this.state.sportsData.map((item)=> {
                     if(item !== undefined){
                       return  <div className='card-container1'>
                        {item.name} {item.price}
                        
                       </div>
                     }
                    })
                    }
                  </div>
                </div>}
                {/* <div>
                <div>
                  {this.state.electronicsData.map((item)=>{
                    if(item !== undefined){
                       return  <div>{item.name} {item.price}</div>
                     }
                    })
                    }
                  </div>
                </div> */}
            </div> : "" }
          {
          this.state.noData?<h3>No data found</h3>:null
          }
        </div>
        </div>
    )
  }
}
  export default Checkbox;