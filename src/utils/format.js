export function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatTemp(temp, unit = "metric") {
  return `${Math.round(temp)}°${unit === "metric" ? "C" : "F"}`;
}
