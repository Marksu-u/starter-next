'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { MailIcon, SparklesIcon, RocketIcon } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for subscribing!', {
        description: 'You will receive our newsletter updates soon.',
      })
      setEmail('')
    }
  }

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-muted-foreground text-lg">
              Get the latest updates, news, and special offers delivered directly to your inbox.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <SparklesIcon className="h-5 w-5 text-primary" />
                <span>Exclusive content and early access</span>
              </div>
              <div className="flex items-center gap-4">
                <RocketIcon className="h-5 w-5 text-primary" />
                <span>Product updates and announcements</span>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-5 w-5 text-primary" />
                <span>Monthly digest of top resources</span>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Subscribe Now</h3>
                <p className="text-sm text-muted-foreground">
                  Join our community of over 10,000 subscribers
                </p>
              </div>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
                <Button type="submit" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 