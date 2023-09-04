import Link from "next/link";

export default function AllCars() {
    return (
        <div className="row">
            <h5 className="mb-2 text-white">Tüm Araçlar</h5>
            <ul className="list-inline text-primary-hover lh-lg">
                <li className="list-inline-item"><Link href="#">Toyota</Link></li>
                <li className="list-inline-item"><Link href="#">Ford</Link></li>
                <li className="list-inline-item"><Link href="#">Volkswagen (VW)</Link></li>
                <li className="list-inline-item"><Link href="#">General Motors (GM)</Link></li>
                <li className="list-inline-item"><Link href="#">Honda</Link></li>
                <li className="list-inline-item"><Link href="#">BMW</Link></li>
                <li className="list-inline-item"><Link href="#">Mercedes-Benz</Link></li>
                <li className="list-inline-item"><Link href="#">Nissan</Link></li>
                <li className="list-inline-item"><Link href="#">Hyundai</Link></li>
                <li className="list-inline-item"><Link href="#">Kia</Link></li>
                <li className="list-inline-item"><Link href="#">Tesla</Link></li>
                <li className="list-inline-item"><Link href="#">Subaru</Link></li>
                <li className="list-inline-item"><Link href="#">Mazda</Link></li>
                <li className="list-inline-item"><Link href="#">Fiat Chrysler Automobiles (FCA)</Link></li>
                <li className="list-inline-item"><Link href="#">Volvo</Link></li>
                <li className="list-inline-item"><Link href="#">Lexus</Link></li>
                <li className="list-inline-item"><Link href="#">Porsche</Link></li>
                <li className="list-inline-item"><Link href="#">Jaguar Land Rover</Link></li>
                <li className="list-inline-item"><Link href="#">Mitsubishi</Link></li>
            </ul>
        </div>
    )
}
