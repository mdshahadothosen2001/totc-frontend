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
  // E-Learning profile fields
  date_of_birth?: string; // ISO date string e.g. 2012-12-12
  gender?: string;
  region?: string;
  religion?: string;
  joined_date?: string; // ISO date string
  student_id?: string;
  bio?: string;
  // professional fields
  age?: number;
  title?: string; // role / professional title
  organization?: string;
  education?: string;
  skills?: string[];
}

export interface UserProfileProps {
  user_info?: User | null;
  className?: string;
  withDrawer?: boolean;
}
