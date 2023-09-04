
export default function CardFeaturedImageOverlay() {
    return (
        <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{ backgroundImage: 'url(cars/3008.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                    <h2 className="text-white h1"><span className="text-reset">Hayalini Kurduğunuz Yolculuklar, Bizimle Gerçeğe Dönüşüyor.</span></h2>
                    <p className="text-white">Sizin İhtiyaçlarınıza Uygun Aracınız Bizde! En Geniş Araç Filosuyla, Konforlu ve Güvenilir Yolculukların Adresi </p>
                </div>
            </div>
        </div>
    )
}
