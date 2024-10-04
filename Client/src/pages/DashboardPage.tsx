import { ReactElement } from 'react';
import '../css/DashboardPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { useCourses, useNavbar, useWeeklyActivities, useAuth} from '../hooks';
import { ActivityCard } from '../components';
import { ReactElement, useEffect, useState } from "react";
import "../css/DashboardPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth, useCourses } from "../hooks";
import { useNavbar } from "../hooks/useNavbar";
import { AddEditCourse } from "./AddEditCourse";
import { Button } from "react-bootstrap";

export function DashboardPage(): ReactElement {
  const navigate = useNavigate();
  const { courses, error: coursesError, loading: coursesLoading } = useCourses();
  const { setNavBarName, setIsCourse, setCourseCode, setCredits } = useNavbar();
  const [showPopup, setShowPopup] = useState(false);
  const { activities, error: activitiesError, loading: activitiesLoading } = useWeeklyActivities();
  const { userData } = useAuth();

  const handleShow = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const { userData } = useAuth();
  useEffect(() => {
    setNavBarName("Hem");
  }, []);

  return (
    <div className="dashboard-container p-3">
      {showPopup && (
        <AddEditCourse
          handleClose={handleClose}
          show={showPopup}
          edit={false}
        />
      )}
      <h1>Välkommen {userData?.name}!</h1>
      <div className="mt-4 d-flex flex-wrap">
        <div
          className="card bg-light mb-3"
          style={{ maxWidth: "20rem", marginRight: "2rem" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>Inlämning Programmering 1</span>
            <span>idag</span>
          </div>
          <div className="card-body">
            <p className="card-text p-2">
              Deadline för inlämning programmering 1. glöm inte att ladda upp
              era projectfiller.
            </p>
          </div>
        </div>
        <div
          className="card bg-light mb-3"
          style={{ maxWidth: "20rem", marginRight: "2rem" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>Inlämning Programmering 1</span>
            <span>idag</span>
          </div>
          <div className="card-body">
            <p className="card-text p-2">
              Deadline för inlämning programmering 1. glöm inte att ladda upp
              era projectfiller.
            </p>
          </div>
        </div>
        <div
          className="card bg-light mb-3"
          style={{ maxWidth: "20rem", marginRight: "2rem" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>Inlämning Programmering 1</span>
            <span>idag</span>
          </div>
          <div className="card-body">
            <p className="card-text p-2">
              Deadline för inlämning programmering 1. glöm inte att ladda upp
              era projectfiller.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h1>Kurser</h1>
        {/* <Link to="/addCourse" className="linkToNewCourse">
          Lägg till en ny kurs
        </Link> */}
        <Button variant="primary" className="w-25" onClick={handleShow}>
      <h1>Välkommen {userData?.name}</h1>
      <hr />      
      <section className="activities-section mb-5">
        <h2>Den här veckans aktiviteter:</h2>
        {activitiesLoading && <p>Laddar aktiviteter...</p>}
        {activitiesError && <p>Fel vid hämtning av aktiviteter: {activitiesError}</p>}
        {activities.length === 0 && <p>Det finns inga aktiviteter planerade för denna vecka.</p>}
        <div className="mt-4 d-flex flex-wrap">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <section className="courses-section">
        <h2>Kurser</h2>
        <Link to="/addCourse" className="linkToNewCourse">
          Lägg till en ny kurs
        </Button>
        {courses?.map((c) => (
          <div
            key={c.id}
            className="dashBoardCourseList"
            onClick={() => {
              navigate(`/courses/${c.id}`);
              setNavBarName(c.courseName);
              setCourseCode(c.courseCode);
              setCredits(c.credits);
              setIsCourse(true);
            }}
          >
            <h4>{c.courseName}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}
