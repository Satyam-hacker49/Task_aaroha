import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  BookOpen,
  Trophy,
  Heart,
  Gift,
  Flag,
  Lightbulb,
  Award,
  Music
} from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "A se Ah",
      description: "An annual event that recreates the spirit of a school function for underprivileged children",
      icon: Music,
      color: "aaroha-blue",
      activities: [
        "Morning assemblies with inspiring talks",
        "Group meals fostering community",
        "Interactive quizzes and competitions", 
        "Fun games and recreational activities",
        "Cultural performances and celebrations"
      ],
      impact: "Brings joy and learning together in a celebration of childhood"
    },
    {
      title: "Aakar",
      description: "Holistic development project organizing diverse weekend activities since 2014",
      icon: Lightbulb,
      color: "aaroha-teal", 
      activities: [
        "Technical skill development workshops",
        "Communication skills training",
        "Creative arts and crafts sessions",
        "Leadership development activities",
        "Team building exercises"
      ],
      impact: "Equipping children with multidisciplinary skills for their future"
    },
    {
      title: "Aavishkar",
      description: "Innovation-focused program for holistic child development through creative exploration",
      icon: Star,
      color: "aaroha-blue",
      activities: [
        "Science and technology exploration",
        "Creative problem-solving sessions",
        "Innovation workshops and demos",
        "Hands-on project development",
        "Presentation and showcase events"
      ],
      impact: "Fostering creativity and innovation in young minds"
    },
    {
      title: "Aasha",
      description: "A series of events providing opportunities for children to explore and showcase their talents",
      icon: Heart,
      color: "aaroha-teal",
      activities: [
        "Talent discovery workshops",
        "Performance and showcase events",
        "Confidence building activities",
        "Personal growth sessions",
        "Mentorship programs"
      ],
      impact: "Building confidence and encouraging personal growth"
    },
    {
      title: "Unmilanam",
      description: "Celebrating the essence of Indian education system with distinguished guests",
      icon: BookOpen,
      color: "aaroha-blue",
      activities: [
        "Educational heritage discussions",
        "Guest speaker sessions",
        "Cultural education workshops",
        "Traditional learning methods",
        "Educational system appreciation"
      ],
      impact: "Connecting children to their educational heritage and inspiring deeper learning"
    },
    {
      title: "Alankaran",
      description: "Formal recognition event honoring volunteers and outgoing management team",
      icon: Award,
      color: "aaroha-teal",
      activities: [
        "Volunteer recognition ceremony",
        "Achievement awards presentation",
        "Team appreciation events",
        "Contribution acknowledgments",
        "Community celebration"
      ],
      impact: "Celebrating dedication and recognizing outstanding contributions"
    }
  ];

  const fundraisingEvents = [
    {
      title: "Independence Day Fundraiser",
      date: "August 15th",
      description: "Annual patriotic celebration across Bhopal locations",
      icon: Flag,
      focus: "Reigniting the spirit of patriotism and encouraging contributions to nation building"
    },
    {
      title: "Republic Day Fundraiser", 
      date: "January 26th",
      description: "Community gathering celebrating constitutional values",
      icon: Flag,
      focus: "Promoting civic responsibility and community participation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-aaroha-blue/10 to-aaroha-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-aaroha-blue to-aaroha-teal text-white px-4 py-2">
              PROJECT AASHA HIGHLIGHTS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-aaroha-navy mb-6">
              Event <span className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal bg-clip-text text-transparent">Highlights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Showcasing what happens in Aasha - transformative activities that help children explore their talents,
              build confidence, and create lasting positive change in their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Aasha Event Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">What Happens in Aasha</h2>
            <p className="text-xl text-gray-600">Transformative activities that foster talent discovery and personal growth</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="h-8 w-8 text-aaroha-blue" />
                  <CardTitle className="text-xl text-aaroha-navy">Talent Discovery Workshops</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Interactive sessions helping children identify and explore their unique abilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-aaroha-navy mb-2">Activities Include:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Art and creativity sessions</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Music and dance exploration</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Sports and physical activities</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Storytelling and drama</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Science and innovation projects</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-aaroha-blue/10">
                    <p className="text-sm font-medium text-aaroha-navy">
                      <strong>Impact:</strong> Children discover hidden talents and develop new interests beyond traditional academics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Trophy className="h-8 w-8 text-aaroha-teal" />
                  <CardTitle className="text-xl text-aaroha-navy">Showcase & Performance Events</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Platforms for children to display their talents and build confidence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-aaroha-navy mb-2">Event Highlights:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Cultural performances and competitions</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Art exhibitions showcasing children's work</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Talent shows with community audience</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Recognition and award ceremonies</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Peer appreciation and feedback sessions</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-aaroha-teal/10">
                    <p className="text-sm font-medium text-aaroha-navy">
                      <strong>Impact:</strong> Builds self-confidence and provides recognition for children's achievements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-aaroha-blue/20 hover:border-aaroha-blue/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Heart className="h-8 w-8 text-aaroha-blue" />
                  <CardTitle className="text-xl text-aaroha-navy">Personal Growth Sessions</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Building emotional intelligence and life skills for holistic development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-aaroha-navy mb-2">Focus Areas:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Confidence building exercises</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Communication skills development</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Leadership and teamwork activities</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Goal setting and achievement planning</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Emotional support and counseling</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-aaroha-blue/10">
                    <p className="text-sm font-medium text-aaroha-navy">
                      <strong>Impact:</strong> Develops essential life skills and emotional resilience for future success
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-aaroha-teal/20 hover:border-aaroha-teal/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="h-8 w-8 text-aaroha-teal" />
                  <CardTitle className="text-xl text-aaroha-navy">Mentorship Programs</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Connecting children with mentors who guide their personal and academic journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-aaroha-navy mb-2">Program Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>One-on-one mentoring sessions</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Career guidance and counseling</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Educational pathway planning</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Regular progress monitoring</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Family engagement and support</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-aaroha-teal/10">
                    <p className="text-sm font-medium text-aaroha-navy">
                      <strong>Impact:</strong> Provides guidance and support for long-term personal and academic success
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundraising Events */}
      <section className="py-20 bg-gradient-to-r from-aaroha-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Fundraising Events</h2>
            <p className="text-xl text-gray-600">Annual patriotic celebrations supporting our mission</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fundraisingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-aaroha-blue/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-8 w-8 text-aaroha-blue" />
                        <CardTitle className="text-xl text-aaroha-navy">{event.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-aaroha-blue text-aaroha-blue">
                        {event.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-aaroha-blue/10 p-4 rounded-lg">
                      <p className="text-sm text-aaroha-navy">
                        <strong>Focus:</strong> {event.focus}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aaroha-navy mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Creating meaningful change through our events</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-aaroha-navy mb-2">500+</h3>
              <p className="text-gray-600">Children Impacted</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-aaroha-navy mb-2">50+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-aaroha-navy mb-2">100+</h3>
              <p className="text-gray-600">Volunteers Engaged</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-aaroha-navy mb-2">10+</h3>
              <p className="text-gray-600">Locations in Bhopal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-aaroha-navy to-aaroha-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Events</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of transformative experiences that make a real difference in children's lives. 
            Your participation helps us create lasting impact in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-aaroha-navy hover:bg-gray-100 px-8 py-4"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Volunteer for Events
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-aaroha-navy px-8 py-4"
            >
              <Gift className="mr-2 h-5 w-5" />
              Support Our Cause
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
