import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../context/authProvider";
import { router } from "../router";
import { LoginStatusChip } from "./LoginStatusChip.tsx";

export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <LoginStatusChip />
    </AuthProvider>
  );
}
//test