
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
  // For local development, use root path
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '/';
  }
  
  // For GitHub Pages deployment
  const pathSegments = window.location.pathname.split('/');
  
  // If we're on GitHub Pages (the path has a repository name as the first segment)
  if (pathSegments.length > 1 && pathSegments[1] !== '') {
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
          <Route path="/research/:projectId" element={<ResearchDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
