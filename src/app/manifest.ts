import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BestBelly - Health Food Scanner",
    short_name: "BestBelly",
    description:
      "Scan food ingredients and get instant health scores. Stay healthy with one scan!",
    start_url: "/",
    display: "standalone",
    background_color: "#24292f",
    theme_color: "#24292f",
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: ["health", "lifestyle", "food", "fitness", "nutrition"],
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot-narrow.png",
        sizes: "720x1280",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
    icons: [
      {
        src: "/icon.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
