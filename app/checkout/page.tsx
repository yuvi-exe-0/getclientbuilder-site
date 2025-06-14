"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, Shield, Zap, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const connectWallet = async () => {
    // Simulate MetaMask connection
    setIsProcessing(true)
    setTimeout(() => {
      setIsConnected(true)
      setWalletAddress("0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4")
      setIsProcessing(false)
    }, 2000)
  }

  const processPayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      window.location.href = "/thank-you"
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
          <p className="text-xl text-gray-600">Get your AI cold email campaign started in the next 24 hours</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-bold">AI Cold Email Campaign</h3>
                    <p className="text-gray-600 text-sm">Done-for-you lead generation</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">$200</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    50+ AI-researched prospects
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    5-7 personalized email sequences
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Complete automation setup
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    7-day results guarantee
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span>$200 USD</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Payment in ETH or USDC equivalent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="w-6 h-6 text-blue-500 mr-2" />
                Payment & Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Business Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company LLC" required />
                </div>

                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marketing">Marketing Agency</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="Describe your ideal clients (e.g., small business owners, tech startups, etc.)"
                    rows={3}
                  />
                </div>
              </div>

              {/* MetaMask Payment */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-lg flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-2" />
                  Secure Crypto Payment
                </h3>

                {!isConnected ? (
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Wallet className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Connect Your MetaMask Wallet</h4>
                    <p className="text-gray-600 mb-4">Secure payment via Ethereum blockchain</p>
                    <Button
                      onClick={connectWallet}
                      disabled={isProcessing}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isProcessing ? "Connecting..." : "Connect MetaMask Wallet"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-semibold">Wallet Connected</span>
                      </div>
                      <p className="text-sm text-gray-600 font-mono">{walletAddress}</p>
                    </div>

                    <div>
                      <Label>Payment Method</Label>
                      <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                          <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {paymentMethod && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>Amount to pay:</span>
                          <span className="font-bold">{paymentMethod === "eth" ? "~0.08 ETH" : "200 USDC"}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">*Amount may vary based on current exchange rates</p>
                      </div>
                    )}

                    <Button
                      onClick={processPayment}
                      disabled={!paymentMethod || isProcessing}
                      className="cta-button w-full text-lg py-6"
                    >
                      {isProcessing ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Complete Payment - $200
                        </div>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  <strong>Secure Payment:</strong> Your transaction is protected by blockchain technology. We never
                  store your wallet information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Happens Next */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>What Happens After Payment?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">Instant Confirmation</h4>
                <p className="text-sm text-gray-600">You'll receive immediate confirmation and setup begins</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">AI Research Starts</h4>
                <p className="text-sm text-gray-600">Our AI begins researching and writing your campaigns</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Leads in 7 Days</h4>
                <p className="text-sm text-gray-600">Qualified prospects start replying to your inbox</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
