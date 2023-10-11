import PropTypes from 'prop-types';
import { GiNotebook } from "react-icons/gi";


const Header = ({ newTask, handleAddTask, setNewTask }) => {
    return (
        <div>
            <div className="d-flex justify-content-left mb-5">
            <GiNotebook className='tit hover' />
            <h1 className="head">To-Do App</h1>
            </div>
            

            <div id="newtask">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add Your Task"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
                <button className="btn btn-add btn-lg mt-3 mb-5 px-5" onClick={handleAddTask}>
                    Add
                </button>
            </div>
        </div>
    )
}

Header.propTypes = {
    newTask: PropTypes.string,
    handleAddTask: PropTypes.func,
    setNewTask: PropTypes.func
}

export default Header
