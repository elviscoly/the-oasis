import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useUser() {
    const {isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}