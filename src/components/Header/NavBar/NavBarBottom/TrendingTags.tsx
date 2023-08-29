import Link from "next/link";
interface TrendingTagsProps {
    tags: Tag[]
}
interface Tag {
    name: string,
    url: string
}
function randomButtonClassSelector(): string {
    const list = ["btn-primary-soft", "btn-warning-soft", "btn-success-soft", "btn-danger-soft", "btn-info-soft"];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
export default function TrendingTags(props: TrendingTagsProps) {
    const { tags } = props
    return (
        <ul className="list-inline mt-3">
            <li className="list-inline-item">Trending tags:</li>
            {tags.map(tag => (<li key={tag.url} className="list-inline-item"><Link href={tag.url} className={`btn btn-sm ${randomButtonClassSelector()}`}>{tag.name}</Link></li>))}
        </ul>
    )
}
