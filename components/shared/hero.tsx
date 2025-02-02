import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Starter NextJS with ShadCN UI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Not much, but enough to get started
            </p>
            <Button size="lg" asChild>
                <a
                    href="https://github.com/Marksu-u/starter-next"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Call to Action
                </a>
            </Button>
        </section>
    );
}
