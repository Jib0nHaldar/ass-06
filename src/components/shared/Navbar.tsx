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
    color: "blue" | "green";
}) {
    return (
        <span className={`badge badge-${color}`}>
            {label}: {count}
        </span>
    );
}

const planCount = 0;
const savedCount = 0;

const Navbar = () => {
    return (
        <section className="flex items-center justify-between p-4 shadow-md">

            {/* Logo and Website Name */}
            <div className="flex items-center gap-2">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={25}
                    height={25}
                />

                <h2 className="text-2xl font-bold">FITLOG</h2>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-5">
                <Link href="/workout">Workout</Link>
                <Link href="/myplan">MyPlan</Link>

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

        </section>
    );
};

export default Navbar;
