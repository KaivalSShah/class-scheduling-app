import type { Course } from '../types'

export function hasConflict(course: Course, selectedCourses: Course[]): boolean {
    return selectedCourses.some(selectedCourses => {
        const sameTerm = selectedCourses.term === course.term;
        const sameDays = setHasCommonElement(parseDays(selectedCourses.meets), parseDays(course.meets));
        const [start1, end1] = parseTimespan(selectedCourses.meets);
        const [start2, end2] = parseTimespan(course.meets);
        const hasOverlap = (start1 && start2 && end1 && end2) && (start2 < end1 && end2 > start1);
        return sameTerm && sameDays && hasOverlap;
    })
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