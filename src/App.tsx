
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchDetail from "./pages/ResearchDetail";

const queryClient = new QueryClient();

// Check if we're running on GitHub Pages
const isGitHubPages = 
  window.location.hostname.includes('github.io') || 
  window.location.hostname.includes('githubusercontent.com');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {isGitHubPages ? (
        // Use HashRouter for GitHub Pages to avoid 404s on refresh
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research/:projectId" element={<ResearchDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      ) : (
        // Use BrowserRouter for other environments
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research/:projectId" element={<ResearchDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
