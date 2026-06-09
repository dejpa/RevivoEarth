"use client";

import { useEffect, useState } from "react";
import type { AparatVideo } from "@/lib/aparat";

function EmptyState({ message }: { message: string }) {
  return (
    <div className="card-modern p-10 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </div>

      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}

export default function AparatVideoGrid({
  emptyMessage,
  followText,
  aparatUrl,
  defaultDescription,
  loadingText,
}: {
  emptyMessage: string;
  followText: string;
  aparatUrl: string;
  defaultDescription: string;
  loadingText: string;
}) {
  const [videos, setVideos] = useState<AparatVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadVideos() {
      try {
        const res = await fetch("/api/aparat", {
          cache: "no-store",
        });

        if (!res.ok) {
          if (active) setVideos([]);
          return;
        }

        const data = await res.json();

        if (active) {
          setVideos(Array.isArray(data.videos) ? data.videos : []);
        }
      } catch {
        if (active) setVideos([]);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadVideos();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-600">{loadingText}</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="space-y-6">
        <EmptyState message={emptyMessage} />

        <div className="text-center">
          <a
            href={aparatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
          >
            {followText}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {videos.map((video) => (
        <article
          key={video.uid}
          className="card-modern overflow-hidden hover-lift"
        >
          <div className="aspect-video bg-gray-100">
            <iframe
              src={video.embedUrl}
              className="w-full h-full border-0"
              allow="fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title={video.title}
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
              {video.title}
            </h3>

            <p className="text-gray-600 line-clamp-3">
              {video.description || defaultDescription}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}