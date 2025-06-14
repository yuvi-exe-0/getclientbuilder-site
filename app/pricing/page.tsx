import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">One Price. Unlimited Results.</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            No monthly fees. No contracts. No hidden costs. Just $200 for a complete AI cold email campaign that gets
            results.
          </p>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Our $200 Flat Fee Beats Everything Else</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traditional Agency */}
            <Card className="border-red-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-600">Traditional Agency</CardTitle>
                <div className="text-4xl font-bold text-red-600">$2,000+</div>
                <div className="text-gray-600">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Long contracts required</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Generic templates</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Slow setup (weeks)</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>No guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Hidden fees</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 font-semibold">Total Cost: $24,000+/year</p>
                </div>
              </CardContent>
            </Card>

            {/* DIY Tools */}
            <Card className="border-yellow-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-yellow-600">DIY Email Tools</CardTitle>
                <div className="text-4xl font-bold text-yellow-600">$200+</div>
                <div className="text-gray-600">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>You do all the work</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Basic automation only</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>No prospect research</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Learning curve</span>
                  </li>
                  <li className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-3" />
                    <span>Time-consuming</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 font-semibold">Total Cost: $2,400+/year + Your Time</p>
                </div>
              </CardContent>
            </Card>

            {/* Our Service */}
            <Card className="border-green-500 border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600">GetClientBuilder</CardTitle>
                <div className="text-4xl font-bold text-green-600">$200</div>
                <div className="text-gray-600">one-time payment</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Completely done-for-you</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>AI-powered personalization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>24-hour setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>7-day guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-semibold">Total Cost: $200 (Forever)</p>
                </div>
                <Link href="/checkout" className="block mt-6">
                  <Button className="cta-button w-full">Start Now - Pay $200</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Breakdown */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What You Get for $200</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-6">Service Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>AI Prospect Research (50+ prospects)</span>
                    <span className="font-bold">$500 value</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom Email Sequences (5-7 emails each)</span>
                    <span className="font-bold">$800 value</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Automation Setup & Launch</span>
                    <span className="font-bold">$300 value</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OSINT Intelligence Gathering</span>
                    <span className="font-bold">$400 value</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-xl font-bold">
                    <span>Total Value</span>
                    <span>$2,000</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-green-600">
                    <span>You Pay</span>
                    <span>$200</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-6">Payment Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>Secure Crypto Payment:</strong> ETH or USDC via MetaMask
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>Instant Processing:</strong> No waiting for bank transfers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>Global Access:</strong> Pay from anywhere in the world
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>No Chargebacks:</strong> Secure blockchain transaction
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>Privacy Protected:</strong> No credit card required
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get 5+ New Clients for Just $200?</h2>
          <p className="text-xl text-gray-600 mb-8">
            No monthly fees. No contracts. No risk. Just results in 7 days or your money back.
          </p>
          <Link href="/checkout">
            <Button className="cta-button text-2xl px-16 py-8">
              Pay $200 with MetaMask - Start Now
              <ArrowRight className="ml-3 w-8 h-8" />
            </Button>
          </Link>
          <p className="text-gray-500 mt-4">⚡ Setup starts immediately after payment • 🔒 Secure crypto transaction</p>
        </div>
      </section>
    </div>
  )
}
