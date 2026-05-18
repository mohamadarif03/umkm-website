import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { IconCash, IconQrcode, IconCheck, IconArrowLeft, IconReceipt, IconCopy, IconArrowRight, IconWallet, IconBuildingBank, IconShoppingCartOff, IconDownload } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { getCartTotal, getLineTotal, type CheckoutCartItem } from "../lib/order-checkout";

export default function OrderCheckout() {
    const [cart, setCart] = useState<CheckoutCartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const catalog = [
            { name: "Es Teh Tarik Mbois", price: 7000, image: "/es teh/es tarik.jpeg" },
            { name: "Es Teh Gula Aren", price: 8000, image: "/es teh/teh gula aren.jpeg" },
            { name: "Es Teh Lemon Sereh", price: 9000, image: "/es teh/teh lemon.jpeg" },
            { name: "Es Teh Susu Coklat", price: 10000, image: "/es teh/teh susu.jpeg" },
            { name: "Es Teh Jahe Merah", price: 10000, image: "/es teh/teh jahe.jpeg" },
            { name: "Paket Mbois Bundle 5", price: 30000, image: "/es teh/5 Es Teh.jpeg" }
        ];

        const savedCart = sessionStorage.getItem("es_teh_cart");
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                const loadedCart = [];
                for (const [name, qty] of Object.entries(parsed)) {
                    if (typeof qty === 'number' && qty > 0) {
                        const foundItem = catalog.find(i => i.name === name);
                        if (foundItem) {
                            loadedCart.push({ ...foundItem, qty });
                        }
                    }
                }
                setCart(loadedCart);
            } catch (e) { }
        }
        setIsLoading(false);
    }, []);

    const [paymentMethod, setPaymentMethod] = useState("kasir");
    const [cashlessType, setCashlessType] = useState("qris");
    const [step, setStep] = useState(1);
    const [uniqueCode, setUniqueCode] = useState("");
    const [receiptNumber, setReceiptNumber] = useState("");
    const [paymentTime, setPaymentTime] = useState("");
    const [copied, setCopied] = useState(false);

    const totalAmount = getCartTotal(cart);

    const getPaymentMethodLabel = () => {
        if (paymentMethod === "kasir") return "Bayar di Kasir";
        if (cashlessType === "qris") return "QRIS";
        if (cashlessType === "ewallet") return "E-Wallet";
        return "Transfer Bank";
    };

    const generateReceiptMeta = () => {
        const now = new Date();
        setPaymentTime(
            now.toLocaleString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
        );
        setReceiptNumber(`TMB${now.getTime().toString().slice(-8)}`);
    };

    const handleCheckout = () => {
        if (paymentMethod === "cashless") {
            setStep(2);
            setTimeout(() => {
                setUniqueCode("MBOIS-" + Math.random().toString(36).substr(2, 6).toUpperCase());
                generateReceiptMeta();
                setStep(3);
                sessionStorage.removeItem("es_teh_cart");
            }, 3000);
        } else {
            generateReceiptMeta();
            setStep(3);
            sessionStorage.removeItem("es_teh_cart");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uniqueCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isLoading && cart.length === 0 && step === 1) {
        return (
            <div className="min-h-screen w-full bg-[#f1f4f1] font-sans text-slate-800 flex items-center justify-center p-4">
                <Head title="Keranjang Kosong - Es Teh Mbois" />
                <div className="bg-white rounded-3xl p-10 text-center shadow-lg border border-slate-100 max-w-md w-full">
                    <div className="w-24 h-24 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconShoppingCartOff size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-slate-800">Keranjang Kosong</h2>
                    <p className="text-slate-500 mb-8">Anda belum memilih minuman apapun. Yuk lihat menu mbois kami!</p>
                    <a href="/" className="bg-[#096956] text-white py-3 px-8 rounded-xl font-bold hover:bg-[#075041] transition-all inline-block">
                        Lihat Menu
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-[#f1f4f1] font-sans text-slate-800">
            <Head title="Checkout Pesanan - Es Teh Mbois" />

            <nav className="bg-white shadow-sm p-4 sticky top-0 z-20 w-full">
                <div className="w-full px-4 md:px-8 mx-auto flex items-center">
                    <a href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-4">
                        <IconArrowLeft size={24} className="text-[#096956]" />
                    </a>
                    <h1 className="text-xl font-bold text-slate-800">Selesaikan Pesanan</h1>
                </div>
            </nav>

            <main className="w-full px-4 md:px-8 py-8 md:py-12 pb-24">
                {step === 1 && (
                    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto fade-in">
                        <div className="w-full lg:w-7/12 xl:w-2/3 space-y-6">
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-4">
                                    Pilih Metode Pembayaran
                                </h2>

                                <div className="space-y-6">
                                    <label className={`flex flex-col md:flex-row items-start md:items-center p-5 md:p-6 border-2 rounded-2xl cursor-pointer transition-all ${paymentMethod === 'kasir' ? 'border-[#096956] bg-[#096956]/5 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <div className="flex items-center w-full mb-4 md:mb-0">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="kasir"
                                                checked={paymentMethod === 'kasir'}
                                                onChange={() => setPaymentMethod('kasir')}
                                                className="hidden"
                                            />
                                            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-5 shrink-0 ${paymentMethod === 'kasir' ? 'border-[#096956]' : 'border-slate-300'}`}>
                                                {paymentMethod === 'kasir' && <div className="w-3.5 h-3.5 rounded-full bg-[#096956]" />}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                                                    <IconCash size={28} />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-slate-800">Bayar di Kasir</div>
                                                    <div className="text-sm text-slate-500">Bayar menggunakan uang tunai langsung di outlet</div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    <div className={`border-2 rounded-2xl transition-all overflow-hidden ${paymentMethod === 'cashless' ? 'border-[#096956] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <label className={`flex items-center p-5 md:p-6 cursor-pointer w-full ${paymentMethod === 'cashless' ? 'bg-[#096956]/5 border-b-2 border-slate-100/50' : ''}`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="cashless"
                                                checked={paymentMethod === 'cashless'}
                                                onChange={() => setPaymentMethod('cashless')}
                                                className="hidden"
                                            />
                                            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-5 shrink-0 ${paymentMethod === 'cashless' ? 'border-[#096956]' : 'border-slate-300'}`}>
                                                {paymentMethod === 'cashless' && <div className="w-3.5 h-3.5 rounded-full bg-[#096956]" />}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                                                    <IconQrcode size={28} />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-slate-800">Pembayaran Non-Tunai</div>
                                                    <div className="text-sm text-slate-500">Bayar sekarang, dapatkan kode antrean prioritas</div>
                                                </div>
                                            </div>
                                        </label>

                                        {paymentMethod === 'cashless' && (
                                            <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                                <label className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${cashlessType === 'qris' ? 'border-[#096956] bg-[#096956]/5' : 'border-slate-100 hover:border-slate-200'}`}>
                                                    <input type="radio" name="cashlessType" value="qris" checked={cashlessType === 'qris'} onChange={() => setCashlessType('qris')} className="hidden" />
                                                    <IconQrcode size={32} className={`mb-2 ${cashlessType === 'qris' ? 'text-[#096956]' : 'text-slate-400'}`} />
                                                    <span className={`font-semibold ${cashlessType === 'qris' ? 'text-[#096956]' : 'text-slate-600'}`}>QRIS</span>
                                                </label>

                                                <label className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${cashlessType === 'ewallet' ? 'border-[#096956] bg-[#096956]/5' : 'border-slate-100 hover:border-slate-200'}`}>
                                                    <input type="radio" name="cashlessType" value="ewallet" checked={cashlessType === 'ewallet'} onChange={() => setCashlessType('ewallet')} className="hidden" />
                                                    <IconWallet size={32} className={`mb-2 ${cashlessType === 'ewallet' ? 'text-[#096956]' : 'text-slate-400'}`} />
                                                    <span className={`font-semibold ${cashlessType === 'ewallet' ? 'text-[#096956]' : 'text-slate-600'}`}>E-Wallet</span>
                                                </label>

                                                <label className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${cashlessType === 'bank' ? 'border-[#096956] bg-[#096956]/5' : 'border-slate-100 hover:border-slate-200'}`}>
                                                    <input type="radio" name="cashlessType" value="bank" checked={cashlessType === 'bank'} onChange={() => setCashlessType('bank')} className="hidden" />
                                                    <IconBuildingBank size={32} className={`mb-2 ${cashlessType === 'bank' ? 'text-[#096956]' : 'text-slate-400'}`} />
                                                    <span className={`font-semibold ${cashlessType === 'bank' ? 'text-[#096956]' : 'text-slate-600'}`}>Transfer Bank</span>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-5/12 xl:w-1/3">
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 sticky top-28">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-4">
                                    <IconReceipt size={24} className="text-[#096956]" />
                                    Ringkasan Pesanan
                                </h2>

                                {cart.length > 0 ? (
                                    <div className="space-y-5">
                                        {cart.map((item, index) => (
                                            <div key={index} className="flex gap-4 border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                                                <div className="h-20 w-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-center">
                                                    <h3 className="font-bold text-slate-800 line-clamp-2">{item.name}</h3>
                                                    <p className="text-slate-500 text-sm mt-1">{item.qty}x @ Rp {item.price.toLocaleString("id-ID")}</p>
                                                    <div className="font-bold text-[#096956] mt-1">
                                                        Rp {getLineTotal(item).toLocaleString("id-ID")}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-8 text-center text-slate-400">Loading produk...</div>
                                )}

                                <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-500">Subtotal</span>
                                        <span className="font-semibold text-slate-800">Rp {totalAmount.toLocaleString("id-ID")}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-slate-500">Biaya Layanan</span>
                                        <span className="font-semibold text-emerald-600">Gratis</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="font-bold text-slate-800 text-lg">Total Pembayaran</span>
                                        <span className="text-3xl font-bold text-[#096956]">Rp {totalAmount.toLocaleString("id-ID")}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full mt-8 bg-[#096956] text-white py-4 px-6 rounded-2xl font-bold text-xl shadow-lg shadow-[#096956]/30 hover:bg-[#075041] transition-all hover:-translate-y-1 hover:shadow-xl flex justify-center items-center gap-3"
                                >
                                    Bayar Sekarang <IconArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="w-full flex items-center justify-center min-h-[60vh]">
                        <div className="bg-white rounded-3xl p-12 text-center shadow-2xl border border-slate-100 max-w-lg w-full mx-auto fade-in">
                            <div className="w-28 h-28 border-4 border-slate-100 border-t-[#096956] rounded-full animate-spin mx-auto mb-8 shadow-inner"></div>
                            <h2 className="text-3xl font-extrabold mb-4 text-slate-800">Memproses Pembayaran</h2>
                            <p className="text-slate-500 text-lg">Menyambungkan ke sistem pembayaran... Mohon jangan tutup halaman ini.</p>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="w-full flex items-center justify-center min-h-[60vh] bg-[#f1f4f1]/30 py-6 pt-0">
                        {paymentMethod === "cashless" ? (
                            <div className="w-full max-w-md mx-auto px-4 fade-in">
                                <div className="relative rounded-[2rem] bg-white p-6 pt-10 text-center text-slate-800 border border-slate-100 pb-8">
                                    <div className="absolute left-1/2 top-0 h-17 w-17 -translate-x-1/2 -translate-y-1/2 rounded-b-full bg-[#f1f4f1] border-b border-x border-slate-100" />
                                    <div className="absolute left-1/2 top-0 z-10 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#096956] text-white shadow-lg shadow-[#096956]/30">
                                        <IconCheck size={20} stroke={3} />
                                    </div>

                                    <h2 className="text-2xl font-bold mt-2 text-slate-900 tracking-tight">Pembayaran Berhasil!</h2>
                                    <p className="mt-1.5 text-xs text-slate-500 max-w-[280px] mx-auto">
                                        Pembayaran pesanan TehMbois berhasil diproses.
                                    </p>

                                    <div className="my-5 border-t-2 border-dashed border-slate-100" />

                                    <div className="bg-slate-50/70 rounded-2xl p-4 mb-6">
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Pembayaran</p>
                                        <p className="mt-1 text-3xl font-black text-[#096956]">
                                            IDR {totalAmount.toLocaleString("id-ID")}
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-left px-1">
                                        <div className="flex justify-between items-center py-1 border-b border-slate-50">
                                            <span className="text-xs font-medium text-slate-400">Nomor Referensi</span>
                                            <span className="text-sm font-bold text-slate-700 font-mono">{receiptNumber}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-b border-slate-50">
                                            <span className="text-xs font-medium text-slate-400">Waktu Pembayaran</span>
                                            <span className="text-sm font-semibold text-slate-700">{paymentTime}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-b border-slate-50">
                                            <span className="text-xs font-medium text-slate-400">Metode Pembayaran</span>
                                            <span className="text-sm font-semibold text-slate-700">{getPaymentMethodLabel()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-1">
                                            <span className="text-xs font-medium text-slate-400">Kode Antrean</span>
                                            <span className="text-sm font-black text-[#096956] font-mono text-base">{uniqueCode}</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 text-right px-1">
                                        <Button
                                            onClick={copyToClipboard}
                                            className={[
                                                "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all active:scale-[0.98]",
                                                copied
                                                    ? "border-green-700 bg-green-700 text-white"
                                                    : " border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300",
                                            ].join(" ")}
                                        >
                                            <IconCopy size={18} className={copied ? "text-white" : "text-slate-500"} />
                                            {copied ? "Kode tersalin!" : "Salin Kode Antrean"}
                                        </Button>
                                    </div>

                                    <div className="pointer-events-none absolute -bottom-1.5 left-0 right-0 flex items-center justify-between px-2.5">
                                        {Array.from({ length: 14 }).map((_, i) => (
                                            <span key={i} className="h-4 w-4 rounded-full bg-[#f1f4f1] border-t border-slate-100/30" />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <a href="/" className="inline-flex items-center gap-2 text-[#096956] font-extrabold text-sm hover:text-[#0c5345] transition-all group">
                                        <span className="trasition-transform group-hover:-translate-x-1">&larr;</span>
                                        Kembali ke Halaman Utama
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full max-w-2xl mx-auto px-4 fade-in">
                                <div className="rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                                            <IconCash size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Pesanan Diterima</h2>
                                            <p className="text-sm text-slate-500">Silakan lanjutkan pembayaran di kasir.</p>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-6 text-sm text-amber-900">
                                        <p className="font-semibold mb-2">Instruksi Pembayaran Kasir</p>
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Tunjukkan halaman ini ke kasir TehMbois.</li>
                                            <li>Konfirmasi nama pesanan dan jumlah item.</li>
                                            <li>Bayar total tagihan sebesar <span className="font-bold">Rp {totalAmount.toLocaleString("id-ID")}</span>.</li>
                                        </ol>
                                        <p className="mt-3 text-xs text-amber-700">Waktu checkout: {paymentTime}</p>
                                    </div>

                                    <div className="border-t border-slate-100 pt-5">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">Rekap Pesanan</h3>
                                        <div className="space-y-3">
                                            {cart.map((item) => (
                                                <div key={item.name} className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="font-semibold text-slate-800">{item.name}</p>
                                                        <p className="text-sm text-slate-500">{item.qty}x @ Rp {item.price.toLocaleString("id-ID")}</p>
                                                    </div>
                                                    <p className="font-bold text-[#096956]">Rp {getLineTotal(item).toLocaleString("id-ID")}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-5 border-t border-dashed border-slate-200 pt-4 flex items-end justify-between">
                                            <span className="text-base font-bold text-slate-700">Total Bayar</span>
                                            <span className="text-2xl font-black text-[#096956]">Rp {totalAmount.toLocaleString("id-ID")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <a href="/" className="inline-flex items-center gap-2 text-[#096956] font-extrabold text-sm hover:text-[#0c5345] transition-all group">
                                        <span className="trasition-transform group-hover:-translate-x-1">&larr;</span>
                                        Kembali ke Halaman Utama
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
