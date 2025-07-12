import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-expo";
import { useApiClient, userApi } from "@/utils/api";


export const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const api = useApiClient();

  const syncUserMutation = useMutation({
    mutationFn: () => userApi.syncUser(api),
    onSuccess: (response: any) => console.log("User synced successfully:", response.data.user),
    onError: (error: any) => {
      console.error("User sync failed:", {
        status: error.response?.status,
        errorMessage: error.response?.data?.error || error.message,
        responseData: error.response?.data,
        headers: error.response?.headers,
        requestUrl: error.config?.url,
        requestHeaders: error.config?.headers,
      });
    },
  });

  // auto-sync user when signed in
  useEffect(() => {
    // if user is signed in and user is not synced yet, sync user
    if (isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn]);

  return null;
};

// import { useEffect } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { useAuth } from "@clerk/clerk-expo";
// import { userApi, useApiClient } from "../utils/api";

// export const useUserSync = () => {
//   const { isSignedIn, getToken } = useAuth();
//   const api = useApiClient();

//   const syncUserMutation = useMutation({
//     mutationFn: () => userApi.syncUser(api),
//     onSuccess: (response: any) => console.log("User synced successfully:", response.data),
//     onError: (error: any) => {
//       console.error("User sync failed:", {
//         status: error.response?.status,
//         errorMessage: error.response?.data?.error || error.message,
//         responseData: error.response?.data,
//         headers: error.response?.headers,
//         requestUrl: error.config?.url,
//         requestHeaders: error.config?.headers,
//       });
//     },
//   });

//   useEffect(() => {
//     if (isSignedIn && !syncUserMutation.isSuccess && !syncUserMutation.loading) {
//       console.log("Triggering user sync");
//       getToken().then(token => console.log("Clerk token:", token ? "Present" : "Missing"));
//       syncUserMutation.mutate();
//     }
//   }, [isSignedIn]);

//   return null;
// };
