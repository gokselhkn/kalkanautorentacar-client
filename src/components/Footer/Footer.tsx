import FooterCopyright from "./FooterCopyright";
import HotTopics from "./HotTopics";
import Newsletter from "./Newsletter";
import Widgets from "./Widgets";

export default function Footer() {
    return (
        <footer className="bg-dark pt-5">
            <div className="container">
                <Newsletter />
                <hr />
                <Widgets />
                <HotTopics />
            </div>
            <FooterCopyright />
        </footer>
    )
}
