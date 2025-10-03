import type { Course } from '../types';
import Card from './Card';

interface CourseListProps {
    courses: Course[];
    term: string;
    selectedCourses: Course[];
    onChange: (update: Course[]) => void;
}

const toggleList = <T,>(x: T, lst: T[]): T[] => (
    lst.includes(x) ? lst.filter(y => y !== x) : [...lst, x]
);

const CourseList = ({ courses, term, selectedCourses, onChange}: CourseListProps) => {
    const toggleSelectedCourses = (course: Course) => {
        console.log(selectedCourses)
        onChange(toggleList(course, selectedCourses))
    }
    return (
        <div className="grid grid-cols-4 px-4 gap-4">
            {courses
                .filter(course => course.term === term)
                .map(course => {
                    const isSelected = selectedCourses.some(c => c === course)
                    return <Card key={course.number + course.title + course.term + course.meets} course={course} changeSelectedCourses={toggleSelectedCourses} isSelected={isSelected}/>
                })}
        </div >
    );
}

export default CourseList;