"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon, HeartIcon, ShareIcon } from "lucide-react";

export function CardGallery() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Card Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product Card */}
                    <Card className="p-4">
                        <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                                alt="Product"
                                className="object-cover w-full h-full"
                            />
                            <Badge className="absolute top-2 right-2">
                                New
                            </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            Premium Watch
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                            Elegant timepiece with premium materials
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">$299</span>
                            <Button size="sm">Add to Cart</Button>
                        </div>
                    </Card>

                    {/* Profile Card */}
                    <Card className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">Sarah Johnson</h3>
                                <p className="text-sm text-gray-500">
                                    Product Designer
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Creating beautiful and intuitive user experiences
                            through thoughtful design.
                        </p>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                                <StarIcon className="h-4 w-4 mr-1" />
                                Follow
                            </Button>
                            <Button variant="outline" size="sm">
                                <ShareIcon className="h-4 w-4 mr-1" />
                                Share
                            </Button>
                        </div>
                    </Card>

                    {/* Content Card */}
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-3">
                            Getting Started with UI Design
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Learn the fundamentals of UI design and create
                            beautiful interfaces.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <HeartIcon className="h-5 w-5 text-red-500" />
                                <span className="text-sm text-gray-500">
                                    324 likes
                                </span>
                            </div>
                            <Button>Read More</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
