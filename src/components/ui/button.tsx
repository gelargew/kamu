'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const BackButton = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const router = useRouter();
	return (
		<button
			className={cn('flex gap-2 items-center text-[14px]')}
			onClick={router.back}
			{...props}
		>
			<Image
				className="h-[14px] w-auto"
				src="/icons/chevronLeft.svg"
				width={7}
				height={14}
				alt="chevronLeft"
			/>
			Back
		</button>
	);
};

export { BackButton };
