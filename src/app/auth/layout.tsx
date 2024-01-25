import { BackButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
		<main className="ybg-radial flex flex-col justify-center min-h-[100dvh] py-9">
			<div className="container flex-1 flex flex-col justify-between gap-8">
				<BackButton />
        {children}
			</div>
		</main>
  )


}