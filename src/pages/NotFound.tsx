
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Scroll to top when landing on 404 page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Section>
        <div className="text-center py-20">
          <h1 className="font-display text-4xl mb-4">404 - Page Not Found</h1>
          <p className="mb-8 text-foreground/70">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default NotFound;
