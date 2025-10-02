import type { Course } from '../types';
import Card from './Card';

interface CourseListProps {
    courses: Course[]
    term: string;
}

const CourseList = ({ courses, term}: CourseListProps) => {
    return (
        <div className="grid grid-cols-4 px-4 gap-4">
            {courses
                .filter(course => course.term === term)
                .map(course => <Card course={course}/>)}
        </div>
    );
}

export default CourseList;