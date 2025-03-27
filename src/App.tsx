
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";
import GamePlayer from "./pages/GamePlayer";
import Eaglercraft from "./pages/Eaglercraft";
import Proxy from "./pages/Proxy";
import Discord from "./pages/Discord";
import Apps from "./pages/Apps";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GamePlayer />} />
          <Route path="/eaglercraft" element={<Eaglercraft />} />
          <Route path="/proxy" element={<Proxy />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
