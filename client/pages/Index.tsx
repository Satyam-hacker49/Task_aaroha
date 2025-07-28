import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Code,
  Globe,
  Users,
  Lightbulb,
  Trophy,
  Calendar,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Star,
  Target,
  Zap,
  Heart,
  BookOpen
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aaroha-blue/10 to-aaroha-teal/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-aaroha-blue to-aaroha-teal text-white px-4 py-2">
              TECHNICAL EVENT 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-aaroha-navy mb-6">
              Welcome to <span className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal bg-clip-text text-transparent">Aaroha</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The official digital face of Aaroha. A platform that serves visitors to learn about our events, 
              view highlights, and show interest or volunteer via a form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white px-8 py-4 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Event
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-aaroha-blue text-aaroha-blue hover:bg-aaroha-blue hover:text-white px-8 py-4 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Aaroha Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">About Aaroha</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Introducing the event and its purpose
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-aaroha-navy mb-6">What is Aaroha?</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-aaroha-blue mt-0.5 flex-shrink-0" />
                  <p>Why Aaroha is organized? To showcase technical excellence and innovation in our community.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-aaroha-teal mt-0.5 flex-shrink-0" />
                  <p>What is its impact? Creating opportunities for students and professionals to connect, learn, and grow together.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Aaroha</strong> is a non-governmental organization based in <strong>Bhopal, Madhya Pradesh</strong>,
                  dedicated to the empowerment and holistic development of underprivileged children through education,
                  skill development, and community engagement programs.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-aaroha-navy mb-4 flex items-center">
                      <Target className="h-6 w-6 text-aaroha-blue mr-2" />
                      Our Vision
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      To create a society where every child, regardless of their background, has access to quality education
                      and opportunities for personal growth, enabling them to break the cycle of poverty and contribute
                      meaningfully to their communities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-aaroha-navy mb-4 flex items-center">
                      <Heart className="h-6 w-6 text-aaroha-teal mr-2" />
                      Our Mission
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      To provide comprehensive educational support, skill development programs, and mentorship to
                      underprivileged children in Bhopal, fostering their academic, personal, and social development
                      through innovative and sustainable initiatives.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-aaroha-navy mb-4 flex items-center">
                    <Users className="h-6 w-6 text-aaroha-blue mr-2" />
                    What Makes Us Different
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-aaroha-blue/5 rounded-lg">
                      <BookOpen className="h-8 w-8 text-aaroha-blue mx-auto mb-2" />
                      <p className="font-medium text-aaroha-navy">Holistic Education</p>
                      <p className="text-sm text-gray-600 mt-1">Beyond academics - life skills, creativity, and personal growth</p>
                    </div>
                    <div className="text-center p-4 bg-aaroha-teal/5 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-aaroha-teal mx-auto mb-2" />
                      <p className="font-medium text-aaroha-navy">Community-Driven</p>
                      <p className="text-sm text-gray-600 mt-1">Local volunteers and community involvement at the core</p>
                    </div>
                    <div className="text-center p-4 bg-aaroha-blue/5 rounded-lg">
                      <Globe className="h-8 w-8 text-aaroha-blue mx-auto mb-2" />
                      <p className="font-medium text-aaroha-navy">Sustainable Impact</p>
                      <p className="text-sm text-gray-600 mt-1">Long-term support and follow-up for lasting change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 bg-gradient-to-r from-aaroha-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Event Highlights</h2>
            <p className="text-xl text-gray-600">Showcasing what happens in Aaroha</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Code className="h-12 w-12 text-aaroha-blue mb-4" />
                <CardTitle className="text-aaroha-navy">Technical Competitions</CardTitle>
                <CardDescription>
                  Coding contests, hackathons, and algorithm challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Web Development</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mobile Apps</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AI/ML Projects</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-aaroha-teal mb-4" />
                <CardTitle className="text-aaroha-navy">Workshops</CardTitle>
                <CardDescription>
                  Hands-on learning sessions with industry experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Latest Technologies</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Best Practices</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Career Guidance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="h-12 w-12 text-aaroha-blue mb-4" />
                <CardTitle className="text-aaroha-navy">Networking</CardTitle>
                <CardDescription>
                  Connect with professionals and peers in the industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Industry Leaders</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Startup Founders</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fellow Students</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us / Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Join Us (Volunteer Page)</h2>
            <p className="text-xl text-gray-600">A form for students who want to be part of Aaroha</p>
          </div>
          
          <Card className="border-2 border-aaroha-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-aaroha-navy">Volunteer Registration</CardTitle>
              <CardDescription>Fill out this form to become a part of the Aaroha organizing team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="volunteer-reason">Why do you want to volunteer?</Label>
                <Textarea 
                  id="volunteer-reason" 
                  placeholder="Tell us about your motivation to be part of Aaroha..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Availability (checkbox or dropdown)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time (All Days)</SelectItem>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="specific-days">Specific Days</SelectItem>
                    <SelectItem value="flexible">Flexible Schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white py-3">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-20 bg-gradient-to-r from-aaroha-navy to-aaroha-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white px-4 py-2">
              RECRUITMENT 2025
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Requirements</h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Code className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold">TASK</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Must Include:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Form Fields:</h4>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Name</li>
                    <li>• Email</li>
                    <li>• Why do you want to volunteer?</li>
                    <li>• Availability (checkbox or dropdown)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Bonus Points:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-white/80">
                  <p><strong>1.</strong> Use of CSS Frameworks and Javascript libraries for styling and animations (Tailwind CSS, GSAP, Framer Motion)</p>
                  <p><strong>2.</strong> Deployment: Use platforms like Vercel, Netlify, or GitHub pages for deployment</p>
                  <p><strong>3.</strong> Form Validation at backend</p>
                  <p><strong>4.</strong> Responsiveness (Desktop, tablet, Mobile)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aaroha-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold">Aaroha</span>
              </div>
              <p className="text-white/80">
                The official digital platform for Aaroha technical events and community engagement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="/recruitment" className="hover:text-white transition-colors">Recruitment</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@aaroha.event</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Event Location, City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Aaroha. All rights reserved. Built with modern web technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
