import Banner from './components/Banner';
import TermPage from './components/TermPage';
import type { Course, CourseSchedule } from './types';
import { useJsonQuery } from './utilities/fetch';

const App = () => {
  const [scheduleData, isLoading, error] = useJsonQuery<CourseSchedule>('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
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
