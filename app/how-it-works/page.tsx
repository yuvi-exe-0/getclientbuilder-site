import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Wallet, Bot, Mail, Users } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works: 3 Simple Steps to 5+ New Clients</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our AI-powered system does all the heavy lifting. You just pay, wait 7 days, and collect qualified leads.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <Card className="relative p-8 text-center hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <CardContent className="pt-4">
                <Wallet className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">You Pay $200 via MetaMask</h3>
                <p className="text-gray-600 mb-6">
                  Secure crypto payment in ETH or USDC. Takes 30 seconds. No monthly fees, no contracts.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">✅ One-time payment</p>
                  <p className="text-green-800 font-semibold">✅ Instant confirmation</p>
                  <p className="text-green-800 font-semibold">✅ Secure blockchain transaction</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative p-8 text-center hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <CardContent className="pt-4">
                <Bot className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our AI Researches & Writes</h3>
                <p className="text-gray-600 mb-6">
                  Claude Sonnet 4 + OSINT tools find your ideal prospects and craft personalized email sequences.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold">🔍 Deep prospect research</p>
                  <p className="text-blue-800 font-semibold">✍️ Personalized email sequences</p>
                  <p className="text-blue-800 font-semibold">🎯 Perfect targeting</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative p-8 text-center hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <CardContent className="pt-4">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">You Get Qualified Leads</h3>
                <p className="text-gray-600 mb-6">
                  Interested prospects reply directly to your inbox. No spam, just qualified leads ready to buy.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-semibold">📧 Direct inbox replies</p>
                  <p className="text-yellow-800 font-semibold">💰 Qualified prospects</p>
                  <p className="text-yellow-800 font-semibold">⚡ Results in 7 days</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/checkout">
              <Button className="cta-button text-xl px-12 py-6">
                Start Your Campaign - $200 MetaMask Payment
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Technology Behind Your Success</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Claude Sonnet 4 AI Engine</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Advanced Language Processing:</strong> Writes emails that sound human and convert
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Personalization at Scale:</strong> Each email is unique and relevant to the prospect
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Continuous Learning:</strong> Gets better with each campaign
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">OSINT Research System</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Deep Web Scraping:</strong> Finds prospects others miss
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Social Media Analysis:</strong> Understands prospect pain points
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <strong>Company Intelligence:</strong> Knows when they're ready to buy
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What You Get for $200</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <Mail className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Custom Email Sequences</h3>
                <p className="text-gray-600">5-7 personalized emails per prospect, written by AI</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Prospect Research</h3>
                <p className="text-gray-600">50+ qualified prospects identified and researched</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <Bot className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">Complete Setup</h3>
                <p className="text-gray-600">Email automation configured and launched</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-8">
              <strong>Timeline:</strong> Setup complete within 24 hours. First leads within 7 days.
            </p>
            <Link href="/checkout">
              <Button className="cta-button text-xl px-12 py-6">Get Started Now - $200 via MetaMask</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
