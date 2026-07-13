const IMAGE_MAP = {
  "0JTH5Vj29GEganOPX4pzjeIpjA": "growy-user-testimonial-1.webp",
  "0bXpbzKHDf1ieEX0BOMcPk6vEFE": "growy-community-benchmark.webp",
  "0cNNc9g0dxlZdWfJsrdftuFbz6E": "growy-focus-timer-icon.webp",
  "34wwDjC61TvnwhR6pQWyNRvi1I":  "growy-goal-tracking-card.webp",
  "7MBpjvb2L6ziFJkxu6KEG9paSyE": "growy-completed-goal-card.webp",
  "GUeWzydcSg3NhMBYTqVvPCY01s":  "growy-yearly-goals-list.webp",
  "HoNdtMEHg8OhzV6TxVDzVKbAOjM": "growy-productivity-chart.webp",
  "MrpTtIdY1ZqHSMY8A4v2V1mxLw":  "growy-project-progress.webp",
  "PVefzn8pGQFSvQRD0t3geRR1yhY": "growy-user-testimonial-2.webp",
  "a3F89IzFLKwU8nNwngfyQOyvo":   "growy-app-icon.webp",
  "ezqGkbv8azFOoPyJoNPMSwkIwvg": "growy-habits-tracker.webp",
  "hty9Nv4DA2ELNm6l6SSM5WCz9Ng": "growy-focus-session-hero.webp",
  "kEPuakDea5CKSMvSn6YTQ3JFPE":  "growy-background-gradient.webp",
  "rQRtZdNK3ukigaYtwoA4wff0Do":  "growy-progress-overview.webp",
  "vB7fLhvjumPRNUBnnmzt3xeDKYQ": "growy-user-testimonial-3.webp",
  "w4uU0xHkzIECRhdjQO1kbtFhdA":  "growy-outlier-achievement.webp",
  "xVsoClFGBwuKVVAOc57K8PJ0k7U": "growy-tasks-counter.webp",
  "ya2JEy1mcB82IzcnZa1GaIC9lA":  "growy-app-home-screen-iphone.webp",
  "CnyQak7o9zHWjaq6cQu67dxDB0Y": "growy-app-profile-iphone.webp",
  "xUxhtAyPd7NWcX9RtTZkOnaqM":   "growy-focus-session-iphone.webp",
};

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  const url = event.request.url;
  if (!url.includes("framerusercontent.com/images/")) return;

  const match = url.match(/framerusercontent\.com\/images\/([A-Za-z0-9]+)\./);
  if (!match) return;

  const id = match[1];
  const local = IMAGE_MAP[id];
  if (!local) return;

  event.respondWith(fetch("/assets/images/" + local));
});
