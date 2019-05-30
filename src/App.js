import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm  from './components/TodoComponents/TodoForm';


class App extends React.Component {
    state = {
        items: [],
        task: '',
        error: null,
        search: '',
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
            completed: false,
            matching: true
        }

        const tempList = [...this.state.items, newItem];
        const sortedList = tempList.sort((a,b) => {
            const taskA = a.task;
            const taskB = b.task;
            if(taskA > taskB) return 1
            else return -1
        }); 

        this.setState(state => ({
            items: sortedList,
            task: '',
            error: null
        }))

        
    }
    
    handleChanges = event => {
        const test = event.target.name;
        this.setState({
            [event.target.name]: event.target.value
        },() => {
            if(test === 'search'){
                this.searchItems();
            }
        })
    }

    completeTask = (id) => {
        const completedItem = this.state.items.filter(item => item.id === id)[0]
        completedItem.completed = !completedItem.completed;
        this.setState(prevState => ({
            items: [...prevState.items]
        }))
    }

    removeItem = event => {
        event.preventDefault();
        const completedItems = this.state.items.filter(item => item.completed === false)
        this.setState({
            items: [...completedItems]
        })
    }

    saveToLocalStorage = () => {
        for(let key in this.state){
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    updateFromLocalStorage = () => {
        for(let key in this.state){
            if(localStorage.hasOwnProperty(key)){
                let value = localStorage.getItem(key)
                try{
                    value = JSON.parse(value);
                    this.setState({[key]:value})
                } catch (e){
                    this.setState({[key]: value})
                }
            }
        }
    }

    componentDidMount() {
        this.updateFromLocalStorage();
        window.addEventListener("beforeunload", () => this.saveToLocalStorage());
    }

    searchItems = () => {
        const matchedArr = this.state.items.map(item => {
            if(item.task.startsWith(this.state.search)){
                item.matching = true;
                return item
            } else{
                item.matching = false;
                return item
            }
        })
        
        this.setState({
            items: matchedArr
        })

    }


    render() {
        return (
            <div className = 'app-container'>
                <h2>Let's see what you have to do today!</h2>
                <TodoList 
                    items = {this.state.items} 
                    complete = {this.completeTask}
                />
                <TodoForm 
                    addFunc = {this.addItem} 
                    removeFunc = {this.removeItem} 
                    handler = {this.handleChanges} 
                    taskValue = {this.state.task} 
                    searchValue = {this.state.search}
                    error = {this.state.error}
                />
        </div>
    );
  }
}

export default App;
