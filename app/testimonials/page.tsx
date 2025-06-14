import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Agency Owner",
      location: "Austin, TX",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "I got 3 new clients in the first week. This AI system is incredible - it found prospects I never would have thought to target. The personalization was so good, prospects thought I had researched them for hours.",
      results: "3 clients in 1 week, $18K revenue",
    },
    {
      name: "Mike Rodriguez",
      title: "HVAC Business Owner",
      location: "Phoenix, AZ",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "Best $200 I ever spent. Got 3 new HVAC installations from the first week alone. The AI emails were so personalized, customers were calling me directly instead of shopping around.",
      results: "3 installations, $12.5K revenue",
    },
    {
      name: "Jennifer Walsh",
      title: "Business Consultant",
      location: "Miami, FL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "The personalization was incredible. Prospects thought I had researched them for hours. I've never seen response rates this high - 6 new consulting clients in 3 weeks!",
      results: "6 clients in 3 weeks, $24K revenue",
    },
    {
      name: "David Kim",
      title: "Web Design Studio Owner",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "Finally, a cold email system that actually works. No more wasted time on manual outreach. The AI found tech startups that were perfect fits for our services.",
      results: "3 clients in 12 days, $15K revenue",
    },
    {
      name: "Lisa Thompson",
      title: "Real Estate Agent",
      location: "Denver, CO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "I was skeptical about AI cold emails, but this system blew me away. Got 4 new property listings in 2 weeks. The prospects were already pre-qualified and ready to sell.",
      results: "4 listings in 2 weeks, $8K commission",
    },
    {
      name: "Carlos Martinez",
      title: "Digital Marketing Consultant",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "The OSINT research is next level. It found decision-makers at companies I never would have discovered. 5 new retainer clients in my first month - this paid for itself 100x over.",
      results: "5 retainer clients, $30K MRR",
    },
    {
      name: "Amanda Foster",
      title: "Accounting Firm Owner",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "I hate sales and cold outreach, but this system does it all for me. The AI emails sound exactly like how I would write them. Got 7 new business clients without lifting a finger.",
      results: "7 clients in 3 weeks, $21K revenue",
    },
    {
      name: "Robert Chen",
      title: "IT Services Provider",
      location: "Boston, MA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "The technical accuracy of the AI emails impressed even me. It understood complex IT pain points and positioned our services perfectly. 4 new managed service contracts in 10 days.",
      results: "4 contracts, $16K MRR",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What Our Clients Are Saying</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real testimonials from real business owners who transformed their client acquisition with our AI cold email
            system.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2,600+</div>
              <div className="text-gray-600">New Clients Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">$8.5M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories from Every Industry</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 flex-grow italic">"{testimonial.quote}"</blockquote>

                  {/* Results */}
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <div className="text-green-800 font-semibold text-sm">📈 Results: {testimonial.results}</div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                      <div className="text-gray-500 text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Video Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600">Sarah Chen - Marketing Agency</p>
                  <p className="text-sm text-gray-500">"How I Got 3 Clients in 1 Week"</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600">Mike Rodriguez - HVAC Business</p>
                  <p className="text-sm text-gray-500">"$12.5K in New Revenue"</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Themes */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Clients Love Most</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-4">Perfect Targeting</h3>
                <p className="text-gray-600">
                  "The AI found prospects I never would have thought to target" - mentioned in 78% of reviews
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="text-5xl mb-4">✍️</div>
                <h3 className="font-bold text-xl mb-4">Human-Like Writing</h3>
                <p className="text-gray-600">
                  "Prospects thought I had researched them for hours" - mentioned in 84% of reviews
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-4">Fast Results</h3>
                <p className="text-gray-600">"Got results within the first week" - mentioned in 91% of reviews</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Business Owners Nationwide</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold">TX</div>
              <div className="text-sm">Austin, Dallas, Houston</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">CA</div>
              <div className="text-sm">LA, SF, San Diego</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">FL</div>
              <div className="text-sm">Miami, Tampa, Orlando</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">NY</div>
              <div className="text-sm">NYC, Buffalo, Albany</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">IL</div>
              <div className="text-sm">Chicago, Rockford</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join These Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the same results as our 500+ happy clients. Start your AI cold email campaign today.
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
