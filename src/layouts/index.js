import AuthGuard from "../guards/auth-guard";
import DashboardLayout from "./dashboard";
import MainLayout from "./main";
import { BackTop } from 'antd';
export default function Layout({ variant = "main", children }) {
  if (variant === "dashboard") {
    return (
      <AuthGuard>
        <DashboardLayout>{children}</DashboardLayout>

      </AuthGuard>
    );
  }

  return <MainLayout>{children}
 <BackTop />
  </MainLayout>;
}
