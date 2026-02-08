
import { useAuth } from "../../contexts/useAuth";
import type { User } from "../../types/user.type";

export const avatarFromUser = (u?: User | null) => {
  if (!u) return null;
  return u.profile_image || u.avatar_url || null;
};

export const useUserProfile = (user_info?: User | null) => {
  const { user: authUser } = useAuth();
  const user = user_info ?? authUser ?? null;

  const avatar = avatarFromUser(user);

  const displayName = user
    ? user.name || `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim()
    : "";

  const initials = (() => {
    if (!user) return "";
    const name = displayName || user.username || user.email || "";
    const parts = name.split(" ").filter(Boolean);
    const chars = parts.length
      ? parts.map((p) => p[0]).slice(0, 2).join("")
      : name[0] || "";
    return chars.toUpperCase();
  })();

  return { user, avatar, displayName, initials };
};

export default useUserProfile;
