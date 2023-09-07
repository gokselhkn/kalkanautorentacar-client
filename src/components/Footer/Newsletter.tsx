
export default function Newsletter() {
    return (
        <div className="row pt-3 pb-4">
            <div className="col-md-3">
                <img src="logo-footer.svg" alt="footer logo" />
            </div>
            <div className="col-md-5">
                <p className="text-muted">Araçlarımız, her tür yolculuk ihtiyacınıza uygun mükemmel bir seçenek sunuyor. Geniş araç filomuz, lüks otomobillerden ekonomik sınıf araçlara kadar farklı kategorilerdeki araçları içeriyor. Her bir araç, düzenli bakımları yapılmış, temiz ve güvenlik standartlarına uygun olarak hazırlanmıştır. İster şehir içi gezilerde kullanın, ister uzun yolculuklarınız için tercih edin, size en iyi sürüş deneyimini sunmak için buradayız. Rent a car hizmetimizle, araç seçenekleri konusunda sınırsız esneklik ve konfora erişim sağlıyoruz, böylece yolculuklarınız daha keyifli ve sorunsuz oluyor.</p>
            </div>
            <div className="col-md-4">
                <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                    <div className="col-12">
                        <p className="btn btn-primary m-0">E-posta Gönder<a href="mailto:kalkanorhan51@gmail.com"></a></p>

                    </div>

                    <div className="form-text mt-2">kalkanorhan51@gmail.com

                    </div>
                    <address>
                        Nar Mahallesi<br />
                        76 Sokak<br />
                        No: 39<br />
                        Niğde Merkez<br />
                        Türkiye
                    </address>
                </form>
            </div>
        </div>
    )
}
