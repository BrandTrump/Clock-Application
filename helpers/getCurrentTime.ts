export async function getTime() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Pacific/Auckland",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
