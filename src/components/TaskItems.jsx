import Swal from 'sweetalert2';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PropTypes from 'prop-types';

const TaskItems = ({task, setTasks, tasks}) => {
  return (
    <div>
      <li className="list list-group-item">
                        <span className="d-flex justify-content-between">
                            <div className="text text-break fs-4">
                                {task.name}
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <button className="btn btn-outline-primary" onClick={
                                    () => {
                                        Swal.fire({
                                            title: 'Authenicating for continuation',
                                            input: 'text',
                                            confirmButtonColor: '#291d89',
                                            cancelButtonColor: '#4e67eb',
                                            inputPlaceholder: `Enter the new task name for ${task.name}`,
                                            inputAttributes: {
                                                autocapitalize: 'off'
                                            },
                                            showCancelButton: true,
                                            confirmButtonText: 'Submit',
                                            showLoaderOnConfirm: true,
                                            preConfirm: (newTaskName) => {
                                                return new Promise((resolve) => {
                                                    if (newTaskName) {
                                                        setTasks(tasks.map((t) => {
                                                            if (t === task) {
                                                                t.name = newTaskName;
                                                            }
                                                            return t;
                                                        }));
                                                        resolve()
                                                    } else {
                                                        Swal.showValidationMessage('Invalid task name!')
                                                    }
                                                })
                                            },
                                            allowOutsideClick: () => !Swal.isLoading()
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire('Task name updated successfully!')
                                            }
                                        })
                                    }
                                }>
                                    <FiEdit />
                                </button>
                                <button className="btn btn-outline-danger ms-2" onClick={
                                    () => {
                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: `You will not be able to recover this task ${task.name}!`,
                                            icon: 'warning',
                                            confirmButtonColor: '#291d89',
                                            cancelButtonColor: '#4e67eb',
                                            showCancelButton: true,
                                            confirmButtonText: 'Yes, delete it!',
                                            cancelButtonText: 'No, keep it'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                setTasks(tasks.filter((t) => t !== task));
                                                Swal.fire('Task deleted successfully!', '', 'success');
                                            }
                                        })
                                    }
                                }>
                                    <FiTrash2 />
                                </button>
                            </div>
                        </span>
                    </li>
    </div>
  )
}

TaskItems.propTypes = {
    tasks: PropTypes.array,
    task: PropTypes.object,
    setTasks: PropTypes.func
}

export default TaskItems
