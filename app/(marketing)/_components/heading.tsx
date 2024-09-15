"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
                Your ideas, Documents, & Plans. Unified. Welcom to
                <span className="underline ml-2">Notion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Notion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            <Button >
                Enter Notion
                <ArrowRight className="icon" />
            </Button>
        </div>
    )
}