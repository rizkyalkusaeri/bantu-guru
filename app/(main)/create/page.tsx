
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import CreateForm from "@/components/features/create-form";
import { prisma } from "@/lib/prisma";

export default async function CreateModulePage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    // Fetch Master Data in parallel
    const [mapel, models, styles] = await Promise.all([
        prisma.mataPelajaran.findMany({ select: { id: true, label: true } }),
        prisma.modelPembelajaran.findMany(),
        prisma.gayaBelajar.findMany()
    ]);

    return <CreateForm
        user={session.user}
        masterData={{
            mapel,
            models,
            styles
        }}
    />;
}
