import type { Course } from '../types'

export function isTermConflict(course: Course, selectedCourses: Course[]): boolean {
    const conflicting = selectedCourses.filter(selectedCourse => selectedCourse.term === course.term)
    return conflicting.length !== 0
}

export function isDayConflict(course: Course, selectedCourses: Course[]): boolean {
    const conflicting = selectedCourses.filter(selectedCourse => setHasCommonElement(parseDays(selectedCourse.meets), parseDays(course.meets)))
    return conflicting.length !== 0
}

export function isTimeConflict(course: Course, selectedCourses: Course[]): boolean {
    const conflicting = selectedCourses.filter(selectedCourse => {
        const [start1, end1] = parseTimespan(selectedCourse.meets);
        const [start2, end2] = parseTimespan(course.meets);
        if (start1 && start2 && end1 && end2) {
            if (start2 >= start1 && start2 <= end1) {
                return true
            }
            else if (end2 <= end1 && end2 >= start1) {
                return true
            }
        }
        return false;
    })
    return conflicting.length > 0;
}

function parseDays(meeting: string) {
    const regexPattern = /(M|Tu|W|Th|F|Sa|Su)/g;
    return new Set(meeting.match(regexPattern) || [])
}

function setHasCommonElement<T>(set1: Set<T>, set2: Set<T>):boolean {
    for (const element1 of set1) {
        if (set2.has(element1)) return true;
    }
    return false;
}

function parseTimespan(meeting: string) {
    const matchingTerms = meeting.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
    if (!matchingTerms) return [null, null];
    const [, startingTime, endingTime] = matchingTerms;
    return [parseTime(startingTime), parseTime(endingTime)]
}

function parseTime(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return (minutes + hours * 60);
}