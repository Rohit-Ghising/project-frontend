import { useState } from "react";
import Dashboard from "./DashBoard";
import Orders from "./Order";
import Addresses from "./Address";
import PaymentMethods from "./PaymentMethods";
import AccountSettings from "./AccountSettings";
import Sidebar from "./Sidebar";
import LogoutModal from "./LogoutModal";

export default function Layout() {
  const [section, setSection] = useState("dashboard");
  const [showLogout, setShowLogout] = useState(false);

  const renderSection = () => {
    switch (section) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      case "addresses":
        return <Addresses />;
      case "payments":
        return <PaymentMethods />;
      case "settings":
        return <AccountSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      <Sidebar
        setSection={setSection}
        setShowLogout={setShowLogout}
        section={section}
      />
      <main style={{ flex: 1, padding: "24px" }}>{renderSection()}</main>
      <LogoutModal open={showLogout} onClose={() => setShowLogout(false)} />
    </div>
  );
}
