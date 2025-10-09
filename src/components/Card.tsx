import type { Course } from '../types';

export interface CardProps {
    course: Course
    changeSelectedCourses: (update: Course) => void;
    isSelected: Boolean
    isConflict: boolean
}

const Card = ({ course, changeSelectedCourses, isSelected, isConflict }: CardProps) => {
    return (
        <button disabled={isConflict} onClick={() => {if (!isConflict) changeSelectedCourses(course)}}
            className={`border-2 border-gray-400 border-solid rounded-[1vw] flex flex-col p-5 text-left h-full 
            ${isConflict ? "bg-red-200" : 
            isSelected ? "bg-blue-200" : ""}`}>
            <div className="space-y-4">
                <h1 className="text-2xl mb-4">{course.term} CS {course.number}</h1>
                <p className="text-base text-gray-800 mb-4">{course.title}</p>
            </div>
            <div className="mt-auto">
                <div className="border-t border-gray-300 mb-4"></div>
                <p className="text-base text-gray-800">{course.meets}</p>
            </div>
        </button>
    );
}

export default Card;