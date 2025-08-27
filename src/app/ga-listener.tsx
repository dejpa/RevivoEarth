// app/ga-listener.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function GAListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // @ts-ignore
    window.gtag?.("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
  }, [pathname, searchParams]);

  return null;
}
