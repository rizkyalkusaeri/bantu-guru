
import Image from "next/image";
import Link from "next/link";
import OnboardingForm from "@/components/features/onboarding-form";
import { prisma } from "@/lib/prisma";

export default async function OnboardingPage() {
    // Fetch Master Data
    const kelasList = await prisma.kelas.findMany({
        include: {
            fase: true,
            jenjang: true
        },
        orderBy: {
            tingkatan: 'asc'
        }
    });

    return (
        <div className="min-h-screen bg-white dark:bg-[#10221a] flex items-center justify-center p-0 sm:p-4 font-sans text-slate-800 dark:text-white">
            {/* Mobile Container */}
            <div className="relative mx-auto flex h-full min-h-screen sm:min-h-0 w-full max-w-md flex-col overflow-hidden bg-white dark:bg-[#152a21] shadow-xl sm:rounded-[32px] sm:h-[850px] sm:border sm:border-gray-200 dark:sm:border-gray-800">

                {/* Header Image / Decoration */}
                <div className="relative h-48 w-full bg-gradient-to-b from-[#e0fdf4] to-white dark:from-[#0d3326] dark:to-[#152a21]">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        {/* Abstract pattern */}
                        <div className="h-64 w-64 rounded-full bg-[#13ec92]/20 blur-3xl filter"></div>
                    </div>

                    {/* Back Button */}
                    <div className="absolute left-4 top-6 z-10">
                        <Link
                            href="/login"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 shadow-sm backdrop-blur-sm transition-all"
                        >
                            <span className="material-symbols-outlined text-slate-700 dark:text-white" style={{ fontSize: '28px' }}>arrow_back</span>
                        </Link>
                    </div>

                    {/* Illustration Area */}
                    <div className="absolute bottom-0 right-0 p-6 opacity-90">
                        <div className="relative h-32 w-32 -rotate-6 rounded-2xl shadow-lg border-4 border-white dark:border-[#152a21] overflow-hidden">
                            <Image
                                src="/teacher-illustration.png"
                                alt="Teacher"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto px-6 pb-28 pt-2 no-scrollbar">
                    {/* Title Section */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
                            Halo, <br />Bapak/Ibu Guru! 👋
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                            Mari lengkapi profil Anda agar kami bisa membantu lebih baik di kelas.
                        </p>
                    </header>

                    {/* Form Component */}
                    <OnboardingForm kelasList={kelasList} />
                </div>
            </div>
        </div>
    );
}
