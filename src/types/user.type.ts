export interface User {
  id: string;
  name: string;
  email: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  is_staff?: boolean;
  is_superuser?: boolean;
  avatar_url?: string;
  profile_image?: string;
}

export interface UserProfileProps {
  user_info?: User | null;
  className?: string;
  withDrawer?: boolean;
}
