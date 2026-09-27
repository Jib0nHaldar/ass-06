import Image from "next/image";
import Link from "next/link";

type DetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const getDetails = async (id: string) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`,
        {
            next: {
                revalidate: 15,
            },
        }
    );

    return res.json();
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
    const { id } = await params;

    const fitDetails = await getDetails(id);

    return (
        <main className="min-h-screen bg-[#0f1014] px-4 py-8 text-white">

            <div className="mx-auto max-w-7xl">

                <Link
                    href="/"
                    className="mb-5 inline-block text-sm text-gray-400 transition hover:text-[#C2F800]"
                >
                 Back to workouts
                </Link>

                <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">



                    <div className="relative h-137.5 overflow-hidden rounded-2xl lg:h-178.75">

                        <Image

                            src={fitDetails.image}
                            alt={fitDetails.name}
                            fill
                            priority
                            className="object-cover"
                        />

                    </div>



                    <div className="flex flex-col">

                        <h1 className="text-4xl font-semibold uppercase tracking-wide sm:text-4xl">
                            {fitDetails.name}
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                            {fitDetails.description}
                        </p>


                        <div className="mt-4 flex flex-wrap gap-2">

                            {fitDetails.muscleGroups?.map(
                                (muscle: string) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
                                    >
                                        {muscle}
                                    </span>
                                )
                            )}

                        </div>

                        {/* Grid boxes */}
                        <div className="mt-5 overflow-hidden rounded-2xl border border-[#292c33] bg-[#1a1d22]">

                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide text-white">
                                    Equipment
                                </span>

                                <span className="text-sm text-gray-200">
                                    {fitDetails.equipment}
                                </span>

                            </div>

                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Difficulty
                                </span>

                                <span className="text-sm">
                                    {fitDetails.difficulty}
                                </span>

                            </div>

                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Sets
                                </span>

                                <span className="text-sm">
                                    {fitDetails.sets}
                                </span>

                            </div>

                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Reps
                                </span>

                                <span className="text-sm">
                                    {fitDetails.reps}
                                </span>

                            </div>

                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Duration
                                </span>

                                <span className="text-sm">
                                    {fitDetails.duration}
                                </span>

                            </div>


                            <div className="grid grid-cols-2 border-b border-[#292c33] px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Calories
                                </span>

                                <span className="text-sm">
                                    {fitDetails.calories} kcal
                                </span>

                            </div>

                            <div className="grid grid-cols-2 px-4 py-3">

                                <span className="text-xs font-bold uppercase tracking-wide">
                                    Rating
                                </span>

                                <span className="text-sm">
                                    {fitDetails.rating}
                                </span>

                            </div>

                        </div>



                        <div className="mt-6">

                            <h2 className="text-xl font-bold uppercase">
                                Instructions
                            </h2>


                            <ol className="mt-3 space-y-2 text-sm leading-6 text-gray-200">

                                {fitDetails.instructions?.map(
                                    (instruction: string, index: number) => (
                                        <li key={index}>
                                            {index + 1}. {instruction}
                                        </li>
                                    )
                                )}

                            </ol>

                        </div>



                        <div className="mt-5 flex flex-wrap gap-8">
                            <button
                                className="rounded-xl bg-[#C2F800] px-3 py-2 text-sm font-medium text-black transition hover:scale-105 hover:bg-[#d4ff33]"
                            >
                                Add to Today&apos;s plan
                            </button>


                            <button
                                className="rounded-xl border border-gray-400 px-3 py-2 text-sm font-medium text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
                            >
                                Save for later
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default DetailsPage;