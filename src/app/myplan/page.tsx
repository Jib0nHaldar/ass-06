import React from 'react';

const MyPlanpage = () => {
    return (
        <main className="min-h-screen bg-[#0F0F0F] px-4 py-10 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-black tracking-wider md:text-5xl">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-sm text-gray-400 md:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MyPlanpage;