import Image from "next/image";
import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
		<main className="ybg-radial flex flex-col justify-center min-h-[100dvh] py-9">
			<div className="container flex-1 flex flex-col justify-between gap-8">
				<Link
					className="flex gap-2 items-center text-[14px]"
					href="/"
				>
					<Image
						className="h-[14px] w-auto"
						src="/icons/chevronLeft.svg"
						width={7}
						height={14}
						alt="chevronLeft"
					/>
					Back
				</Link>
        {children}
			</div>
		</main>
  )


}