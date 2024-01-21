import { Fetch } from "@/lib/fetch";

export default async function Home() {
  const profile = await Fetch('/api/getProfile').then((res) => res.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(profile)}
    </main>
  );
}
