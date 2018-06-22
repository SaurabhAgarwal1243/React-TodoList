import React from "react";

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form >
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

