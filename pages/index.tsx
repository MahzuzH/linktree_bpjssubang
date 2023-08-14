import React from "react";
import Image from "next/image";
import data from "../data.json";

export default function Home() {
    return (
        <div className="flex items-center text-center flex-col mx-auto w-full justify-center mt-16 px-4 sm:px-8">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={96}
                height={96}
            />
            <h1 className="font-bold mt-4 text-xl text-black font-calistoga xs:text-lg">
                {data.name}
            </h1>
            <h2 className="mb-8 text-md text-black font-calistoga xs:text-base">
                {data.title}
            </h2>
            {data.links.map((link) => (
                <LinkCard key={link.href} {...link} />
            ))}
            <div className="flex items-center gap-2 md:text-sm">
                {data.socials.map((link) => (
                    <div
                        key={link.href}
                        className="cursor-pointer hover:scale-110 transition-all duration-75"
                    >
                        {link.title.includes("Instagram") && (
                            <InstagramIcon href={link.href} />
                        )}
                        {link.title.includes("Tiktok") && (
                            <TiktokIcon href={link.href} />
                        )}
                        {link.title.includes("Facebook") && (
                            <FacebookIcon href={link.href} />
                        )}
                    </div>
                ))}
            </div>
            <h6 className="mt-12 mb-5 font-semibold font-monstserrat text-sm">
                © 2023 BPJS Kesehatan Subang.
            </h6>
        </div>
    );
}

export function InstagramIcon({ href }: { href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram mr-2"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
            </svg>
        </a>
    );
}

export function TiktokIcon({ href }: { href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-tiktok mr-1"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
            </svg>
        </a>
    );
}

export function FacebookIcon({ href }: { href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
        </a>
    );
}

function LinkCard({
    title,
    href,
    image,
}: {
    href: string;
    title: string;
    image?: string;
}) {
    return (
        <a
            href={href}
            className="flex items-center p-1 w-full rounded-full hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl border-4 border-blue-900"
        >
            <div className="flex text-center w-full">
                <div className="w-16 h-16">
                    {image && (
                        <Image
                            className="rounded-full"
                            alt={title}
                            src={image}
                            width={64}
                            height={64}
                        />
                    )}
                </div>
                <h2 className="flex justify-center items-center w-full -ml-10 font-calistoga xs:text-sm xs:tracking-tight xs:-ml-5 sm:text-base sm:tracking-tight md:text-base">
                    {title}
                </h2>
            </div>
        </a>
    );
}
