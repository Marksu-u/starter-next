'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { toast } from 'sonner'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { InfoIcon, AlertCircle, CheckCircle2 } from 'lucide-react'

export function DataDisplay() {
  const [progress, setProgress] = useState(0)

  const showToast = () => {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    })
  }

  const startProgress = () => {
    setProgress(0)
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(oldProgress + 10, 100)
      })
    }, 500)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold mb-8">Data Display Components</h2>

        {/* Progress and Loading */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Progress and Loading</h3>
          <div className="space-y-4">
            <Progress value={progress} className="w-[60%]" />
            <Button onClick={startProgress}>Start Progress</Button>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts and Badges */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Alerts and Badges</h3>
          <div className="space-y-4">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Your trial period will end in 7 days.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>

            <div className="flex space-x-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Table</h3>
          <Table>
            <TableCaption>Recent transactions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>TR-2023-001</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Complete
                  </Badge>
                </TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell className="text-right">2023-12-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TR-2023-002</TableCell>
                <TableCell>
                  <Badge variant="secondary">Pending</Badge>
                </TableCell>
                <TableCell>$120.00</TableCell>
                <TableCell className="text-right">2023-12-02</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Hover Card and Toast */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Interactive Components</h3>
          <div className="flex space-x-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover for Info</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Hover Card</h4>
                    <p className="text-sm">
                      Displays additional information when hovering over an element.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Button onClick={showToast}>Show Toast</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 