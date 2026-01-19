import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GridLayoutToggle from "./GridLayoutToggle";
import { NotificationPromptDialog } from "./NotificationPromptDialog";
import { useFirstLoginNotificationPrompt } from "@/hooks/useFirstLoginNotificationPrompt";
import { useNotificationBonus } from "@/hooks/useNotificationBonus";
import { useGamification } from "@/contexts/GamificationContext";

const Layout = () => {
  const location = useLocation();
  const { showPrompt, setShowPrompt, dismissPrompt } = useFirstLoginNotificationPrompt();
  const { applyBonus } = useNotificationBonus();
  const { user, refreshGamification } = useGamification();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNotificationSuccess = async () => {
    if (user) {
      await applyBonus(user.id);
      await refreshGamification();
    }
    dismissPrompt();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <GridLayoutToggle />
      
      {/* Notification Prompt Dialog - shown after first login */}
      <NotificationPromptDialog
        open={showPrompt}
        onOpenChange={(open) => {
          if (!open) dismissPrompt();
          setShowPrompt(open);
        }}
        onSuccess={handleNotificationSuccess}
      />
    </div>
  );
};

export default Layout;