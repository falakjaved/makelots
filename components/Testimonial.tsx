interface TestimonialProps {
  name: string;
  role: string;
  message: string;
}

export default function Testimonial({ name, role, message }: TestimonialProps) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <p className="italic">&quot;{message}&quot;</p>
      <h4 className="font-bold mt-2">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  )
}
