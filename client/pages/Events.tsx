import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-aaroha-navy mb-8">Events</h1>
          <div className="bg-gradient-to-r from-aaroha-blue/10 to-aaroha-teal/10 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              This page will showcase all the events happening during Aaroha. 
              Continue prompting to add specific event details, schedules, 
              and registration information.
            </p>
            <p className="text-gray-500">
              Placeholder content - ask the AI to expand this section with event listings.
            </p>
          </div>
          <Link to="/">
            <Button variant="outline" className="border-aaroha-blue text-aaroha-blue hover:bg-aaroha-blue hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
