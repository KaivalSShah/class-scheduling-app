import { useState } from "react"
import TermSelector from "./TermSelector"
import CourseList from "./CourseList";
import type {Course} from "../types";

interface TermPageProps {
    courses: Course[]
}

const TermPage = ({courses}: TermPageProps) => {
    const [term, setTerm] = useState("Fall")

    return (
        <div>
            <TermSelector onChange={setTerm}/>
            <CourseList courses={courses} term={term}/>
        </div>
    );
}

export default TermPage;