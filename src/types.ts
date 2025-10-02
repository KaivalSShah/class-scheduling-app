export interface Course {
    term: string;
    number: string;
    meets: string;
    title: string;
}

export type CourseSchedule = {
    title: string;
    courses: Record<string, Course>;
}