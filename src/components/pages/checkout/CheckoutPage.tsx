import type { JSX } from "react";
import { CheckoutHeader } from "../../../components/organisms";
import { Footer } from "../../../components/organisms";
import { CheckoutForm } from "../../../components/organisms";
import { OrderSummary } from "../../../components/organisms";
import { EducationOffersSection } from "./EducationOffer"

const FooterAny = Footer as unknown as (props: any) => JSX.Element;;

// Data
const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
];

const footerLinks = [
  { label: "Careers", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const paymentMethods = [
  {
    id: "paypal",
    image: "https://c.animaapp.com/mkzqe3tg9lRjEM/img/paypal.png",
    alt: "Paypal",
    selected: true,
  },
  {
    id: "amex",
    image: "https://c.animaapp.com/mkzqe3tg9lRjEM/img/am-amex-06-1.png",
    alt: "American Express",
    selected: false,
  },
  {
    id: "visa",
    image: "https://c.animaapp.com/mkzqe3tg9lRjEM/img/download-1.png",
    alt: "Visa",
    selected: false,
  },
];

const cartItems = [
  {
    image:
      "https://c.animaapp.com/mkzqe3tg9lRjEM/img/confident-teacher-explaining-lesson-pupils-2.png",
    title: "Lorem ipsum dollar...",
    description: "adipising elit, sed do eiusmod tempor",
    price: "$24.69",
  },
  {
    image:
      "https://c.animaapp.com/mkzqe3tg9lRjEM/img/confident-teacher-explaining-lesson-pupils-2.png",
    title: "Lorem ipsum dollar...",
    description: "sed do eiusmod tempor adipising elit",
    price: "$24.69",
  },
];

const summaryData = {
  subtotal: "$51.38",
  couponDiscount: "0 %",
  tax: "5",
  total: "$56.38",
};

export const CheckoutPage = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-h-screen relative"
      data-model-id="54:821"
    >
      <CheckoutHeader
        navigationItems={navigationItems}
        userName="Lina"
        userAvatarUrl="https://c.animaapp.com/mkzqe3tg9lRjEM/img/image-12.png"
      />

      <main className="px-[120px] py-12 flex gap-8">
        <CheckoutForm paymentMethods={paymentMethods} />
        <OrderSummary items={cartItems} summary={summaryData} />
      </main>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <EducationOffersSection />
      </div>

      <FooterAny footerLinks={footerLinks} />
    </div>
  );
};

export default CheckoutPage;
