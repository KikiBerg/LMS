import { useState, useEffect } from 'react';
import { getCourseDetails, getCourseActivities } from '../utils/';
import { ICourse, IActivity } from '../utils/';

interface CourseDetailsHookResult {
  course: ICourse | null;
  activities?: IActivity[];
  loading: boolean;
  error: string | null;
  fetchCourseDetails: () => Promise<void>
}

export function useCourseDetails(courseId: string | undefined): CourseDetailsHookResult {
  
  const [course, setCourse] = useState<ICourse | null>(null);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourseDetails = async ()=>{
    console.log(course)
    if (!courseId) {
      setError('Invalid course ID');
      setLoading(false);
      return;
    }
    try {
      const courseData = await getCourseDetails(courseId);
      // console.log(courseData)
      //const activitiesData = await getCourseActivities(courseId);
      setCourse(courseData);
      //setActivities(activitiesData);
      setLoading(false);
    } catch (err) {
      setError('An error occurred while fetching course details.');
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchCourseDetails();
  }, [courseId]);

  return { course, activities, loading, error ,fetchCourseDetails };
}
