// components/sections/newsletter.tsx

"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function subscribe() {
    try {
      setLoading(true);

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      setEmail("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="pb-40">
      {/* your newsletter JSX */}
    </section>
  );
}