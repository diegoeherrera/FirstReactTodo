import React, { Component } from 'react';


class InputTaskBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id:"asdas",
      title:"asdasd",
      task:"asdasd",
      checked:false
    }

  }

  handleEvent(e){
    e.preventDefault();
    //le paso al controlador padre "RenderTasks" por propiedad la tarea
    this.props.subTask(this.state)
    //console.log(this.state)
  }

newTask(e){

    e.preventDefault();
    this.setState({
      id:new Date().valueOf(),
      title:this.title.value,
      task:this.task.value
      // deleteMe: (task)=>{
      //   console.log(this.id)
      // }


    })

  }

  render(){
    return (
      <section className="col-sm-12">
        <form  >
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Task Title</label>
            <div className="col-sm-10">
              <input type="text" ref={(ref)=> this.title = ref} onChange={this.newTask.bind(this)} className="form-control"/>
            </div>
            <label className="col-sm-2">Task Description</label>
            <div className="col-sm-10">
              <input type="text" ref={(ref)=>this.task=ref} onChange={this.newTask.bind(this)} className="form-control"/>
            </div>
            <div className="col-xs-10">
            <button type="submit" className="btn btn-primary" onClick={this.handleEvent.bind(this)}>Add Task</button>
            </div>
          </div>
        </form>
      </section>
    )
  }

}

export default InputTaskBox
