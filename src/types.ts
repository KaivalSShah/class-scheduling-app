export interface Course {
    term: string;
    number: string;
    meets: string;
    title: string;
}

export type Courses = {
    title: string;
    courses: Record<string, Course>;
}