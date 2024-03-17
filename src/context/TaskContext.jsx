import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { nanoid } from 'nanoid';

export const TaskContext = createContext(); // Create a context

export const TaskProvider = props => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'buy doughnuts',
            completed: false,
        },
        {
            id: 2,
            title: 'Cut the lawn',
            completed: true,
        },
        {
            id: 3,
            title: 'Learn to play guitar',
            completed: false,
        },
    ]);

    const addTask = task => {
        const newTask = {
            title: task,
            completed: false,
            id: nanoid(),
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        toast.success('New task added!');
    }

    const updateTaskStatus = taskId => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
        toast.success('Task status updated');
    };

    const editTask = (taskId, editTaskTitle) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.title = editTaskTitle;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const deleteTask = taskId => {
        const confirmation = confirm('Are you sure you want to delete this task?');
        if (confirmation) {
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
            toast.success('Task deleted!');
        }
    }
    const value = {
        tasks,
        addTask,
        updateTaskStatus,
        deleteTask,
        editTask
    }


    return (
        <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
    )
}