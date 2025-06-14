import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Message */}
        <div className="mb-12">
          <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Payment Successful! 🎉</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your AI cold email campaign is now being set up. You'll start seeing qualified leads in your inbox within 7
            days, guaranteed.
          </p>
        </div>

        {/* Transaction Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Transaction Confirmed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Order Details</h3>
                <p className="text-gray-600">AI Cold Email Campaign</p>
                <p className="font-bold text-lg">$200 USD</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transaction ID</h3>
                <p className="text-gray-600 font-mono text-sm">0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4</p>
                <p className="text-green-600 text-sm">✅ Confirmed on blockchain</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Next 24 Hours</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ AI research begins</li>
                  <li>✅ Prospect identification</li>
                  <li>✅ Email sequences written</li>
                  <li>✅ Automation setup</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Days 2-7</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>📧 Campaigns launch</li>
                  <li>📊 Performance monitoring</li>
                  <li>🎯 Optimization tweaks</li>
                  <li>📈 Results tracking</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Day 7+</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>💬 First replies arrive</li>
                  <li>🔥 Qualified leads</li>
                  <li>💰 New client opportunities</li>
                  <li>📊 Results report</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Check Your Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">We've sent a confirmation email with:</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>✅ Order confirmation</li>
                <li>✅ Setup timeline</li>
                <li>✅ Contact information</li>
                <li>✅ What to expect</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Our team is here to help:</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>📧 support@getclientbuilder.com</li>
                <li>⏰ Response within 2 hours</li>
                <li>💬 Setup questions welcome</li>
                <li>🔧 Technical support included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee Reminder */}
        <Card className="bg-green-50 border-green-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-green-800 mb-2">🛡️ Your 7-Day Guarantee</h3>
            <p className="text-green-700">
              If you don't get qualified leads within 7 days, we'll refund your $200 immediately. No questions asked.
              We're that confident in our AI system.
            </p>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">While You Wait...</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/results">
              <Button variant="outline" className="flex items-center">
                See Other Results
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="flex items-center">
                Read FAQ
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="flex items-center">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-bold mb-4">Know Someone Who Needs More Clients?</h3>
          <p className="text-gray-600 mb-4">
            Share GetClientBuilder with other business owners and help them get results too!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
              Share on LinkedIn
            </Button>
            <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-900">
              Share on Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
