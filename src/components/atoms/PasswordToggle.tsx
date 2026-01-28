import React from "react";
import { Box } from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordToggleProps {
    show: boolean;
    onClick: () => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({ show, onClick }) => {
    const label = show ? "Hide password" : "Show password";

    return (
        <Box
            as="button"
            position="absolute"
            right="20px"
            top="50%"
            transform="translateY(-50%)"
            cursor="pointer"
            bg="transparent"
            onClick={onClick}
            title={label}
            aria-label={label}
        >
            {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
        </Box>
    );
};

export default PasswordToggle;
