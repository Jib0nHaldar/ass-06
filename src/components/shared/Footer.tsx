import React from 'react';
import Image from 'next/image';
import Logo from '../../../src/assets/logo.png';

const Footer = () => {
    return (
        <div className="flex items-center justify-between p-4 shadow-md py-5 border-t border-gray-100 md:px-10 bg-[#15171D] text-white">
            <div className="flex items-center gap-2">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={25}
                    height={25}
                />

                <h2 className="text-2xl font-bold">FITLOG</h2>
            </div>

            <div>
                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </div>
    );
};

export default Footer;