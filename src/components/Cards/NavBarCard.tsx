import Image from 'next/image'
import Link from 'next/link';

interface NavBarCardProps {
    src: string;
    title: string;
    authorName: string;
    authorPage: string;
    postPage: string;
    time: string;
}

export default function NavBarCard(props: NavBarCardProps) {
    const { src, title, authorName, authorPage, postPage, time } = props
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card bg-transparent">
                <Image className="card-img rounded" width={1300} height={732} src={src} alt={title} />
                <div className="card-body px-0 pt-3">
                    <h6 className="card-title mb-0"><Link href={postPage} className="btn-link text-reset fw-bold">{title}</Link></h6>
                    <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                        <li className="nav-item">
                            <Link href={authorPage} className="text-reset btn-link">{authorName}</Link>
                        </li>
                        <li className="nav-item">{time}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
