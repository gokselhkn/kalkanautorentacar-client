
export default function CardImageOverlay() {
    return (
        <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{ backgroundImage: 'url(bg-card.png)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 ">
                    <h4 className="text-white">Araç filomuz geniş bir yelpazede lüks ve ekonomik seçenekler sunar. Bakımlı, temiz ve güvenli araçlarımızla sizi en iyi sürüş deneyimiyle buluşturuyoruz.</h4>
                </div>
            </div>
        </div>
    )
}
