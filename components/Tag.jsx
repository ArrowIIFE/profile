import Link from "next/link";
export default function Tag({ tag }) {
  return (
    <div className="inline-block">
      <Link href={`/tags/${tag}`}>
        <span className="text-emerald-600 pl-2">{tag}</span>
      </Link>
    </div>
  );
}
