import React from "react";
import { Card, CardContent } from "../../ui";
import { Separator } from "../../ui";
import { CartItem, type CartItemProps } from "../../molecules";

export interface SummaryData {
    subtotal: string;
    couponDiscount: string;
    tax: string;
    total: string;
}

export interface OrderSummaryProps {
    items: CartItemProps[];
    summary: SummaryData;
    className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
    summary,
    className = "",
}) => {
    return (
        <aside
            className={`w-[664px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] ${className}`}
        >
            <div className="relative">
                <div className="absolute inset-0 bg-[#9ccbff] rounded-[20px] opacity-20 -z-10" />
                <Card className="bg-white/80 backdrop-blur-sm shadow-none border-0">
                    <CardContent className="p-8">
                        <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#252641] text-2xl mb-6">
                            Summary
                        </h2>

                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <CartItem key={index} {...item} />
                            ))}
                        </div>

                        <Separator className="my-6 bg-[#d9d9d9]" />

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    Subtotal
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    {summary.subtotal}
                                </span>
                            </div>

                            <Separator className="bg-[#d9d9d9]" />

                            <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    Coupon Discount
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    {summary.couponDiscount}
                                </span>
                            </div>

                            <Separator className="bg-[#d9d9d9]" />

                            <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    TAX
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-xl tracking-[0.40px] leading-9">
                                    {summary.tax}
                                </span>
                            </div>

                            <Separator className="bg-[#d9d9d9]" />

                            <div className="flex justify-between items-center">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0.40px] leading-9">
                                    Total
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0.40px] leading-9">
                                    {summary.total}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </aside>
    );
};

export default OrderSummary;
