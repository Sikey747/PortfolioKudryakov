import type { Metadata } from "next";
import "./scss/globals.scss";

import Inner from "./Inner";

export const metadata: Metadata = {
    title: "Sergey Kudryakov Portfolio",
    description: "Sergey Kudryakov Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="wrapper">
                    <Inner>{children}</Inner>
                </div>
            </body>
        </html>
    );
}
