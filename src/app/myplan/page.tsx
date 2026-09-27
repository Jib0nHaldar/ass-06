import React from 'react';

const MyPlanpage = () => {
    return (
        <main className="min-h-screen bg-[#0F0F0F] px-4 py-10 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-wide">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-sm text-gray-400 md:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div>
                    {/* Grid boxes */}
                        <div className="mt-5 overflow-hidden rounded-2xl border border-[#292c33] bg-[#1a1d22]">

                            <div className="grid grid-cols-3 border-b border-[#292c33] px-10 py-10"></div>
                        </div>
                </div>
            </div>
        </main>
    );
};

export default MyPlanpage;