import Image from "next/image"

export const Heros = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative size-[300px] sm:size-[350px] md:size[400px]">
                    <Image
                        src="/documents.png"
                        alt="Document"
                        fill
                        className="object-contain dark:hidden"
                    />
                    <Image
                        src="/documents-dark.png"
                        alt="Document Dark"
                        fill
                        className="object-contain hidden dark:block"
                    />
                </div>
                <div className="relative size-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        alt="Reading"
                        fill
                        className="object-contain"
                    />
                    <Image
                        src="/reading-dark.png"
                        alt="Reading Dark"
                        fill
                        className="object-contain hidden dark:block"
                    />
                </div>
            </div>
        </div>
    )
}