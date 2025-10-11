import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useJsonQuery } from '../utilities/fetch';
import type { CourseSchedule } from '../types';
import { CourseProvider } from '../utilities/CourseContext';

export const Route = createRootRoute ({
  component: () => {
    const [scheduleData, isLoading, error] = useJsonQuery<CourseSchedule>('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    
    return (
      <CourseProvider value={{ scheduleData: scheduleData || null, isLoading, error }}>
      <Outlet/>
    </CourseProvider>
  )
  }
})