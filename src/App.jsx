import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import Consultations from "./pages/Consultations";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import Users from "./pages/Users";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="consultations" element={<Consultations />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
