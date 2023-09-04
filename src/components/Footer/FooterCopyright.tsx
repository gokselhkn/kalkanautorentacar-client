import Link from "next/link"

export default function FooterCopyright() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="bg-dark-overlay-3 mt-5">
            <div className="container">
                <div className="row align-items-center justify-content-md-between py-4">
                    <div className="col-md-6">
                        <div className="text-center text-md-start text-primary-hover text-muted">©{year} <Link href="/" className="text-reset btn-link">kalkanautorentacar</Link>. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
