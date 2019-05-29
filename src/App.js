import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm  from './components/TodoComponents/TodoForm';

class App extends React.Component {
    state = {
        items: [
            {
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            }
          ],
        task: '',
        error: null
    }
    
    addItem = event => {
        event.preventDefault();
        if(this.state.task === ''){
            return this.setState({
                error: 'You must enter a task!'
            })
        }
        const newItem = {
            task: this.state.task,
            id: Date.now(),
            completed: false
        }
        this.setState(state => ({
            items: [...state.items, newItem],
            task: '',
            error: null
        }))

    }

    handleChanges = event => {
        this.setState({
            task: event.target.value
        })
    }

    completeTask = (id) => {
        const completedItem = this.state.items.filter(item => item.id === id)[0]
        completedItem.completed = !completedItem.completed;
        this.setState(state => ({
            items: [...state.items]
        }))
    }

    render() {
        return (
            <div className = 'app-container'>
                <h2>Welcome to your Todo App!</h2>
                <TodoList person = {this.state.items} complete = {this.completeTask}/>
                <TodoForm addFunc = {this.addItem} handler = {this.handleChanges} setValue = {this.state.task} error = {this.state.error}/>
        </div>
    );
  }
}

export default App;
