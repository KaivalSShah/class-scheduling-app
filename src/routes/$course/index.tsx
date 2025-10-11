import {createFileRoute} from "@tanstack/react-router";
import Form from "../../components/Form";
import { useCourse } from "../../utilities/useCourse";

export const Route = createFileRoute('/$course/')({
    component: CoursePage,
})

function CoursePage() {
    const {course: courseId} = Route.useParams();
    const course = useCourse(courseId);

    if (!course) {
        return <div>Can't find the course</div>;
    }

    return <Form course={course}/>
}