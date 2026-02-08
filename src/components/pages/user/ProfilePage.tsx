import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useNavStore from "../../../hooks/useNavStore";
import UserInfo from "./UserInfo";

const Profile = () => {
  const prev = useNavStore((s) => s.prev);
  const navigateTo = useNavStore((s) => s.navigate);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== prev) navigateTo(location.pathname);
  }, [location.pathname]);

  const handleBack = () => {
    if (prev && prev !== location.pathname) navigate(prev);
    else navigate(-1);
  };

  return (
    <div className="p-6">
      <button
        onClick={handleBack}
        className="mb-4 text-[#49BBBD] font-bold"
        aria-label="Go back"
      >
        &larr; Back
      </button>
      <UserInfo className="mt-4" />
    </div>
  );
};

export default Profile;
