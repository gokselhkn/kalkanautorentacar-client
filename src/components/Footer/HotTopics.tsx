import Link from "next/link";

export default function HotTopics() {
    return (
        <div className="row">
            <h5 className="mb-2 text-white">Hot topics</h5>
            <ul className="list-inline text-primary-hover lh-lg">
                <li className="list-inline-item"><Link href="#">Covid-19</Link></li>
                <li className="list-inline-item"><Link href="#">Politics</Link></li>
                <li className="list-inline-item"><Link href="#">Entertainment</Link></li>
                <li className="list-inline-item"><Link href="#">Media</Link></li>
                <li className="list-inline-item"><Link href="#">Royalist</Link></li>
                <li className="list-inline-item"><Link href="#">World</Link></li>
                <li className="list-inline-item"><Link href="#">Half Full</Link></li>
                <li className="list-inline-item"><Link href="#">Scouted</Link></li>
                <li className="list-inline-item"><Link href="#">Travel</Link></li>
                <li className="list-inline-item"><Link href="#">Beast Inside</Link></li>
                <li className="list-inline-item"><Link href="#">Crossword</Link></li>
                <li className="list-inline-item"><Link href="#">Newsletters</Link></li>
                <li className="list-inline-item"><Link href="#">Podcasts</Link></li>
                <li className="list-inline-item"><Link href="#">Auction 2022</Link></li>
                <li className="list-inline-item"><Link href="#">Protests</Link></li>
                <li className="list-inline-item"><Link href="#">NewsCyber</Link></li>
                <li className="list-inline-item"><Link href="#">Education</Link></li>
                <li className="list-inline-item"><Link href="#">Sports</Link></li>
                <li className="list-inline-item"><Link href="#">Tech And Auto</Link></li>
                <li className="list-inline-item"><Link href="#">Opinion</Link></li>
                <li className="list-inline-item"><Link href="#">Share Market</Link></li>
            </ul>
        </div>
    )
}
