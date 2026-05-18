import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { IconCash, IconQrcode, IconCheck, IconArrowLeft, IconReceipt, IconCopy, IconArrowRight, IconWallet, IconBuildingBank, IconShoppingCartOff } from "@tabler/icons-react";

export default function OrderCheckout() {
    const [cart, setCart] = useState<{name: string, price: number, qty: number, image: string}[]>([]);
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
            } catch (e) {}
        }
        setIsLoading(false);
    }, []);

    const [paymentMethod, setPaymentMethod] = useState("kasir");
    const [cashlessType, setCashlessType] = useState("qris");
    const [step, setStep] = useState(1);
    const [uniqueCode, setUniqueCode] = useState("");
    const [copied, setCopied] = useState(false);
    
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const handleCheckout = () => {
        if (paymentMethod === "cashless") {
            setStep(2); 
            setTimeout(() => {
                setUniqueCode("MBOIS-" + Math.random().toString(36).substr(2, 6).toUpperCase());
                setStep(3);
                sessionStorage.removeItem("es_teh_cart");
            }, 3000); 
        } else {
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
                                                        Rp {(item.price * item.qty).toLocaleString("id-ID")}
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
                                        <span className="text-3xl font-black text-[#096956]">Rp {totalAmount.toLocaleString("id-ID")}</span>
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
                    <div className="w-full flex items-center justify-center min-h-[60vh]">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl border border-slate-100 max-w-2xl w-full mx-auto relative overflow-hidden fade-in">
                            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#096956]/10 to-transparent"></div>
                            
                            <div className="w-24 h-24 bg-[#096956] text-white rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl shadow-[#096956]/40">
                                <IconCheck size={48} stroke={3} />
                            </div>
                            
                            <h2 className="text-4xl font-black mb-4 text-slate-800">Pesanan Berhasil Dibuat!</h2>
                            
                            {paymentMethod === "kasir" ? (
                                <div className="mt-8 text-slate-600 text-lg">
                                    <p className="mb-6 leading-relaxed">Silakan langsung menuju kasir kami dan tunjukkan halaman ini untuk melakukan pembayaran tunai.</p>
                                    <div className="bg-amber-50 border-2 border-amber-200 text-amber-800 p-6 rounded-2xl">
                                        <div className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-2">Tagihan Anda</div>
                                        <div className="text-4xl font-black">Rp {totalAmount.toLocaleString("id-ID")}</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-10">
                                    <p className="text-slate-500 text-lg mb-6 leading-relaxed">Pembayaran non-tunai Anda telah dikonfirmasi. Tunjukkan kode unik di bawah ini kepada barista untuk mengambil pesanan prioritas Anda tanpa antre lama!</p>
                                    <div className="bg-[#f8faf8] border-2 border-dashed border-[#096956]/30 rounded-3xl p-8 relative">
                                        <div className="text-sm font-bold text-[#096956]/70 mb-3 uppercase tracking-widest">KODE PENGAMBILAN UNIK</div>
                                        <div className="text-5xl md:text-6xl font-black text-[#096956] tracking-widest mb-6 break-words">{uniqueCode}</div>
                                        
                                        <button 
                                            onClick={copyToClipboard}
                                            className="flex items-center justify-center gap-2 mx-auto text-base font-bold text-white bg-[#096956] border border-[#096956] px-8 py-4 rounded-full hover:bg-[#075041] transition-all shadow-lg hover:-translate-y-1"
                                        >
                                            {copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
                                            {copied ? "Kode Tersalin!" : "Salin Kode Antrean"}
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <a href="/" className="inline-block text-[#096956] font-bold text-lg hover:underline transition-all">
                                    ← Kembali ke Halaman Utama
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
