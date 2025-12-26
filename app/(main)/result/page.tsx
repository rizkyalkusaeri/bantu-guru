import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArrowLeft,
    CheckCircle,
    Download,
    Edit3,
    Info,
    MessageCircle,
    Target
} from "lucide-react";
import Link from "next/link";

export default function ResultPage() {
    return (
        <main className="min-h-screen bg-[#F0FDF8] pb-32">
            {/* Header */}
            <div className="flex items-center p-4 pt-6 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                <Link href="/create" className="p-2 -ml-2 rounded-full hover:bg-slate-100">
                    <ArrowLeft className="w-6 h-6 text-slate-800" />
                </Link>
                <h1 className="flex-1 text-center font-bold text-lg text-slate-900 pr-8">Pratinjau</h1>
            </div>

            <div className="px-4 mt-6 flex flex-col items-center text-center space-y-6">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-emerald-100/80 rounded-full flex items-center justify-center animate-bounce-slow">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">Modul Ajar Siap!</h2>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Dokumen telah berhasil dibuat. Silakan periksa detailnya di bawah ini.
                    </p>
                </div>

                {/* Document Preview Card */}
                <Card className="w-full text-left overflow-hidden border-0 shadow-xl shadow-emerald-50 bg-white">
                    {/* Green Top Border */}
                    <div className="h-2 bg-emerald-300 w-full"></div>

                    <div className="p-6 space-y-8">
                        {/* Section I */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Info className="w-6 h-6 text-emerald-500" />
                                <h3 className="font-bold text-lg text-slate-900">I. Informasi Umum</h3>
                            </div>

                            <div className="bg-slate-50/50 rounded-2xl p-4 space-y-4">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <span className="text-slate-500 font-medium">Sekolah</span>
                                    <span className="col-span-2 font-semibold text-slate-900 text-right">SDN 1 GuruBantu</span>
                                </div>
                                <div className="h-px bg-slate-100 w-full"></div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <span className="text-slate-500 font-medium">Mapel</span>
                                    <span className="col-span-2 font-semibold text-slate-900 text-right">Bahasa Indonesia</span>
                                </div>
                                <div className="h-px bg-slate-100 w-full"></div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <span className="text-slate-500 font-medium">Kelas</span>
                                    <span className="col-span-2 font-semibold text-slate-900 text-right">Kelas 4 / Fase B</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Profil Pelajar Pancasila</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Bergotong Royong</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">Mandiri</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-100 w-full"></div>

                        {/* Section II */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Target className="w-6 h-6 text-emerald-500" />
                                <h3 className="font-bold text-lg text-slate-900">II. Komponen Inti</h3>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-bold text-slate-800 text-sm">Tujuan Pembelajaran</h4>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm leading-relaxed marker:text-emerald-500">
                                    <li>Peserta didik mampu mengidentifikasi ide pokok dalam sebuah paragraf.</li>
                                    <li>Peserta didik mampu menyusun ringkasan cerita dengan bahasa sendiri.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Floating Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)] pt-4 pb-6 z-30">
                <div className="max-w-md mx-auto flex items-center space-x-3">
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full border-slate-200 shrink-0">
                        <Edit3 className="w-5 h-5 text-slate-600" />
                    </Button>

                    <Button className="flex-1 h-12 bg-[#10b981] hover:bg-[#059669] text-white font-bold rounded-full shadow-lg shadow-emerald-200">
                        <Download className="w-5 h-5 mr-2" />
                        Unduh PDF
                    </Button>
                </div>

                <div className="max-w-md mx-auto mt-3">
                    <Button variant="outline" className="w-full h-12 border-emerald-100 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-full">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Bagikan ke WhatsApp
                    </Button>
                </div>
            </div>
        </main>
    );
}
