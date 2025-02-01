"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Thompson",
        role: "Product Manager at TechCorp",
        content:
            "This platform has completely transformed how we handle our projects. The interface is intuitive, and the features are exactly what we needed.",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Frontend Developer",
        content:
            "The attention to detail in the components and the overall design system is impressive. It has significantly sped up our development process.",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "UX Designer",
        content:
            "As a designer, I appreciate the consistency and flexibility of the components. The documentation is clear, and the customization options are extensive.",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Startup Founder",
        content:
            "This solution helped us launch our MVP in record time. The support team is responsive, and the regular updates keep making it better.",
        avatar: "https://i.pravatar.cc/150?img=4",
        rating: 4,
    },
    {
        name: "Lisa Anderson",
        role: "Technical Lead",
        content:
            "The integration was seamless, and the performance is outstanding. It has become an essential part of our development toolkit.",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
    },
    {
        name: "James Wilson",
        role: "Software Architect",
        content:
            "The scalability and maintainability of the codebase are impressive. It has helped us maintain high standards across our projects.",
        avatar: "https://i.pravatar.cc/150?img=6",
        rating: 5,
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex space-x-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                        i < rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="py-16 px-4 bg-muted/50">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what
                        professionals and companies have to say about our
                        solution.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="relative">
                            <CardContent className="pt-6">
                                <QuoteIcon className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/20" />
                                <div className="space-y-4">
                                    <StarRating rating={testimonial.rating} />
                                    <p className="text-muted-foreground">
                                        {testimonial.content}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback>
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground">
                        Join over 10,000+ satisfied customers who trust our
                        platform
                    </p>
                </div>
            </div>
        </section>
    );
}
