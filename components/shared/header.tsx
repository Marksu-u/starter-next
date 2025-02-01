import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
                Starter NextJS
            </Link>
            <nav className="space-x-4">
                <Button variant="ghost" asChild>
                    <Link href="#features">Features</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="#about">About</Link>
                </Button>
                <Button variant="default" asChild>
                    <Link
                        href="https://github.com/Marksu-u/starter-next"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>
                </Button>
            </nav>
        </header>
    );
}
