"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

// Dynamic imports for components that need browser APIs
const BackgroundGradientAnimation = dynamic(
	() =>
		import("./background-gradient-animation").then(
			(mod) => mod.BackgroundGradientAnimation
		),
	{ ssr: false }
);

const GlobeDemo = dynamic(
	() => import("./grid-globe").then((mod) => mod.GlobeDemo),
	{ ssr: false }
);

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const BorderMagic = dynamic(() => import("./border-magic"), { ssr: false });

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	id,
	className,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImage,
}: {
	id: number;
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImage?: string;
}) => {
	const [copied, setCopied] = useState<boolean>(false);
	const handleCopy = () => {
		navigator.clipboard.writeText("devansh.pant02@gmail.com");
		setCopied(true);
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(
								imgClassName,
								"object-cover object-center"
							)}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5
					} && 'w-full opacity-80'`}
				>
					{spareImage && (
						<img
							src={spareImage}
							alt={spareImage}
							className={
								"object-cover object-center w-full h-full"
							}
						/>
					)}
				</div>
				{id === 6 && <BackgroundGradientAnimation />}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
						{description}
					</div>
					<div className="font-sans font-bold text-lg lg:text-lg max-w-96 z-10">
						{title}
					</div>
					{id === 2 && <GlobeDemo />}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
								{["React.js", "Node.js", "Express"].map(
									(item) => (
										<span
											key={item}
											className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
										>
											{item}
										</span>
									)
								)}
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
							</div>
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
								{["DynamoDB", "MySql", "Java"].map((item) => (
									<span
										key={item}
										className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<div className={`absolute -bottom-5 right-0`}>
								<Lottie
									animationData={animationData}
									loop={copied}
									autoplay={copied}
									rendererSettings={{
										preserveAspectRatio: "xMidYMid slice",
									}}
								/>
							</div>
							<BorderMagic
								title={
									copied ? "Email Copied" : "Copy my email"
								}
								icon={<IoCopyOutline />}
								position="left"
								otherClasses="!bg-[#161A31]"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
