import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <section>
            <div>
                <h2>FITLOG</h2>
            </div>

            <div>
                <Link href="/dashboard">WorkOut</Link>
                <Link href="/dashboard">MyPlan</Link>
                <
            </div>

            <div className="flex items-center gap-2">
                <Badge label="Plan" count={planCount} color="blue" />
                <Badge label="Saved" count={savedCount} color="green" />
            </div>
        </section>
    );
};

export default Navbar;