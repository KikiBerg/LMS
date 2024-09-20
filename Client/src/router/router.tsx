import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { Layout, RequireAuth, BaseLayout } from "../components";
import { CourseDetailsPage, ModulesPage, ActivitiesPage, LoginPage, DashboardPage } from "../pages";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BaseLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Route>
    </Route>
  )
);

// Detta kommenteras ut tills vi har en user och kan logga in
// <Route element={<RequireAuth><Layout /></RequireAuth>}>