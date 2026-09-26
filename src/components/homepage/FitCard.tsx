import { Workout } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

const getWorkouts = async (): Promise<Workout[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data: Workout[] = await response.json();

    return data;
};

const FitCard = async () => {
    const fitData = await getWorkouts();

    console.log(fitData, "Data");

    return (
        <section id="fitCard" className="my-8 px-5 md:px-10 lg:px-20">
            {/* Header */}
            <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold">
                    THE LIBRARY
                </h2>

                <p className="text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {fitData.map((item: Workout) => (
                    <div
                        key={item.id}
                        className="group overflow-hidden rounded-2xl bg-[#15171D] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                unoptimized
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">

                            <div className="mb-3 flex flex-wrap gap-2">
                                {item.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-xs font-medium text-[#C2F800]"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white">
                                {item.name}
                            </h3>

                            <p className="mt-2 text-sm text-[#9CA3AF]">
                                🏋️ {item.equipment}
                            </p>

                            <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-[#1D2027] p-3">

                                <div>
                                    <p className="text-xs text-[#9CA3AF]">
                                        Duration
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        {item.duration} min
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[#9CA3AF]">
                                        Calories
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        {item.caloriesBurned} kcal
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[#9CA3AF]">
                                        Rating
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        ⭐ {item.rating}
                                    </p>
                                </div>

                            </div>

                            <Link
                                href={`/fitcard/${item.id}`}
                                className="mt-5 block w-full rounded-xl bg-[#C2F800] px-4 py-3 text-center text-sm font-bold text-black transition-all duration-200 hover:bg-[#d4ff33] active:scale-[0.98]"
                            >
                                VIEW DETAILS →
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default FitCard;