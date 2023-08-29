import AdsWidget from "@/components/Ads/AdsWidget";
import Card from "@/components/Cards/Card";
import CardFeaturedImageOverlay from "@/components/Cards/CardFeaturedImageOverlay";
import CardImageOverlay from "@/components/Cards/CardImageOverlay";
import CardWithTitle from "@/components/Cards/CardWithTitle";
import RecentPostCard from "@/components/Cards/RecentPostCard";
import CategoryItem from "@/components/Categories/CategoryItem";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    <div>
      <section className="py-2">
        <Trending />
      </section>
      <section className="pt-4 pb-0 card-grid">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <CardFeaturedImageOverlay />
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <CardImageOverlay />
                </div>
                <div className="col-md-6">
                  <CardImageOverlay />
                </div>
                <div className="col-md-6">
                  <CardImageOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" data-sticky-container>
          <div className="row">
            <div className="col-lg-9">
              <div className="mb-4">
                <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>Today's top highlights</h2>
                <p>Latest breaking news, pictures, videos, and special reports</p>
              </div>
              <div className="row gy-4">
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-sm-6">
                  <Card />
                </div>
                <div className="col-12 text-center mt-5">
                  <button type="button" className="btn btn-primary-soft">Load more post
                    <i className="bi bi-arrow-down-circle ms-2 align-middle"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0">
              <div data-sticky data-margin-top="80" data-sticky-for="767">
                <div>
                  <h4 className="mt-4 mb-3">Trending topics</h4>
                  <CategoryItem />
                  <CategoryItem />
                  <CategoryItem />
                  <CategoryItem />
                  <CategoryItem />
                  <div className="text-center mt-3">
                    <a href="#" className="fw-bold text-body text-primary-hover"><u>View all categories</u></a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-12">
                    <h4 className="mt-4 mb-3">Recent post</h4>
                    <RecentPostCard />
                    <RecentPostCard />
                    <RecentPostCard />
                    <RecentPostCard />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12 my-4">
                    <AdsWidget />
                  </div>
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
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h2 className="m-0"><i className="bi bi-megaphone"></i> Sponsored news</h2>
                <a href="#" className="text-body small"><u>Content by: Bootstrap</u></a>
              </div>
              <div className="tiny-slider arrow-hover arrow-blur arrow-dark arrow-round">
                <div className="tiny-slider-inner"
                  data-autoplay="true"
                  data-hoverpause="true"
                  data-gutter="24"
                  data-arrow="true"
                  data-dots="false"
                  data-items-xl="4"
                  data-items-md="3"
                  data-items-sm="2"
                  data-items-xs="1">
                  <CardWithTitle />
                  <CardWithTitle />
                  <CardWithTitle />
                  <CardWithTitle />
                  <CardWithTitle />
                  <CardWithTitle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
}
