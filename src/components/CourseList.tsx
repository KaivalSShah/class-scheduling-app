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
                    const isSelected = selectedCourses.some(c => c.title === course.title && c.number === course.number)
                    console.log(course.number + course.title)
                    return <Card key={course.number + course.title} course={course} changeSelectedCourses={toggleSelectedCourses} isSelected={isSelected}/>
                })}
        </div >
    );
}

export default CourseList;