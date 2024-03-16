import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

export const AddTask = () => {

    const [title, setTitle] = useState('');

    const addTask = title => {
        const newTask =
        {
            title: title,
            completed: false,
            id: nanoid()
        }

        setTasks(prevTasks => [...prevTasks, newTask])
        setTitle('')
        toast.success('New task added successfully!')
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (title.trim() === '') {
            addTask(title);
            setTitle('');
            toast.success('New task added successfully!')
        } else {
            toast.error('task field cannot be empty!')
        }
    };
    return (
        <form>
            <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
                <input
                    type='text'
                    placeholder='Add Task'
                    className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-200 rounded-x1 placeholder:text-zinc-500 focus:border-zinc-700'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    type='submit' className='px-5 py-2 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700'>
                    Add
                </button>
            </div>

        </form>
    )
}