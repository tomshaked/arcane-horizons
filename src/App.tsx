
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchDetail from "./pages/ResearchDetail";

const queryClient = new QueryClient();

// Get the base URL from the environment or use the repository name for GitHub Pages
const getBasename = () => {
  // Extract the repository name from the URL path
  const path = window.location.pathname;
  const pathSegments = path.split('/');
  
  // If we're on GitHub Pages (the path has more than one segment)
  if (pathSegments.length > 2) {
    return '/' + pathSegments[1]; // Return the repository name with leading slash
  }
  
  // Otherwise, use root
  return '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research/uav-ugv-collaboration" element={<ResearchDetail />} />
          <Route path="/research/textile-based-manufacturing" element={<ResearchDetail />} />
          <Route path="/research/performative-ground-forming" element={<ResearchDetail />} />
          <Route path="/research/robotic-stone-carving" element={<ResearchDetail />} />
          <Route path="/research/robotic-earthmoving" element={<ResearchDetail />} />
          <Route path="/research/additive-manufacturing-with-local-soil" element={<ResearchDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
