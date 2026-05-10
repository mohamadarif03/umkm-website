import { Card } from "../ui/card";

export default function ProductPreviewSection() {
    return (
        <section id="testimoni" className="border-t bg-background py-20">
            <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="font-heading text-3xl font-bold text-foreground">Antarmuka yang Tenang dan Jelas</h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                    Asisten UMKM menstrukturkan informasi kompleks menjadi panduan harian yang mudah dipahami.
                </p>
                <Card
                    className="mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden border-border/70 bg-cover bg-center shadow-lg"
                    // style={{
                    //     backgroundImage:
                    //         "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALP7aH4PggNxUgCLIMucFNEqtZavCaqYJ2Ds5TtamVOyx1CtICLbKQGnnge_XP6XYxJnz7rL-ijgzhW0GrEKgrM-U2IKb76OJXhhBt6LNVcM4u_PtrgD8t6rXMsmqPgpiSjU0bATAGkB-P0HZuQBl1WgBrjiHbiaxCZ91nkaRNZosgo44GDRHWN-hzHzkrIs6OAUfFdtSML0V7ffN39W_1Jl5eYMiVPVDZttRmn1S9QXbP255qV-Cb7BE5lDyVWmg758VQeGxTPJiV')",
                    // }}
                />
            </div>
        </section>
    );
}

