
import PropTypes from 'prop-types';
import TaskItems from "./TaskItems";

const TaskList = ({tasks, setTasks}) => {
    return (
        <div>
            <ul className="list-group d-flex pb-4 ul" id="tasks">
                {tasks.map((task) => (
                    <TaskItems task={task} setTasks={setTasks} tasks={tasks} key={task.name} />
                ))}
            </ul>
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func
}

export default TaskList
