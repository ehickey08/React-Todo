import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm  from './components/TodoComponents/TodoForm';

class App extends React.Component {
    state = {
        items: [],
        task: '',
        error: null
    }
    
    addItem = event => {
        event.preventDefault();
        if(this.state.task === ''){
            console.log('test');
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

    removeItem = event => {
        event.preventDefault();
        const completedItems = this.state.items.filter(item => item.completed === false)
        this.setState({
            items: [...completedItems]
        })
    }

    render() {
        return (
            <div className = 'app-container'>
                <h2>Welcome to your Todo App!</h2>
                <TodoList person = {this.state.items} complete = {this.completeTask}/>
                <TodoForm addFunc = {this.addItem} removeFunc = {this.removeItem} handler = {this.handleChanges} setValue = {this.state.task} error = {this.state.error}/>
        </div>
    );
  }
}

export default App;
