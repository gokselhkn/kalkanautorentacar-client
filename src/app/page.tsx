import Card from "@/components/Cards/Card";
import CardFeaturedImageOverlay from "@/components/Cards/CardFeaturedImageOverlay";
import CardImageOverlay from "@/components/Cards/CardImageOverlay";


export default function Home() {
  return (
    <div>
      <section className="pt-4 pb-0 card-grid">
        <div className="container">
          <div className="row g-4">
            <CardFeaturedImageOverlay />
            <h2 className="mt-4">
              <i className="bi bi-mic me-2">
              </i>Bizi Arayın
              (Telefon: <a href="tel:+905061488686">+90 (506) 148 86 86</a>.)
            </h2>
            <CardImageOverlay />

          </div>
        </div>
      </section>
      <section>
        <div className="container" data-sticky-container>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4">
                <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>Araçlarımız</h2>
                <p>Her Yolculuk İçin Bir Araç, Her Araç İçin Biz Varız!</p>
              </div>
              <div className="row gy-4">
                <div className="col-sm-6">
                  <Card src={"cars/kuga_3.png"} alt={"Kuga"} title={"Kuga, sürücülere konforlu ve güvenli bir sürüş deneyimi sunmayı amaçlar."} desc={"Ford Kuga, Ford'un kompakt SUV segmentindeki modelidir ve çeşitli pazarlarda farklı motor seçenekleri ve özelliklerle sunulmuştur."} />
                </div>
                <div className="col-sm-6">
                  <Card src={"cars/focus_3.png"} alt={"ford focus"} title={"Ford Focus, Ford'un kompakt sınıf otomobili olarak bilinir ve uzun bir geçmişe sahiptir."} desc={"Ford Focus, dikkat çekici bir tasarıma sahiptir ve genellikle modern ve şık bir görünüme sahiptir. İç mekan, genellikle ferah, ergonomik ve kullanıcı dostu bir tasarıma sahiptir."} />
                </div>
                <div className="col-sm-6">
                  <Card src={"cars/3008.jpg"} alt={"Peugeot 3008"} title={"Peugeot 3008, Fransız otomobil üreticisi Peugeot tarafından üretilen bir kompakt SUV modelidir."} desc={"Peugeot 3008, gelişmiş bilgi-eğlence sistemleri, sürücü destek teknolojileri ve güvenlik özellikleri sunar. Peugeot 3008, konforlu bir sürüş deneyimi sunmayı amaçlar."} />
                </div>
                <div className="col-sm-6">
                  <Card src={"cars/hyundai_i20.png"} alt={"Hyundai i20"} title={"Hyundai i20, Güney Koreli otomobil üreticisi Hyundai tarafından üretilen kompakt sınıf bir otomobil modelidir."} desc={"Hyundai i20, dünya genelinde popüler bir otomobil modelidir ve şehir içi kullanım, aile taşıma ve günlük sürüş ihtiyaçları için tercih edilir."} />
                </div>
                <div className="col-sm-6">
                  <Card src={"cars/honda_city.png"} alt={"Honda City"} title={"Honda City, Japon otomobil üreticisi Honda tarafından üretilen kompakt sedan otomobil modelidir ve dünya genelinde popülerdir."} desc={"Genellikle kompakt sedan bir otomobil olmasına rağmen, Honda City'nin bagaj hacmi rekabetçi olabilir. Honda City, güvenlik ve sürücü destek teknolojileri sunar."} />
                </div>
                <div className="col-sm-6">
                  <Card src={"cars/fiat_egea.png"} alt={"Kuga"} title={"Fiat Egea, İtalyan otomobil üreticisi Fiat tarafından üretilen bir kompakt otomobil modelidir."} desc={"Fiat Egea, genellikle şık ve sade bir tasarıma sahiptir. İç mekan, genellikle ferah ve kullanıcı dostu bir tasarıma sahiptir."} />
                </div>
                <div className="col-12 text-center mt-5">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="container">
        <div className="border-bottom border-primary border-2 opacity-1">
        </div>
      </div>

    </div>)
}
