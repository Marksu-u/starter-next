"use client";

import { CardGallery } from "@/components/shared/card-gallery";
import { DataDisplay } from "@/components/shared/data-display";
import { DialogShowcase } from "@/components/shared/dialog-showcase";
import Footer from "@/components/shared/footer";
import { FormShowcase } from "@/components/shared/form-showcase";
import Header from "@/components/shared/header";
import Hero from "@/components/shared/hero";
import { NavigationShowcase } from "@/components/shared/navigation-showcase";
import { Newsletter } from "@/components/shared/newsletter";
import { Pricing } from "@/components/shared/pricing";
import { Testimonials } from "@/components/shared/testimonials";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <CardGallery />
            <FormShowcase />
            <NavigationShowcase />
            <DataDisplay />
            <DialogShowcase />
            <Pricing />
            <Testimonials />
            <Newsletter />
            <Footer />
        </main>
    );
}
