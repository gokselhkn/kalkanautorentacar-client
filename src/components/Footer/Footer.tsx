import FooterCopyright from "./FooterCopyright";
import AllCars from "./AllCars";
import Newsletter from "./Newsletter";

export default function Footer() {
    return (
        <footer className="bg-dark pt-5">
            <div className="container">
                <Newsletter />
                <hr />
                <AllCars />
            </div>
            <FooterCopyright />
        </footer>
    )
}
