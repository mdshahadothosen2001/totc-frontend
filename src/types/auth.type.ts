export type AuthTab = "login" | "register";

export interface TabOption {
	label: string;
	value: AuthTab;
}

export type AuthLayoutProps = {
  imageSrc: string;
  imageHeading?: string;
  imageSubtext?: string;
  contentHeading?: string;
  contentSubtext?: string;
  tabOptions: TabOption[];
  activeValue: AuthTab;
  onChange: (value: AuthTab) => void;
  children: React.ReactNode;
};

export interface PasswordToggleProps {
    show: boolean;
    onClick: () => void;
}
