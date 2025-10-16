import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { useJsonQuery } from '../utilities/fetch';
import { useDataQuery } from '../utilities/firebase';
import type { CourseSchedule } from '../types';
import { CourseProvider } from '../utilities/CourseContext';

export const Route = createRootRoute ({
  component: () => {
    const [scheduleData, isLoading, error] = useDataQuery<CourseSchedule>('');

    console.log(scheduleData)
    
    return (
      <CourseProvider value={{ scheduleData: scheduleData || null, isLoading, error }}>
      <Outlet/>
    </CourseProvider>
  )
  }
})