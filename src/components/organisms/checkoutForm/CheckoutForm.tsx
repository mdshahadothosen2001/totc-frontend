import React from "react";
import { ButtonUI, Card, CardContent, Checkbox, Input, Label } from "../../ui";
import {
    PaymentMethodSelector,
    type PaymentMethod,
} from "../../molecules";

export interface CheckoutFormProps {
    paymentMethods: PaymentMethod[];
    onPaymentMethodSelect?: (id: string) => void;
    onSubmit?: () => void;
    className?: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
    paymentMethods,
    onPaymentMethodSelect,
    onSubmit,
    className = "",
}) => {
    return (
        <Card
            className={`flex-1 max-w-[962px] shadow-[0px_18.83px_47.08px_#2f327d1a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ${className}`}
        >
            <CardContent className="p-12">
                <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-[#252641] text-4xl mb-12">
                    Checkout
                </h1>

                <div className="space-y-8">
                    <PaymentMethodSelector
                        methods={paymentMethods}
                        onSelect={onPaymentMethodSelect}
                    />

                    <div>
                        <Label
                            htmlFor="cardName"
                            className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-lg mb-2 block"
                        >
                            Name on Card
                        </Label>
                        <Input
                            id="cardName"
                            placeholder="Enter name on Card"
                            className="h-[60px] rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] text-[#9d9a9a] text-lg"
                        />
                    </div>

                    <div>
                        <Label
                            htmlFor="cardNumber"
                            className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-lg mb-2 block"
                        >
                            Card Number
                        </Label>
                        <Input
                            id="cardNumber"
                            placeholder="Enter Card Number"
                            className="h-[60px] rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] text-[#9d9a9a] text-lg"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Label
                                htmlFor="expirationDate"
                                className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-lg mb-2 block"
                            >
                                Expiration Date ( MM/YY )
                            </Label>
                            <Input
                                id="expirationDate"
                                placeholder="Enter Expiration Date"
                                className="h-[60px] rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] text-[#9d9a9a] text-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <Label
                                htmlFor="cvc"
                                className="[font-family:'Poppins',Helvetica] font-semibold text-[#5b5b5b] text-lg mb-2 block"
                            >
                                CVC
                            </Label>
                            <Input
                                id="cvc"
                                placeholder="Enter CVC"
                                className="h-[60px] rounded-[10px] border-[#d9d9d9] [font-family:'Poppins',Helvetica] text-[#9d9a9a] text-lg"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Checkbox
                            id="saveInfo"
                            className="w-3.5 h-3.5 rounded border-[#d9d9d9]"
                        />
                        <Label
                            htmlFor="saveInfo"
                            className="[font-family:'Poppins',Helvetica] font-normal text-[#9d9a9a] text-lg cursor-pointer"
                        >
                            Save my information for faster checkout
                        </Label>
                    </div>

                    <ButtonUI
                        onClick={onSubmit}
                        className="w-full h-[63px] bg-[#49bbbd] hover:bg-[#3da9ab] rounded-xl [font-family:'Poppins',Helvetica] font-normal text-white text-[26px] transition-colors"
                    >
                        Confirm Payment
                    </ButtonUI>
                </div>
            </CardContent>
        </Card>
    );
};

export default CheckoutForm;
