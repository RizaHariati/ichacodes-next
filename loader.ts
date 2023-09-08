"use client";

export default function myImageLoader({ src, width, quality }: any) {
  if (process.env.NODE_ENV === "production") {
    return `https://www.ichacodes.com/${src}?w=${width}&q=${quality || 75}`;
  } else {
    return `${src}?w=${width}&q=${quality || 75}`;
  }
}
