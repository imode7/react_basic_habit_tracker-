import './app.css';
import React, {Component} from "react";
import Navbar from "./components/navbar";
import Habits from "./components/habits";
import HabitAddForm from "./components/habitAddForm";

class App extends Component {

    state = {
        // total: 0,
        habits: [
            {key: '1', name: 'reading', count: 0},
            {key: '2', name: 'running', count: 0},
            {key: '3', name: 'coding', count: 0}
        ]
    }

    handleIncrement = (habit) => {
        const habits = this.state.habits.map((elem) => {
            if (elem.key === habit.key) {
                return {...elem, count: elem.count + 1}
            } else {
                return elem;
            }
        })
        this.setState({habits});
    }

    handleDecrement = (habit) => {
        const habits = this.state.habits.map((elem) => {
            if (elem.key === habit.key) {
                const count = elem.count - 1;
                return {...elem, count: count < 0 ? 0 : count};
            } else {
                return elem;
            }
        })
        this.setState({habits});
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.key !== habit.key)
        this.setState({habits});
    }

    handleAdd = title => {
        const habits = [...this.state.habits, {key: Date.now(), name: title, count: 0}];
        this.setState({habits})
    }

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            if(habit.count !== 0){
                return {...habit, count: 0};
            }else{
                return habit;
            }
         })
        this.setState({habits});
    }

    render() {
        return (
            <>
                {/*각 파트의 제목만 저장한것*/}
                {<Navbar total={this.state.habits.filter(item => item.count > 0).length}/>}
                {/*전체 개수를 다 더한 것*/}
                {/*<Navbar total={this.state.habits.map(item => item.count)
                    .reduce((accumulator, currentValue) =>
                        accumulator + currentValue
                    )}/>*/}
                <Habits key={this.state.habits.key}
                        habits={this.state.habits}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onAdd={this.handleAdd}
                        onReset={this.handleReset}/>
            </>
        )
    }
}

export default App;