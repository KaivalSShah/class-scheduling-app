import type { Course } from '../types';
import { useCourseContext } from './CourseContext';


export const useCourse = (courseId: string) => {
    const { scheduleData, isLoading, error } = useCourseContext();
    if (error) {
        throw error;
    }
    if (isLoading) {
        throw new Error('Loading...');
    }
    if (!scheduleData) {
        throw new Error('No schedule data');
    }
    const courses: Course[] = Object.values(scheduleData.courses)
    return courses.find(course => course.number === courseId);
}