import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Mail, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  const caseStudies = [
    {
      name: "Digital Marketing Agency",
      industry: "Marketing",
      location: "Austin, TX",
      results: {
        leads: 12,
        clients: 4,
        revenue: "$18,000",
        timeframe: "2 weeks",
      },
      quote:
        "I couldn't believe how fast the leads started coming in. The AI found prospects I never would have thought to target.",
      owner: "Sarah Chen",
    },
    {
      name: "Local HVAC Company",
      industry: "Home Services",
      location: "Phoenix, AZ",
      results: {
        leads: 8,
        clients: 3,
        revenue: "$12,500",
        timeframe: "10 days",
      },
      quote: "Best $200 I ever spent. Got 3 new HVAC installations from the first week alone.",
      owner: "Mike Rodriguez",
    },
    {
      name: "Business Consultant",
      industry: "Consulting",
      location: "Miami, FL",
      results: {
        leads: 15,
        clients: 6,
        revenue: "$24,000",
        timeframe: "3 weeks",
      },
      quote: "The personalization was incredible. Prospects thought I had researched them for hours.",
      owner: "Jennifer Walsh",
    },
    {
      name: "Web Design Studio",
      industry: "Technology",
      location: "Seattle, WA",
      results: {
        leads: 9,
        clients: 3,
        revenue: "$15,000",
        timeframe: "12 days",
      },
      quote: "Finally, a cold email system that actually works. No more wasted time on manual outreach.",
      owner: "David Kim",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Results from Real Businesses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how our AI cold email campaigns have generated thousands in revenue for businesses just like yours.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Campaign Performance Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-gray-600">Average Open Rate</div>
                <div className="text-sm text-gray-500 mt-2">vs 21% industry average</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-600 mb-2">28%</div>
                <div className="text-gray-600">Response Rate</div>
                <div className="text-sm text-gray-500 mt-2">vs 8% industry average</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-600 mb-2">5.2</div>
                <div className="text-gray-600">Avg New Clients</div>
                <div className="text-sm text-gray-500 mt-2">per campaign</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <DollarSign className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-600 mb-2">$17K</div>
                <div className="text-gray-600">Avg Revenue Generated</div>
                <div className="text-sm text-gray-500 mt-2">within 30 days</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories from Our Clients</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{study.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {study.industry} • {study.location}
                      </p>
                    </div>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{study.results.leads}</div>
                      <div className="text-sm text-gray-600">Qualified Leads</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{study.results.clients}</div>
                      <div className="text-sm text-gray-600">New Clients</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">{study.results.revenue}</div>
                      <div className="text-sm text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{study.results.timeframe}</div>
                      <div className="text-sm text-gray-600">Timeframe</div>
                    </div>
                  </div>

                  <blockquote className="italic text-gray-700 mb-4 border-l-4 border-blue-500 pl-4">
                    "{study.quote}"
                  </blockquote>

                  <div className="text-right">
                    <div className="font-semibold">{study.owner}</div>
                    <div className="text-gray-600 text-sm">Business Owner</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Before vs After GetClientBuilder</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-600 text-center">❌ Before: Manual Cold Outreach</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>3+ hours daily writing emails</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>2-5% open rates with generic templates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>1-2 leads per month (if lucky)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Inconsistent results</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>Burnout from constant rejection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-600 text-center">✅ After: AI-Powered Automation</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Zero time spent on outreach</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>70%+ open rates with AI personalization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>5+ qualified leads per week</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Predictable, scalable results</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Focus on closing deals, not finding them</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Results Across Industries</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="font-bold text-xl mb-4">Service Businesses</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold text-blue-600">6.2</div>
                  <div className="text-gray-600">Avg New Clients</div>
                </div>
                <p className="text-sm text-gray-600">HVAC, Plumbing, Landscaping, Cleaning Services</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <h3 className="font-bold text-xl mb-4">Professional Services</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold text-green-600">4.8</div>
                  <div className="text-gray-600">Avg New Clients</div>
                </div>
                <p className="text-sm text-gray-600">Consulting, Legal, Accounting, Marketing Agencies</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <h3 className="font-bold text-xl mb-4">Technology</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold text-purple-600">5.5</div>
                  <div className="text-gray-600">Avg New Clients</div>
                </div>
                <p className="text-sm text-gray-600">SaaS, Web Design, IT Services, Software Development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Results Like These?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses already getting 5+ new clients per month with our AI system.
          </p>
          <Link href="/checkout">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 font-bold">
              Start Your Campaign - $200 MetaMask Payment
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          <p className="text-blue-200 mt-4">⚡ Results in 7 days or money back • 🔒 Secure crypto payment</p>
        </div>
      </section>
    </div>
  )
}
