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
      <div className='todo-cont'>
        <div className='todo-navbar'>
            <h1>ToDo</h1>
        </div>
        <div className='todo-input'>
          <input type="text" className = 'input-todo' value={this.state.curTask} onChange={this.handleChange}/>
          <button className='submit-btn' onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className='todo-lists'>
            {
                this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id} className='todo-list'>
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
