import React from "react";

class App extends React.Component {

  state={
    value:"",
    items:[]
  }
  handleChange = async(e) =>
  {
      await this.setState({
          value:e.target.value        
      })
  
  }
  handleClick = async(e) => 
  {
      await this.setState({
        items:[...this.state.items,this.state.value],
        value:""
      })

  }
  handleDoubleClick=async(e)=>{
    let tbd=e.target.innerText;
    const newitem=this.state.items.filter((item)=>{
      return item!==tbd;
    })
    await this.setState({
      items:[...newitem]
    })
  }

    
  render()
  {
  const list=this.state.items.map((item)=>{
      return(
        <div key={Math.random()}>
            <li onDoubleClick={this.handleDoubleClick}>{item}</li>
        </div>
      )     
  })
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );

  }
  
}

export default App;
