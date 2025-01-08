import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Rocket, Zap, Shield } from 'lucide-react'

const features = [
  {
    title: 'Feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Zap,
  },
  {
    title: 'Feature 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Rocket,
  },
  {
    title: 'Feature 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 mb-4" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

