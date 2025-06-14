import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Target, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get 5+ New Clients in 7 Days with AI Cold Emails
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Done-for-you AI cold email campaigns that actually work. No templates, no guesswork. Just qualified leads
            landing in your inbox while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/checkout">
              <Button className="cta-button text-xl px-12 py-6">🚀 Get Started - Pay $200 with MetaMask</Button>
            </Link>
            <p className="text-blue-200">⚡ Results in 7 days or money back</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">500+</div>
              <div className="text-blue-200">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">73%</div>
              <div className="text-blue-200">Average Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$200</div>
              <div className="text-blue-200">One-Time Payment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tired of Wasting Time on Cold Outreach That Doesn't Work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-red-200">
                <CardContent className="text-center">
                  <div className="text-red-500 text-5xl mb-4">😤</div>
                  <h3 className="font-bold text-lg mb-2">Hours Wasted Daily</h3>
                  <p className="text-gray-600">Spending 3+ hours writing emails that get ignored</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-red-200">
                <CardContent className="text-center">
                  <div className="text-red-500 text-5xl mb-4">📉</div>
                  <h3 className="font-bold text-lg mb-2">Terrible Response Rates</h3>
                  <p className="text-gray-600">Generic templates getting 2% open rates</p>
                </CardContent>
              </Card>
              <Card className="p-6 border-red-200">
                <CardContent className="text-center">
                  <div className="text-red-500 text-5xl mb-4">💸</div>
                  <h3 className="font-bold text-lg mb-2">Expensive Agencies</h3>
                  <p className="text-gray-600">Paying $2000+/month for mediocre results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Here's How We Get You 5+ Clients in 7 Days</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI doesn't just send emails. It researches your prospects, writes personalized messages, and delivers
              qualified leads straight to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">AI-Powered Research</h3>
                <p className="text-gray-600">Claude Sonnet 4 analyzes prospects and crafts perfect messages</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">OSINT Targeting</h3>
                <p className="text-gray-600">Advanced research finds your ideal prospects automatically</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Done-For-You</h3>
                <p className="text-gray-600">Complete automation - you just collect the leads</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">7-Day Results</h3>
                <p className="text-gray-600">See qualified leads within one week, guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Teaser */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Join 500+ Businesses Getting Results</h2>
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "I got 3 new clients in the first week. This AI system is incredible - it found prospects I never would
                have thought to target."
              </blockquote>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-gray-600">Marketing Agency Owner, Austin TX</div>
            </CardContent>
          </Card>

          <div className="mt-12">
            <Link href="/checkout">
              <Button className="cta-button text-xl px-12 py-6">
                Start Your Campaign - $200 MetaMask Payment
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
