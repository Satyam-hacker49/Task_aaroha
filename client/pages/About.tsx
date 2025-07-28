import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  BookOpen,
  Target,
  Globe,
  Award,
  Lightbulb,
  HandHeart,
  Star
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-aaroha-blue/10 to-aaroha-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-aaroha-blue to-aaroha-teal text-white px-4 py-2">
              EMPOWERING LIVES SINCE 2014
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-aaroha-navy mb-6">
              About <span className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal bg-clip-text text-transparent">Aaroha</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A non-governmental organization based in Bhopal, Madhya Pradesh, dedicated to empowering 
              underprivileged children through education and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aaroha-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide quality education and holistic development opportunities to underprivileged children, 
                fostering their growth and empowering them to build a better future for themselves and their communities.
              </p>
              <div className="flex items-center space-x-3 text-aaroha-blue">
                <Target className="h-6 w-6" />
                <span className="font-semibold">Transforming Lives Through Education</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40 transition-colors">
                <CardHeader className="pb-3">
                  <BookOpen className="h-12 w-12 text-aaroha-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Quality learning opportunities</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40 transition-colors">
                <CardHeader className="pb-3">
                  <Heart className="h-12 w-12 text-aaroha-teal mx-auto mb-2" />
                  <CardTitle className="text-lg">Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Holistic development</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40 transition-colors">
                <CardHeader className="pb-3">
                  <Users className="h-12 w-12 text-aaroha-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Building connections</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40 transition-colors">
                <CardHeader className="pb-3">
                  <Award className="h-12 w-12 text-aaroha-teal mx-auto mb-2" />
                  <CardTitle className="text-lg">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Quality in everything</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Aasha */}
      <section className="py-20 bg-gradient-to-r from-aaroha-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Project Aasha</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship initiative providing hope and opportunities for children to explore and showcase their talents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-aaroha-navy mb-6">Why Project Aasha is Organized</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-aaroha-blue mt-0.5 flex-shrink-0" />
                  <p><strong>Talent Discovery:</strong> Many underprivileged children have hidden talents that go unrecognized due to lack of opportunities and platforms to showcase their abilities.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-aaroha-teal mt-0.5 flex-shrink-0" />
                  <p><strong>Confidence Building:</strong> Children from disadvantaged backgrounds often lack self-confidence and belief in their own capabilities.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-aaroha-blue mt-0.5 flex-shrink-0" />
                  <p><strong>Holistic Development:</strong> Beyond academic learning, children need emotional, social, and creative development opportunities.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-aaroha-teal mt-0.5 flex-shrink-0" />
                  <p><strong>Breaking Barriers:</strong> Creating pathways for children to overcome socio-economic barriers through skill development and self-expression.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-aaroha-navy mb-6">Impact of Project Aasha</h3>
              <div className="space-y-4">
                <Card className="border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="h-6 w-6 text-aaroha-blue" />
                      <span className="font-semibold text-aaroha-navy">Enhanced Self-Esteem</span>
                    </div>
                    <p className="text-sm text-gray-600">Children develop confidence in their abilities and gain belief in their potential</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Star className="h-6 w-6 text-aaroha-teal" />
                      <span className="font-semibold text-aaroha-navy">Talent Recognition</span>
                    </div>
                    <p className="text-sm text-gray-600">Hidden talents are discovered and nurtured through various activities and programs</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Globe className="h-6 w-6 text-aaroha-blue" />
                      <span className="font-semibold text-aaroha-navy">Future Opportunities</span>
                    </div>
                    <p className="text-sm text-gray-600">Creates pathways for better education and career prospects</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <HandHeart className="h-6 w-6 text-aaroha-teal" />
                      <span className="font-semibold text-aaroha-navy">Community Impact</span>
                    </div>
                    <p className="text-sm text-gray-600">Families and communities benefit from children's growth and development</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">How we make a difference in the lives of children</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-aaroha-navy mb-2">Identify</h3>
              <p className="text-gray-600 text-sm">Locate children in need of educational support in our communities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-aaroha-navy mb-2">Engage</h3>
              <p className="text-gray-600 text-sm">Build trust and establish meaningful connections with children and families</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-aaroha-navy mb-2">Educate</h3>
              <p className="text-gray-600 text-sm">Provide quality educational experiences and skill development opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-aaroha-navy mb-2">Empower</h3>
              <p className="text-gray-600 text-sm">Enable children to build better futures for themselves and their communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-aaroha-navy to-aaroha-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can create lasting change in the lives of underprivileged children. 
            Your support helps us continue our work of empowerment through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-aaroha-teal text-white hover:bg-aaroha-teal/90 px-8 py-4"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-aaroha-navy px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
