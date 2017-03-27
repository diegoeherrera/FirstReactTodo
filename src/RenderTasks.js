import React, { Component } from 'react';
import dataTasks from './todoData';
import InputTaskBox from './inputTaskBox';


class RenderTasks extends Component {
  constructor(props){
    super(props)

    this.state={
      tasks:dataTasks,
      allTasks:"",

    }
}

//agrega la nueva tarea al array de tareas
addNewTask(e){

this.setState({
  allTasks:[this.state.tasks.unshift(e)]
})

console.log(this.state.tasks)

}

  render(){
    return (

            <div className="row col-sx-12">

            <div className="row col-sx-12">              {/* esto viene del archivo InputTaskBox */}
            <InputTaskBox subTask={this.addNewTask.bind(this)}/>
            </div>
            <h2 className="title">My Tasks</h2>
            <RenderRows tasksToRender={this.state.tasks}/>
            </div>
          )

        }
}

//Este componente imprime cada una de las tareas en un listado
class RenderRows extends Component{
  constructor(props){
    super(props)
    this.state={
      alltasks:this.props.tasksToRender
    }

  }


render(){

  return(
        <div className="row col-sx-12">
          <ul>
            { this.state.alltasks.map(function (task){

              return <li className="list-group-item list-group-item">
                <h3>{task.title}</h3>
                <p>{task.task}</p>
                <button className="btn-danger text-right">Delete</button>
              </li>
                }
              )
            }
          </ul>
        </div>
        )
    }
}

export default RenderTasks
