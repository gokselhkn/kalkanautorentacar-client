'use client'

import Link from "next/link"
import { ChangeEvent } from "react"

export default function SearchRegisterOffCanvasControl() {
    function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        // TODO: will add search capabilities
    }
    return (
        <div className="nav flex-nowrap align-items-center">
            <div className="nav-item d-none d-md-block">
                <Link href="/become" className="btn btn-sm btn-danger mb-0 mx-2">Become Editor!</Link>
            </div>
            <div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
                <Link className="nav-link dropdown-toggle" role="button" href="" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-search fs-4"> </i>
                </Link>
                <div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
                    <form className="input-group">
                        <input className="form-control border-success" onChange={handleSearchInputChange} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success m-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="nav-item">
                <Link className="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                    <i className="bi bi-text-right rtl-flip fs-2" data-bs-target="#offcanvasMenu"> </i>
                </Link>
            </div>
        </div>
    )
}
