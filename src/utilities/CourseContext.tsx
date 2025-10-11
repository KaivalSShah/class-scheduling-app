import { createContext, useContext } from "react";
import type { CourseSchedule } from "../types";

type CourseContextType = {
    scheduleData: CourseSchedule | null;
    isLoading: boolean;
    error: Error | null;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = CourseContext.Provider;

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('error w/ context');
  }
  return context;
};