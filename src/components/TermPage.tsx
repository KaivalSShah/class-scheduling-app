import { useEffect, useState } from "react"
import TermSelector from "./TermSelector"
import CourseList from "./CourseList";
import type { Course } from "../types";
import Modal from "./Modal";

interface TermPageProps {
    courses: Course[]
}

const TermPage = ({ courses }: TermPageProps) => {
    const [term, setTerm] = useState("Fall")
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([])
    const [isModalSelected, setIsModalSelected] = useState(false);

    return (
        <div className="p-3">
            <div className="flex justify-between items-start px-4">
                <TermSelector onChange={setTerm} />
                <div className="flex justify-end">
                    <button onClick={() => setIsModalSelected(!isModalSelected)} className="border-2 border-gray-400 border-solid rounded-[1vw] p-3 mb-3 w-32">
                        Course Plan
                    </button>
                    <Modal isOpen={isModalSelected} onClose={() => setIsModalSelected(false)} children={selectedCourses.length !== 0 ?
                        selectedCourses.map(course => 
                            <div className="border border-3 p-3 mb-3 rounded-[1vw] align-center">
                                {course.term} CS {course.number} | {course.title} | {course.meets}
                            </div>
                        ):
                        "No courses have been selected yet. Click a course to select."} />
                </div>
            </div>
            <CourseList courses={courses} term={term} selectedCourses={selectedCourses} onChange={setSelectedCourses} />
        </div>
    );
}

export default TermPage;