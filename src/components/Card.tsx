import type { Course } from '../types';
import { useNavigate } from '@tanstack/react-router';

export interface CardProps {
    course: Course
    changeSelectedCourses: (update: Course) => void;
    isSelected: Boolean
    isConflict: boolean
}

const Card = ({ course, changeSelectedCourses, isSelected, isConflict }: CardProps) => {
    const navigate = useNavigate();
    return (
        <div className="relative inline-block">
            <div className={`relative border-2 border-gray-400 border-solid rounded-[1vw] flex flex-col p-5 text-left h-full ${isConflict ? "bg-red-200" : isSelected ? "bg-blue-200" : ""}`}>
                <button type="button" onClick={(e) => {
                        e.stopPropagation();
                        navigate({ to: `/${course.number}` });
                    }}
                    className="absolute top-2 right-2 z-10 bg-gray-100 border border-gray-400 rounded px-2 py-1 hover:bg-gray-200"
                >
                    Course Form
                </button>
                <button type="button" disabled={isConflict} onClick={() => { if (!isConflict) changeSelectedCourses(course); }} className="w-full text-left flex flex-col">
                    <div className="space-y-4">
                        <h1 className="text-2xl mb-4">{course.term} CS {course.number}</h1>
                        <p className="text-base text-gray-800 mb-4">{course.title}</p>
                    </div>
                    <div className="mt-auto">
                        <div className="border-t border-gray-300 mb-4"></div>
                        <p className="text-base text-gray-800">{course.meets}</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Card;