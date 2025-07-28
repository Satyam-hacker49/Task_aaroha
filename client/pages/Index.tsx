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
              EMPOWERING CHILDREN SINCE 2014
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-aaroha-navy mb-6">
              Welcome to <span className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal bg-clip-text text-transparent">Aaroha</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A non-governmental organization based in Bhopal, Madhya Pradesh, dedicated to empowering
              underprivileged children through education, healthcare, and social support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white px-8 py-4 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-aaroha-blue text-aaroha-blue hover:bg-aaroha-blue hover:text-white px-8 py-4 text-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Our Programs
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
              Empowering underprivileged children through education and holistic development since 2014
            </p>
          </div>

          {/* Main Description */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                <strong>Aaroha</strong> is a non-governmental organization based in <strong>Bhopal, Madhya Pradesh</strong>,
                dedicated to the empowerment and holistic development of underprivileged children through education,
                healthcare, and social support. Founded in 2014 and officially registered in 2017, our mission is to
                ensure that no child is deprived of education due to lack of resources.
              </p>
            </div>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-aaroha-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a society where every child, regardless of their background, has access to quality education
                and opportunities for personal growth, enabling them to break the cycle of poverty and contribute
                meaningfully to their communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-teal to-aaroha-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-aaroha-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide comprehensive educational support, skill development programs, and mentorship to
                underprivileged children in Bhopal, fostering their academic, personal, and social development
                through innovative and sustainable initiatives.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-aaroha-navy mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-aaroha-blue/5 to-aaroha-blue/10 rounded-lg hover:shadow-md transition-shadow">
                <BookOpen className="h-12 w-12 text-aaroha-blue mx-auto mb-4" />
                <h4 className="font-semibold text-aaroha-navy mb-2">Education First</h4>
                <p className="text-sm text-gray-600">Quality education as the foundation for breaking the poverty cycle</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-aaroha-teal/5 to-aaroha-teal/10 rounded-lg hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-aaroha-teal mx-auto mb-4" />
                <h4 className="font-semibold text-aaroha-navy mb-2">Community Driven</h4>
                <p className="text-sm text-gray-600">Local volunteers and community involvement at every level</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-aaroha-blue/5 to-aaroha-blue/10 rounded-lg hover:shadow-md transition-shadow">
                <Globe className="h-12 w-12 text-aaroha-blue mx-auto mb-4" />
                <h4 className="font-semibold text-aaroha-navy mb-2">Sustainable Impact</h4>
                <p className="text-sm text-gray-600">Long-term support and follow-up for lasting positive change</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-aaroha-teal/5 to-aaroha-teal/10 rounded-lg hover:shadow-md transition-shadow">
                <Lightbulb className="h-12 w-12 text-aaroha-teal mx-auto mb-4" />
                <h4 className="font-semibold text-aaroha-navy mb-2">Holistic Development</h4>
                <p className="text-sm text-gray-600">Beyond academics - life skills, creativity, and personal growth</p>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-gradient-to-r from-aaroha-light to-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-aaroha-navy mb-8 text-center">Aaroha at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-aaroha-blue mb-2">2014</div>
                <p className="text-gray-600 text-sm">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aaroha-teal mb-2">500+</div>
                <p className="text-gray-600 text-sm">Children Empowered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aaroha-blue mb-2">4</div>
                <p className="text-gray-600 text-sm">Core Programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aaroha-teal mb-2">10+</div>
                <p className="text-gray-600 text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-gradient-to-r from-aaroha-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive initiatives for holistic child development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-aaroha-blue mb-4" />
                <CardTitle className="text-aaroha-navy">Project Akshar</CardTitle>
                <CardDescription>
                  Daily learning sessions providing multidisciplinary education since 2014
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Monday to Friday sessions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Multiple subjects covered</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Skill development focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-aaroha-teal mb-4" />
                <CardTitle className="text-aaroha-navy">Project Anand</CardTitle>
                <CardDescription>
                  Educational trips and engaging programs making learning fun and interactive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Science exhibitions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Annual programs</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Educational trips</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-aaroha-blue mb-4" />
                <CardTitle className="text-aaroha-navy">Project Aahar</CardTitle>
                <CardDescription>
                  Nutritious meal program combating hunger and malnutrition in slum areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Daily nutritious meals</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Volunteer-prepared food</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fighting malnutrition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="h-12 w-12 text-aaroha-teal mb-4" />
                <CardTitle className="text-aaroha-navy">Project Pathshala</CardTitle>
                <CardDescription>
                  School admission support with full educational expense coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quality school admissions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Complete expense coverage</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Books & uniforms provided</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Volunteer With Aaroha</h2>
            <p className="text-xl text-gray-600">Join our mission to empower underprivileged children through education and care</p>
          </div>

          <Card id="Formm" className="border-2 border-aaroha-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-aaroha-navy">Volunteer Registration</CardTitle>
              <CardDescription>Help us make a difference in children's lives. Fill out this form to become a part of our volunteer community.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Your age" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program-interest">Which program would you like to volunteer for?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="akshar">Project Akshar (Education)</SelectItem>
                    <SelectItem value="anand">Project Anand (Fun Learning)</SelectItem>
                    <SelectItem value="aahar">Project Aahar (Nutrition)</SelectItem>
                    <SelectItem value="pathshala">Project Pathshala (School Support)</SelectItem>
                    <SelectItem value="any">Any program</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volunteer-reason">Why do you want to volunteer with Aaroha?</Label>
                <Textarea
                  id="volunteer-reason"
                  placeholder="Share your motivation and how you'd like to contribute to our mission of empowering children..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays (Mon-Fri)</SelectItem>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="flexible">Flexible Schedule</SelectItem>
                    <SelectItem value="specific">Specific Days (will discuss)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white py-3">
                Submit Volunteer Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gradient-to-r from-aaroha-navy to-aaroha-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white px-4 py-2">
              SINCE 2014
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming lives through education, nutrition, and care - see how Aaroha is making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-white/80">Children Empowered</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-white/80">Years of Service</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-white/80">Meals Served Daily</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-white/80">School Admissions</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Every Child Deserves Education</h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Our mission is to ensure that no child is deprived of education due to lack of resources.
              Together, we can build a brighter future for every child.
            </p>
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
                A non-governmental organization empowering underprivileged children through education, healthcare, and social support since 2014.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className="hover:text-white transition-colors">Project Akshar</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Project Anand</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Project Aahar</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Project Pathshala</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@aaroha.org.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Contact via website</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bhopal, Madhya Pradesh</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Aaroha NGO. All rights reserved. Empowering children through education since 2014.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
