import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Hasnain Ahmad";
    return () => {
      document.title = "Hasnain Ahmad — Full Stack Developer | React.js Developer";
    };
  }, []);

  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink-900 px-5 pt-16 text-center text-white">
      <div>
        <p className="font-mono text-sm text-jade-300">404</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">This page doesn't exist</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">The link may be outdated. Everything about my work is on the home page.</p>
        <Button asChild variant="light" size="lg" className="mt-8">
          <Link to="/">
            <ArrowLeft /> Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
