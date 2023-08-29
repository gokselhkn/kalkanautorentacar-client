export default function FontSizeChanger() {
    return (
        <div className="btn-group me-3" role="group" aria-label="font size changer">
            <input type="radio" className="btn-check" name="fntradio" id="font-sm" />
            <label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-sm">A-</label>

            <input type="radio" className="btn-check" name="fntradio" id="font-default" defaultChecked={true} />
            <label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-default">A</label>

            <input type="radio" className="btn-check" name="fntradio" id="font-lg" />
            <label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-lg">A+</label>
        </div>
    )
}
