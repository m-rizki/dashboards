import createCache from "@emotion/cache";

export default function createEmotionCache() {
  let insertionPoint;

  if (typeof window !== "undefined") {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
