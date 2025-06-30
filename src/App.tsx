
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocumentationLayout } from "./components/DocumentationLayout";
import Installation from "./pages/Installation";
import Languages from "./pages/Languages";
import QuickStart from "./pages/QuickStart";
import Undetectability from "./pages/Stealth";
import Hooks from "./pages/Hooks";
import Utilities from "./pages/Utilities";
import SubscriptionHelpForm from "./pages/Configuration";
import Troubleshooting from "./pages/Troubleshooting";
import NotFound from "./pages/NotFound";
import Shortcuts from "./pages/Shortcuts";
import SandBox from "./pages/SandBox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DocumentationLayout>
          <Routes>
            <Route path="/" element={<Installation />} />
            <Route path="/shortcuts" element={<Shortcuts />} />
            <Route path="/sandbox" element={<SandBox />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/stealth" element={<Undetectability />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/helpform" element={<SubscriptionHelpForm />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DocumentationLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
