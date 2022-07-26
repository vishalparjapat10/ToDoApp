import React, { Component } from 'react'

export default class 
 extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[
              {id:1,task:"React"},
            ],
            curTask:""
          };
    }

    handleChange = (e) =>{
        this.setState({
            curTask: e.target.value,
        })
    }
    handleSubmit = () =>{
        this.setState({
            tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.curTask}],
            curTask:""
        })
    }
  render() {
    return (
      <div>
        <div>
            <h1>ToDo</h1>
        </div>
        <div>
          <input type="text" value={this.state.curTask} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div>
            {
                this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id}>
                        <h2>{taskObj.task}</h2>
                        <button onClick={() => {this.handleDeleteTask(taskObj.id)}}>Delete</button>
                    </li>
                ))

            }
        </div>
      </div>
    )
  }
}
