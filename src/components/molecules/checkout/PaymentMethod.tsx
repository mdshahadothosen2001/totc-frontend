import React from "react";
import { Label } from "../../ui";

export interface PaymentMethod {
    id: string;
    image: string;
    alt: string;
    selected: boolean;
}

export interface PaymentMethodSelectorProps {
    methods: PaymentMethod[];
    onSelect?: (id: string) => void;
    className?: string;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
    methods,
    onSelect,
    className = "",
}) => {
    return (
        <div className={className}>
            <Label className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-lg mb-4 block">
                Cart Type
            </Label>
            <div className="flex gap-4">
                {methods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => onSelect?.(method.id)}
                        className={`flex items-center justify-center w-[139px] h-[92px] bg-white rounded-[10px] border ${method.selected
                                ? "border-[#49bbbd] border-[0.5px]"
                                : "border-[#d9d9d9]"
                            } hover:border-[#49bbbd] transition-colors`}
                    >
                        <img
                            className="max-w-[85px] max-h-[85px] object-contain"
                            alt={method.alt}
                            src={method.image}
                        />
                    </button>
                ))}
                <div className="flex items-center justify-center w-[170px] h-[92px] rounded-[15px] border border-[#d9d9d9]">
                    <div className="flex gap-1">
                        <div className="w-[35px] h-[35px] bg-[#ff0000cc] rounded-full" />
                        <div className="w-[35px] h-[35px] bg-[#ffff00cc] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodSelector;
