import type { Course } from '../types';

interface CourseListProps {
    courses: Course[]
}

const CourseList = ({ courses }: CourseListProps) => {
    return (
        courses.map(course => <p className="text-left p-3">{course.term} CS {course.number}: {course.title}</p>)
    );
}

export default CourseList;