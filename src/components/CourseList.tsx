import type { Course } from '../types';
import Card from './Card';

interface CourseListProps {
    courses: Course[]
}

const CourseList = ({ courses }: CourseListProps) => {
    return (
        <div className="grid grid-cols-4 px-4 gap-4">
            {courses.map(course => <Card course={course}/>)}
        </div>
    );
}

export default CourseList;