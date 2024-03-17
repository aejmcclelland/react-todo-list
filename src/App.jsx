import { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { AddTask, TaskList } from './components';
import { Toaster } from 'react-hot-toast';
import { TbRefresh } from 'react-icons/tb';
import { BsCheckSquare } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';
export default function App() {
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

  return (
    <>
      <Toaster position='top-right' />
      {/* Task Title */}
      <div className='max-w-lg px-5 m-auto mt-20'>
        <h1 className='flex justify-center text-3xl font-bold'>
          My Todo List
          <FaCheckSquare
            style={{
              color: '#42C239',
              paddingTop: '0.2rem',
              paddingLeft: '0.3rem',
            }}
          />
        </h1>
      </div>
      {/* Add Task */}
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      {/* Task List */}
      <ul className='grid max-w-lg gap-2 px-5 m-auto'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-5 rounded-xl bg-zinc-200 ${task.completed ? 'bg-opacity-50 text-zinc-500' : ''
              }`}>
            <div className='flex flex-col gap-5'>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}>
                {task.title}
              </span>
              <div className='flex justify-between gap-5'>
                <button>
                  {task.completed ? (
                    <span className='flex items-center gap-1 hover:underline'>
                      <TbRefresh />
                      Set Active
                    </span>
                  ) : (
                    <span className='flex items-center gap-1 hover:underline'>
                      <BsCheckSquare />
                      Set Completed
                    </span>
                  )}
                </button>
                <div className='flex items-center gap-2'>
                  <button className='flex items-center gap-1 hover:underlins'>
                    <FaRegEdit />
                    Edit
                  </button>
                  <button className='flex items-center gap-1 text-red-500 hover:underline'>
                    <RiDeleteBin7Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
