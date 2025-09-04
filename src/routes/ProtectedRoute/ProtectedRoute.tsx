import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/AuthStore/authStore";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("Please login to continue.");
      navigate("/login", { replace: true });
    } else if (allowedRoles && !allowedRoles.includes(user.role)) {
      toast.error("You are not authorized to access this page.");
      navigate("/", { replace: true });
    }
  }, [user, allowedRoles, navigate]);

  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return null;
  }

  return <>{children}</>;
}
export default ProtectedRoute;