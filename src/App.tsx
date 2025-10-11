import Banner from './components/Banner';
import TermPage from './components/TermPage';
import type { Course } from './types';
import { useCourseContext } from './utilities/CourseContext';

const App = () => {
  const { scheduleData, isLoading, error } = useCourseContext();
  
  if (error) { <h1>Error loading the data</h1>};
  if (isLoading) {<h1>Data is loading</h1>};
  if (!scheduleData) { return null;}
  
  const courses: Course[] = Object.values(scheduleData.courses)

  return (
    <div className="text-center">
      <Banner banner={scheduleData.title}/>
      <TermPage courses={courses}/>
    </div>
  )
}

export default App
