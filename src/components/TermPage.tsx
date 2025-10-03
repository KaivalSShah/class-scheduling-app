import { useState } from "react"
import TermSelector from "./TermSelector"
import CourseList from "./CourseList";
import type {Course} from "../types";

interface TermPageProps {
    courses: Course[]
}

const TermPage = ({courses}: TermPageProps) => {
    const [term, setTerm] = useState("Fall")
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([])

    return (
        <div>
            {selectedCourses.map(course => course.title).join(", ")}
            <TermSelector onChange={setTerm}/>
            <CourseList courses={courses} term={term} selectedCourses={selectedCourses} onChange={setSelectedCourses}/>
        </div>
    );
}

export default TermPage;