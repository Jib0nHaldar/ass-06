import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../src/assets/logo.png';

function Badge({
    label,
    count,
    color,
}: {
    label: string;
    count: number;
    color: 'blue' | 'green';
}) {
    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}
        >
            {label}: {count}
        </span>
    );
}

const planCount = 0;
const savedCount = 0;

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between border-b border-gray-200 px-6 py-4 shadow-sm md:px-10">

            {/* Logo and Website Name */}
            <Link
                href="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
                <Image
                    src={Logo}
                    alt="FitLog Logo"
                    width={32}
                    height={32}
                />

                <h2 className="text-xl font-bold tracking-tight text-white-900">
                    FITLOG
                </h2>
            </Link>

            {/* Navigation */}
            <div className="hidden items-center gap-8 md:flex">
                <Link
                    href="/workout"
                    className="font-medium text-white-600 transition-colors hover:text-[#C2F800]"
                >
                    Workout
                </Link>

                <Link
                    href="/myplan"
                    className="font-medium text-white-600 transition-colors rounded-2xl hover:text-[#C2F800]"
                >
                    MyPlan
                </Link>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2">
                <Badge
                    label="Plan"
                    count={planCount}
                    color="blue"
                />

                <Badge
                    label="Saved"
                    count={savedCount}
                    color="green"
                />
            </div>

        </nav>
    );
};

export default Navbar;

