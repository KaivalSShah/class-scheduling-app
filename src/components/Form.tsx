import type { Course } from '../types';
import { useNavigate } from '@tanstack/react-router';

interface FormProps {
    course: Course;
}

const Form = ({course}: FormProps) => {
    const navigate = useNavigate();

    function onSubmit() {
    }

    return (
        <div className='flex items-center justify-center h-screen '>
            <form className='bg-gray-200 p-10 rounded border'>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Term</h1>
                    <input className='text-gray-800 block border rounded pl-1' value={course.term}></input>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Meets</h1>
                    <input className='text-gray-800 block border rounded pl-1' value={course.meets}></input>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Title</h1>
                    <input className='text-gray-800 block border rounded pl-1' value={course.title}></input>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Number</h1>
                    <input className='text-gray-800 block border rounded pl-1' value={course.number}></input>
                </div>
                <div className='flex flex-row items-center justify-center gap-8'>
                    <button onClick={() => navigate({to: '/'})} className='p-2 border rounded'>Cancel</button>
                    <button onClick={() => onSubmit()} className='p-2 border rounded'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;