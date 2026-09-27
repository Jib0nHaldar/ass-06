'use client';
import React from 'react';

const TodayButton = () => {

    const handleAddToTodaysPlan = () => {
        // Logic to add to today's plan goes here
        console.log("Added to today's plan");
    }

    return (
        <div>
            <button
                className="rounded-xl bg-[#C2F800] px-3 py-2 text-sm font-medium text-black transition hover:scale-105 hover:bg-[#d4ff33]" onClick={() =>handleAddToTodaysPlan()}
            >{
                    // Logic to add to today's plan goes here
                }
            
                Add to Today&apos;s plan
            </button>

        </div>
    );
};

export default TodayButton;