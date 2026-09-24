import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/banner.png';

const Banner = () => {
    return (
        <section className="flex items-center justify-between p-4 bg-gray-800 text-white px-20 py-10">
            <div className="flex flex-col gap-4">
                <p className="text-sm font text-#C2F800">WORKOUT LIBRARY</p>
                <h2 className="text-5xl font-bold">TRAIN WITH INTENT. LOG
                    <br /> EVERY SET.</h2>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />into today's plan, and watch the week's work add up.</p>

                <button>BROWSE WORKOUTS</button>
            </div>

            <div>
                <Image
                    src={BannerImage}
                    alt="Banner Image"
                    width={400}
                    height={300}
                />
            </div>
        </section>
    );
};

export default Banner;