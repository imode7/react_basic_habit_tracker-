import React, {memo} from 'react';

const HabitAddForm = memo(props => {
        const inputRef = React.createRef();
        const formRef = React.createRef();

        const formSubmit = event => {
            event.preventDefault();
            props.onAdd(inputRef.current.value);
            // this.inputRef.current.value = '';
            formRef.current.reset();
        }
        return (
            <form className="add-form" onSubmit={formSubmit} ref={formRef}>
                <input type="text" className="add-input" placeholder="값을 입력해주세요" ref={inputRef}/>
                <button className="add-button">OK</button>
            </form>
        )
    })
;

export default HabitAddForm;