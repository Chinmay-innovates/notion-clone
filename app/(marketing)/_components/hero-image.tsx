import Image from "next/image"
export const HeroImage = () => {
    return (
        <>
            <div className="relative size-[300px] sm:size-[350px] md:size[400px]">
                <Image
                    src="/documents.png"
                    alt="Document"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="relative size-[400px] hidden md:block">
                <Image
                    src="/reading.png"
                    alt="Reading"
                    fill
                    className="object-contain"
                />
            </div>
        </>
    )
}