import React from "react";
import type { HeadFC, PageProps } from "gatsby"

const AboutsPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1 className="text-lg font-bold text-blue-800 py-4 bg-white px-3">A - Propos de nous</h1>
            <p className="p-3">
                Nous somme une entreprise de development informatique qui fait des logiciels sur mesure.
            </p>
        </main>
    )
}

export default AboutsPage;

export const Head: HeadFC = () => <title>A propos de nous</title>