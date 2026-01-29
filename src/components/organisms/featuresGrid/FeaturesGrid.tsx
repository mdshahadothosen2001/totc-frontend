import type { JSX } from "react";
import { FeatureCard } from "../../molecules";

const metricsData = [
  {
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/group-79.png",
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/group-80.png",
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/group-81.png",
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
