import React, {PureComponent} from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        /*console.log(`component will ${this.props.habit.name} mount`);*/
    }

    componentWillUnmount() {
        /*console.log(`해제`);*/
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }


    render() {

        const {name, count} = this.props.habit;
        return (
            <ul>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <span className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </span>
                <span className="habit-button habit-decrease"
                      onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </span>
                <span className="habit-button habit-delete"
                      onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </span>
            </ul>
        );
    }
}

export default Habit;