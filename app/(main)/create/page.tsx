"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    ChevronDown,
    Clock,
    Info,
    Lightbulb,
    Sparkles,
    Users,
    CheckCircle2,
    Circle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CreateModulePage() {
    const [learningModel, setLearningModel] = useState("PBL");
    const [learningStyle, setLearningStyle] = useState(["Visual"]);

    const toggleStyle = (style: string) => {
        if (learningStyle.includes(style)) {
            setLearningStyle(learningStyle.filter(s => s !== style));
        } else {
            setLearningStyle([...learningStyle, style]);
        }
    };

    return (
        <main className="min-h-screen bg-[#F0FDF8] pb-24">
            {/* Header with Dark Gradient */}
            <div className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white p-6 pt-8 rounded-b-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div></div>
                        <div className="flex items-center space-x-2">
                            <span className="text-emerald-100 text-xs font-medium">Profil</span>
                            <div className="w-8 h-8 rounded-full bg-orange-200 overflow-hidden border-2 border-white">
                                <Image src="/teacher-illustration.png" width={32} height={32} alt="Profile" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Halo, Ibu Siti!</h1>
                    <p className="text-emerald-100 text-sm opacity-90 leading-relaxed max-w-[80%]">
                        Mari buat modul ajar hari ini. Isi formulir di bawah untuk memulai.
                    </p>
                </div>
                {/* Decorative blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
            </div>

            <div className="px-4 -mt-4 space-y-4">
                {/* Section 1: Basic Info */}
                <Card className="p-5 space-y-6 shadow-sm border-0">
                    <div className="flex items-center space-x-2 text-slate-900">
                        <Info className="w-5 h-5 text-emerald-500" />
                        <h2 className="font-bold text-lg">Informasi Dasar</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Phase */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Fase & Kelas</label>
                            <div className="p-2 border border-slate-200 rounded-lg text-slate-500 text-sm">Pilih tingkatan kelas siswa Anda</div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                                <span className="font-medium text-slate-900 text-sm">Fase A (Kelas 1-2 SD)</span>
                                <ChevronDown className="w-4 h-4 text-emerald-500" />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Mata Pelajaran</label>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                                <span className="font-medium text-slate-900 text-sm">Matematika</span>
                                <ChevronDown className="w-4 h-4 text-emerald-500" />
                            </div>
                        </div>

                        {/* Topic */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Topik / Materi</label>
                            <Input placeholder="Contoh: Penjumlahan Bilangan Cacah" className="bg-slate-50 border-slate-200 text-sm h-11" />

                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="text-slate-500">Saran:</span>
                                {["Bilangan", "Geometri", "Pengukuran"].map(chip => (
                                    <button key={chip} className="px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tip Box */}
                        <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-xl flex items-start space-x-3">
                            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-yellow-800 leading-relaxed">
                                <span className="font-bold">Tips:</span> Topik ini sangat cocok digabungkan dengan alat peraga visual seperti kartu angka.
                            </p>
                        </div>

                        {/* Time Allocation */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Alokasi Waktu</label>
                            <div className="relative">
                                <Input placeholder="1 x Pertemuan (2 JP)" className="bg-slate-50 border-slate-200 md:text-sm text-sm h-11 pr-10" />
                                <Clock className="w-5 h-5 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Section 2: Methods & Profile */}
                <Card className="p-5 space-y-6 shadow-sm border-0">
                    <div className="flex items-center space-x-2 text-slate-900">
                        <Users className="w-5 h-5 text-emerald-500" />
                        <h2 className="font-bold text-lg">Metode & Profil Siswa</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Learning Model */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Model Pembelajaran</label>
                            <p className="text-xs text-slate-500">Pilih pendekatan yang ingin Ibu gunakan hari ini.</p>

                            <div className="space-y-3">
                                {[
                                    { id: "PBL", title: "Problem-Based Learning (PBL)", desc: "Siswa belajar dengan memecahkan masalah nyata sehari-hari." },
                                    { id: "PjBL", title: "Project-Based Learning (PjBL)", desc: "Siswa membuat karya atau proyek secara berkelompok." },
                                    { id: "Discovery", title: "Discovery Learning", desc: "Siswa mencari tahu dan menemukan konsep sendiri." }
                                ].map((model) => (
                                    <div
                                        key={model.id}
                                        onClick={() => setLearningModel(model.id)}
                                        className={cn(
                                            "p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3",
                                            learningModel === model.id
                                                ? "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500"
                                                : "bg-slate-50 border-slate-200 hover:border-emerald-200"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5",
                                            learningModel === model.id ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"
                                        )}>
                                            {learningModel === model.id && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">{model.title}</h3>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{model.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Style */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Dominasi Gaya Belajar Kelas</label>
                            <div className="space-y-2">
                                {["Visual (Gambar)", "Auditori (Suara)", "Kinestetik (Gerak)", "Baca & Tulis"].map((style) => {
                                    const isSelected = learningStyle.includes(style);
                                    return (
                                        <div
                                            key={style}
                                            onClick={() => toggleStyle(style)}
                                            className={cn(
                                                "p-3 rounded-xl border transition-all cursor-pointer flex items-center space-x-3",
                                                isSelected
                                                    ? "bg-emerald-50 border-emerald-500"
                                                    : "bg-slate-50 border-slate-200"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
                                                isSelected ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"
                                            )}>
                                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                            </div>
                                            <span className="text-sm font-medium text-slate-900">{style}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Materials */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Sarana Pendukung</label>
                            <textarea
                                className="w-full h-20 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Contoh: Proyektor, Kartu angka, Lapangan sekolah..."
                            ></textarea>
                        </div>
                    </div>
                </Card>

                {/* Bottom Spacer */}
                <div className="h-4"></div>
            </div>

            {/* Floating Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-emerald-100 flex justify-center z-50">
                <Button
                    className="w-full max-w-md h-12 bg-[#10b981] hover:bg-[#059669] text-white text-base font-bold rounded-full shadow-lg shadow-emerald-200 flex items-center justify-center space-x-2"
                    asChild
                >
                    <Link href="/generating">
                        <Sparkles className="w-5 h-5" />
                        <span>Buat Modul Ajar Otomatis</span>
                    </Link>
                </Button>
            </div>
        </main>
    );
}
