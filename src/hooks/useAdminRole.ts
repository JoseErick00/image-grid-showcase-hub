import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useGamification } from "@/contexts/GamificationContext";

export const useAdminRole = () => {
  const { user, loading: userLoading } = useGamification();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAdminRole = async () => {
      // Wait for user loading to complete
      if (userLoading) {
        return;
      }

      // If no user, not an admin
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, error: invokeError } = await supabase.functions.invoke("check-admin-role");

        if (invokeError) {
          console.error("Error checking admin role:", invokeError);
          setError(invokeError.message);
          setIsAdmin(false);
        } else {
          setIsAdmin(data?.isAdmin || false);
        }
      } catch (err: any) {
        console.error("Error in useAdminRole:", err);
        setError(err.message);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminRole();
  }, [user, userLoading]);

  return { isAdmin, loading: loading || userLoading, error };
};
