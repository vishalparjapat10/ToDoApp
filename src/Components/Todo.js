import React, { Component } from 'react'

export default class 
 extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[
              {id:1,task:"React"},
            ]
          };
    }
  render() {
    return (
      <div>
        <div>
            <h1>ToDo</h1>
        </div>
        <div>
          <input type="text" />
          <button>Submit</button>
        </div>
        <div>
            {
                this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id}>
                        <h2>{taskObj.task}</h2>
                        <button>Delete</button>
                    </li>
                ))

            }
        </div>
      </div>
    )
  }
}
