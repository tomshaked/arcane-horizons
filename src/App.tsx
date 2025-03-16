
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchDetail from "./pages/ResearchDetail";

const queryClient = new QueryClient();

// Simpler basename detection that works better with GitHub Pages
const getBasename = () => {
  // For local development or root domain deployment, use root path
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      window.location.pathname === '/') {
    return '/';
  }
  
  // Extract the repository name from GitHub Pages URL pattern
  const pathMatch = window.location.pathname.match(/^\/([^\/]+)/);
  if (pathMatch) {
    return `/${pathMatch[1]}`;
  }
  
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
