/* eslint-disable @next/next/no-img-element */
interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      // eslint-disable-next-line @next/next/no-img-element
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />}
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
