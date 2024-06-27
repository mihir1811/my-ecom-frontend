import { useSelector } from "react-redux";

const useRole = (role) => {
  const currentUser = useSelector((state) => state.userData?.userRole);
  return currentUser === role;
};

export default useRole;
