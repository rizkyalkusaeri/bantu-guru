"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define Types
interface Fase {
    id: string;
    label: string;
    description: string | null;
}

interface Jenjang {
    id: string;
    label: string;
}

interface Kelas {
    id: string;
    label: string;
    fase: Fase;
    jenjang: Jenjang;
}

interface OnboardingFormProps {
    kelasList: Kelas[];
}

export default function OnboardingForm({ kelasList }: OnboardingFormProps) {
    const [selectedKelasId, setSelectedKelasId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const selectedKelas = kelasList.find(k => k.id === selectedKelasId);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedKelas) {
            setLoading(true);
            // Simulate save
            setTimeout(() => {
                router.push("/create");
            }, 500);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama Lengkap Input */}
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-slate-800 dark:text-gray-200 ml-1" htmlFor="fullname">
                        Nama Lengkap
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-[#13ec92] transition-colors">person</span>
                        </div>
                        <input
                            id="fullname"
                            type="text"
                            placeholder="Contoh: Budi Santoso"
                            className="block w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4 pl-12 text-xl text-slate-900 dark:text-white placeholder:text-gray-400 focus:border-[#13ec92] focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-0 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Nama Sekolah Input */}
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-slate-800 dark:text-gray-200 ml-1" htmlFor="school">
                        Nama Sekolah
                    </label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-[#13ec92] transition-colors">school</span>
                        </div>
                        <input
                            id="school"
                            type="text"
                            placeholder="Contoh: SDN 01 Jakarta"
                            className="block w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4 pl-12 text-xl text-slate-900 dark:text-white placeholder:text-gray-400 focus:border-[#13ec92] focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-0 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Grade Selector */}
                <div className="space-y-2">
                    <label className="block text-lg font-medium text-slate-800 dark:text-gray-200 ml-1">
                        Mengajar Kelas Berapa?
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "flex w-full items-center justify-between rounded-2xl border-2 bg-white dark:bg-gray-800 p-4 text-left shadow-sm transition-all focus:outline-none",
                                selectedKelas
                                    ? "border-[#13ec92] ring-4 ring-[#13ec92]/10"
                                    : "border-gray-200 dark:border-gray-700"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#13ec92]/20 text-[#083623]">
                                    <span className="material-symbols-outlined text-green-700 dark:text-[#13ec92]">menu_book</span>
                                </span>
                                <span className={cn("text-xl font-medium", selectedKelas ? "text-slate-900 dark:text-white" : "text-gray-400")}>
                                    {selectedKelas ? `${selectedKelas.label} (${selectedKelas.jenjang.label})` : "Pilih Kelas"}
                                </span>
                            </div>
                            <span className={cn("material-symbols-outlined text-[#13ec92] text-3xl transition-transform", isOpen && "rotate-180")}>expand_more</span>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute z-30 w-full mt-2 bg-white dark:bg-gray-800 border border-slate-100 dark:border-gray-700 rounded-2xl shadow-xl max-h-60 overflow-y-auto no-scrollbar">
                                {kelasList.map((kelas) => (
                                    <button
                                        key={kelas.id}
                                        type="button"
                                        onClick={() => {
                                            setSelectedKelasId(kelas.id);
                                            setIsOpen(false);
                                        }}
                                        className="w-full text-left px-6 py-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400 text-slate-700 dark:text-gray-300 transition-colors border-b border-slate-50 dark:border-gray-800 last:border-0"
                                    >
                                        <span className="font-medium text-lg">{kelas.label}</span>
                                        <span className="text-sm text-slate-400 ml-2">({kelas.jenjang.label})</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Dynamic Feedback Badge */}
                    {selectedKelas && (
                        <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-500">
                            <div className="flex items-start gap-4 rounded-xl bg-[#e0fdf4] dark:bg-green-900/30 border border-[#13ec92]/30 p-4">
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#13ec92] text-white shadow-sm">
                                    <span className="material-symbols-outlined text-lg font-bold">check</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-green-900 dark:text-green-300">{selectedKelas.fase.label} Terdeteksi</h3>
                                    <p className="text-base text-green-800/80 dark:text-green-200/70 leading-snug">
                                        Sistem akan menyesuaikan materi untuk {selectedKelas.fase.description || "fase ini"}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>

            {/* Bottom Action Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/90 dark:bg-[#152a21]/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-6 pb-8">
                <button
                    onClick={handleSubmit}
                    disabled={!selectedKelas || loading}
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#13ec92] p-5 transition-all hover:bg-[#0fd684] active:scale-[0.98] shadow-lg shadow-[#13ec92]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="relative z-10 text-xl font-bold text-[#083623] tracking-wide">
                        {loading ? "Menyimpan..." : "Simpan & Lanjutkan"}
                    </span>
                    {!loading && <span className="material-symbols-outlined relative z-10 text-[#083623] group-hover:translate-x-1 transition-transform">arrow_forward</span>}

                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
            </div>

            <style jsx global>{`
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
        </>
    );
}
