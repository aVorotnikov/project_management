import React from "react";
import { Search } from "react-bootstrap-icons";
import { PlusSquare } from "react-bootstrap-icons";
import Select from 'react-select';

class TasksFilter extends React.Component {
    render() {
        return (
            <div className="d-flex flex-row justify-content-between" style={{ marginTop: "10px", height: "38px" }}>
                <h4 style={{ marginLeft: "10px" }}>Задачи проекта {this.props.projectName}</h4>
                <button style={{ border: 0, background: "transparent", marginLeft: "30px" }}>
                    <PlusSquare size={30} />
                </button>
                <div className="d-flex flex-row w-75" style={{ backgroundColor: "#EFEFEF"}}>
                   <div className="input-group rounded w-25 mr-3" style={{ marginRight: "30px" }}>
                        <input type="search" className="form-control rounded" 
                            placeholder="Текст задачи" aria-label="Search"
                            aria-describedby="search-addon"
                            onChange={(e) => {this.props.textFilterHandler(e.target.value)}} />
                        <span className="input-group-text border-0" id="search-addon" style={{ background: "transparent" }}>
                            <Search style={{ position: "absolute", right: "35px" }}/>
                        </span>
                    </div>
                    <Select
                        isMulti
                        name="User"
                        options={this.props.users.map((user) => ({ value: user.name, label: user.name}))}
                        className="basic-multi-select w-25 ml-3"
                        classNamePrefix="select"
                        placeholder="Исполнитель"
                        onChange={(options) => this.props.usersFilterHandler(options.map((option) => option.value))}
                    />
                </div>
            </div>
        );
    }
}

export default TasksFilter