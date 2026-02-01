import type { JSX } from "react";
import { FeatureCard } from "../../molecules";

const metricsData = [
  {
    icon: "/src/assets/icons/file-icon-round.png",
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: "/src/assets/icons/calendar-icon.png",
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: "/src/assets/icons/users-icon.png",
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
  },
];

const FeaturesGrid = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {metricsData.map((metric, index) => (
        <FeatureCard
          key={index}
          icon={metric.icon}
          title={metric.title}
          description={metric.description}
          delay={400 + index * 200}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
