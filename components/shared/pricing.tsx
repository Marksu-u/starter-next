'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, XIcon } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '2GB storage',
      'Basic analytics',
      'Email support',
      '48-hour response time',
    ],
    notIncluded: [
      'Advanced security',
      'Custom domain',
      'Team collaboration',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for professionals and growing teams',
    features: [
      'Unlimited projects',
      '20GB storage',
      'Advanced analytics',
      'Priority support',
      '24-hour response time',
      'Advanced security',
      'Custom domain',
      'Team collaboration',
    ],
    notIncluded: [],
    buttonText: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited everything',
      '100GB storage',
      'Custom analytics',
      'Dedicated support',
      '1-hour response time',
      'Advanced security',
      'Multiple domains',
      'Advanced collaboration',
      'SLA agreement',
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.popular ? 'border-primary shadow-lg' : ''}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {tier.description}
                    </CardDescription>
                  </div>
                  {tier.popular && (
                    <Badge variant="secondary">Most Popular</Badge>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <XIcon className="h-4 w-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          All prices are in USD and billed monthly. Need a custom plan?{' '}
          <Button variant="link" className="p-0 h-auto">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
} 