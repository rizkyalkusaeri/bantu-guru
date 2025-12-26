"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, CheckCircle, ChevronDown, GraduationCap, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OnboardingPage() {
    const [selectedGrade, setSelectedGrade] = useState("Kelas 1 SD");

    return (
        <main className="min-h-screen bg-[#F0FDF8] px-4 pb-8 pt-6 max-w-md mx-auto relative">
            {/* Back Button */}
            <Link href="/login" className="absolute top-6 left-4 p-2 bg-white rounded-full shadow-sm">
                <ArrowLeft className="w-6 h-6 text-slate-700" />
            </Link>

            {/* Header Image */}
            <div className="flex justify-end mb-6">
                <div className="relative w-40 h-40 bg-[#FDE68A]/20 rounded-full flex items-center justify-center p-2">
                    <Image
                        src="/teacher-illustration.png"
                        alt="Teacher"
                        width={160}
                        height={160}
                        className="rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Title */}
            <div className="space-y-2 mb-8">
                <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                    Halo, <br />
                    Bapak/Ibu Guru! 👋
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Mari lengkapi profil Anda agar kami bisa membantu lebih baik di kelas.
                </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                    <label className="text-slate-900 font-semibold text-base">Nama Lengkap</label>
                    <Input
                        placeholder="Contoh: Budi Santoso"
                        icon={<div className="w-5 h-5 bg-slate-200 rounded-full" />} // Placeholder icon if no specific user icon
                        className="bg-slate-50 border-slate-200"
                    />
                </div>

                {/* School */}
                <div className="space-y-2">
                    <label className="text-slate-900 font-semibold text-base">Nama Sekolah</label>
                    <Input
                        placeholder="Contoh: SDN 01 Jakarta"
                        icon={<GraduationCap className="w-5 h-5" />}
                        className="bg-slate-50 border-slate-200"
                    />
                </div>

                {/* Grade Selection */}
                <div className="space-y-2">
                    <label className="text-slate-900 font-semibold text-base">Mengajar Kelas Berapa?</label>
                    <div className="relative">
                        <button className="w-full flex items-center justify-between p-4 bg-white border border-emerald-400 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-900">{selectedGrade}</span>
                            </div>
                            <ChevronDown className="w-5 h-5 text-emerald-500" />
                        </button>
                    </div>

                    {/* Alert Box */}
                    <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-emerald-900 text-sm">Fase A Terdeteksi</h4>
                            <p className="text-emerald-700 text-xs mt-1 leading-relaxed">
                                Sistem akan menyesuaikan materi untuk murid kelas 1-2.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        className="w-full h-14 bg-[#10b981] hover:bg-[#059669] text-white text-lg font-bold rounded-full shadow-lg shadow-emerald-200 flex items-center justify-center"
                        asChild
                    >
                        <Link href="/create">
                            Simpan & Lanjutkan
                            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
