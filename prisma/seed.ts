
import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import * as dotenv from "dotenv"

dotenv.config()

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log("Start seeding...")

    // 1. Jenjang
    const jenjangSD = await prisma.jenjang.create({ data: { label: "SD" } })
    const jenjangSMP = await prisma.jenjang.create({ data: { label: "SMP" } })
    const jenjangSMA = await prisma.jenjang.create({ data: { label: "SMA" } })

    // 2. Fase
    // Note: For simplicity in this demo, strict mapping might be loose, but we try to follow Kurikulum Merdeka
    const faseA = await prisma.fase.create({ data: { label: "Fase A", description: "Kelas 1-2 SD" } })
    const faseB = await prisma.fase.create({ data: { label: "Fase B", description: "Kelas 3-4 SD" } })
    const faseC = await prisma.fase.create({ data: { label: "Fase C", description: "Kelas 5-6 SD" } })
    const faseD = await prisma.fase.create({ data: { label: "Fase D", description: "Kelas 7-9 SMP" } })
    const faseE = await prisma.fase.create({ data: { label: "Fase E", description: "Kelas 10 SMA" } })
    const faseF = await prisma.fase.create({ data: { label: "Fase F", description: "Kelas 11-12 SMA" } })

    // 3. Kelas (Mapped to Fase & Jenjang)
    const kelasData = [
        // SD
        { label: "Kelas 1", tingkatan: 1, faseId: faseA.id, jenjangId: jenjangSD.id },
        { label: "Kelas 2", tingkatan: 2, faseId: faseA.id, jenjangId: jenjangSD.id },
        { label: "Kelas 3", tingkatan: 3, faseId: faseB.id, jenjangId: jenjangSD.id },
        { label: "Kelas 4", tingkatan: 4, faseId: faseB.id, jenjangId: jenjangSD.id },
        { label: "Kelas 5", tingkatan: 5, faseId: faseC.id, jenjangId: jenjangSD.id },
        { label: "Kelas 6", tingkatan: 6, faseId: faseC.id, jenjangId: jenjangSD.id },
        // SMP
        { label: "Kelas 7", tingkatan: 7, faseId: faseD.id, jenjangId: jenjangSMP.id },
        { label: "Kelas 8", tingkatan: 8, faseId: faseD.id, jenjangId: jenjangSMP.id },
        { label: "Kelas 9", tingkatan: 9, faseId: faseD.id, jenjangId: jenjangSMP.id },
        // SMA
        { label: "Kelas 10", tingkatan: 10, faseId: faseE.id, jenjangId: jenjangSMA.id },
        { label: "Kelas 11", tingkatan: 11, faseId: faseF.id, jenjangId: jenjangSMA.id },
        { label: "Kelas 12", tingkatan: 12, faseId: faseF.id, jenjangId: jenjangSMA.id },
    ]

    for (const k of kelasData) {
        await prisma.kelas.create({ data: k })
    }

    // 4. Mata Pelajaran
    const mapelUmum = [
        "Matematika", "Bahasa Indonesia", "IPAS", "Pendidikan Pancasila",
        "Seni Rupa", "PJOK", "Bahasa Inggris"
    ]

    for (const m of mapelUmum) {
        await prisma.mataPelajaran.create({
            data: {
                label: m,
                jenjang: {
                    connect: [
                        { id: jenjangSD.id },
                        { id: jenjangSMP.id },
                        { id: jenjangSMA.id }
                    ]
                }
            }
        })
    }

    // 5. Model Pembelajaran
    const models = [
        { label: "Problem Based Learning (PBL)", description: "Pembelajaran berbasis masalah dunia nyata." },
        { label: "Project Based Learning (PjBL)", description: "Pembelajaran berbasis proyek menghasilkan karya." },
        { label: "Discovery Learning", description: "Pembelajaran penemuan konsep secara mandiri." },
        { label: "Inquiry Learning", description: "Pembelajaran berbasis penyelidikan mendalam." },
        { label: "Cooperative Learning", description: "Pembelajaran kooperatif dalam kelompok." },
    ]

    for (const m of models) {
        await prisma.modelPembelajaran.create({ data: m })
    }

    // 6. Gaya Belajar
    const styles = [
        { label: "Visual", description: "Belajar dengan melihat gambar/visual." },
        { label: "Auditori", description: "Belajar dengan mendengarkan penjelasan/suara." },
        { label: "Kinestetik", description: "Belajar dengan bergerak dan menyentuh." },
        { label: "Reading/Writing", description: "Belajar dengan membaca dan menulis teks." },
    ]

    for (const s of styles) {
        await prisma.gayaBelajar.create({ data: s })
    }

    console.log("Seeding finished.")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
