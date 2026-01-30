import type { JSX } from "react";
import { CheckoutForm, OrderSummary, Footer } from "../../../components/organisms";
import { EducationOffersSection } from "./EducationOffer"
import { NavBar } from "../../molecules";

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
      <NavBar/>

      <main className="px-[120px] py-12 flex gap-8">
        <CheckoutForm paymentMethods={paymentMethods} />
        <OrderSummary items={cartItems} summary={summaryData} />
      </main>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <EducationOffersSection />
      </div>

      <Footer/>
    </div>
  );
};

export default CheckoutPage;
