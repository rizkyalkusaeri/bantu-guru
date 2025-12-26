"use client";

import { Card } from "@/components/ui/card";
import { Lightbulb, RefreshCw, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GeneratingPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    router.push("/result");
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, [router]);

    return (
        <main className="min-h-screen bg-[#F0FDF8] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-8">

                {/* Mascot */}
                <div className="relative">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-100 p-4 border border-emerald-50 relative z-10">
                        <Image src="/robot-mascot.png" width={160} height={160} alt="Cooking..." className="object-contain" />
                    </div>
                    {/* Sparkle Icon Badge */}
                    <div className="absolute top-2 right-2 z-20 bg-white p-2 rounded-full shadow-md">
                        <Sparkles className="w-6 h-6 text-emerald-500" />
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Mohon tunggu <br /> sebentar...
                    </h1>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                        Sedang menyusun modul ajar terbaik untuk Ibu/Bapak...
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <div className="flex items-center text-slate-700">
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin text-emerald-500" />
                            Memproses data
                        </div>
                        <span className="text-emerald-500">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-400 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-400">Proses ini mungkin memakan waktu 1-2 menit.</p>
                </div>

                {/* Tip Card */}
                <Card className="w-full p-4 flex items-start space-x-3 bg-white border-0 shadow-lg shadow-emerald-100/50 mt-8 text-left">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-400 tracking-wider">TIPS GURU</p>
                        <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                            &quot;Menyapa siswa dengan nama mereka di awal kelas dapat meningkatkan keterlibatan emosional hingga 30%.&quot;
                        </p>
                    </div>
                </Card>

            </div>
        </main>
    );
}
