import Link from "next/link";

interface CarProps {
    src: string,
    alt: string,
    title: string,
    desc: string
}

export default function Card(props: CarProps) {
    const { src, alt, title, desc } = props
    return (
        <div className="card">
            <div className="position-relative">
                <img className="card-img" src={src} alt={alt} />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">

                </div>
            </div>
            <div className="card-body px-0 pt-3">
                <h4 className="card-title"><Link href="/" className="btn-link text-reset fw-bold">{title}</Link></h4>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    )
}
