import type { Course } from '../types';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { getDatabase, ref, update} from 'firebase/database';

interface FormProps {
    course: Course;
}

export const courseValidationSchema = z.object({
    term: z.string().min(1).regex(/^(Fall|Winter|Spring|Summer)$/i, 'incorrect term'),
    title: z.string().min(2, 'title should be min of 2 chars'),
    number: z.string().regex(/^\d{3}(-\d)?$/, 'invalid course number'),
    meets: z.string().regex(/^(?:M|Tu|W|Th|F){1,5}\s\d{1,2}:\d{2}-\d{1,2}:\d{2}$/, 'invalid meeting time')
})

const Form = ({course}: FormProps) => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors},} = useForm<z.infer<typeof courseValidationSchema>>({
        resolver: zodResolver(courseValidationSchema),
        defaultValues: {
            term: course.term,
            meets: course.meets,
            title: course.title,
            number: course.number
        }
    });


    const onSubmitForm = async (updatedData: z.infer<typeof courseValidationSchema>) => {
        const db = getDatabase();
        await update(ref(db, `courses/${course.term.charAt(0)}${course.number}`), updatedData);
        navigate({to: '/'});
    };

    return (
        <div className='flex items-center justify-center h-screen '>
            
            <form onSubmit={handleSubmit(onSubmitForm)} className='bg-gray-200 p-10 rounded border'>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Term</h1>
                    <input {...register("term")} className='text-gray-800 block border rounded pl-1'/>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Meets</h1>
                    <input {...register("meets")} className='text-gray-800 block border rounded pl-1'/>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Title</h1>
                    <input {...register("title")} className='text-gray-800 block border rounded pl-1'/>
                </div>
                <div className='mb-5 flex flex-col'>
                    <h1 className='font-semibold'>Number</h1>
                    <input {...register("number")} className='text-gray-800 block border rounded pl-1'/>
                </div>
                {(errors.term || errors.meets || errors.title || errors.number) && <p>Error in form inputs</p>} 
                <div className='flex flex-row items-center justify-center gap-8'>
                    <button onClick={() => navigate({to: '/'})} className='p-2 border rounded'>Cancel</button>
                    <input type={"submit"} value={"Submit"} className='p-2 border rounded'/>
                </div>
            </form>
        </div>
    );
};

export default Form;