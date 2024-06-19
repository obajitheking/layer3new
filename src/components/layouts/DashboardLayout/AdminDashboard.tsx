import ProtectedPage from "@/components/ProtectedPages";
import DashboardLayout from ".";

function AdminDashboard({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedPage>
      <DashboardLayout
        items={[
          {
            label: "Dashboard",
            key: "dashboard",
            icon: "",
          },
          {
            label: "Pages",
            key: "pages",
            icon: "",
          },
        ]}
        allowedRoles={["admin"]}
      >
        {children}
      </DashboardLayout>
    </ProtectedPage>
  );
}

export default AdminDashboard;
