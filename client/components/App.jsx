import React from 'react';
import AddListEntry from './AddListEntry.jsx';
import List from './List.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['Travel to Asia', 'Surfing in Australia', 'Backpacking in London']
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        console.log('Attempting to add item', item);
        var currentTodos = [...this.state.todos];
        currentTodos.push(item);
        this.setState({
            todos: currentTodos
        })
    }

    deleteItem(index) {
        console.log('Attempting to delete');
        var currentTodos = [...this.state.todos];
        currentTodos.splice(index,1);
        this.setState({
            todos: currentTodos
        })
        
    }

    render() {
        return (
            <div id="mainApp" className="center vertical">
                <div className="title">Hello Where would you like to travel??</div>
                <AddListEntry addItem={this.addItem}/>
                <List todos={this.state.todos} deleteItem={this.deleteItem}/>
            </div> 
        );
    }
}

export default App;