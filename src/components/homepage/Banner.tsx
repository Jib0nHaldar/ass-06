import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/banner.png';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="flex flex-col mx-auto md:flex-row items-center justify-between gap-10 rounded-4xl bg-[#15171D] px-8 py-12 my-12 md:px-16 lg:px-20 text-white overflow-hidden">


            <div className="flex flex-col gap-5 max-w-2xl">


                <span className="w-fit rounded-full border border-[#C2F800]/30 bg-[#C2F800]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#C2F800]">
                    WORKOUT LIBRARY
                </span>


                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    TRAIN WITH INTENT.
                    <br />
                    LOG EVERY SET.
                </h2>

                <p className="max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it into today's plan, and watch the week's work add up.
                </p>

                <Link
                    href="#fitCard"
                    className="mt-2 w-fit rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-gray-900 transition-all duration-300 hover:bg-[#d4ff33] hover:scale-105"
                >
                    BROWSE WORKOUTS
                </Link>
            </div>

            {/* Banner Image */}
            <div className="relative flex-shrink-0">
                <Image
                    src={BannerImage}
                    alt="Workout Banner"
                    width={450}
                    height={350}
                    className="w-[280px] md:w-[350px] lg:w-[450px] object-contain"
                    priority
                />
            </div>

        </section>
    );
};

export default Banner;
