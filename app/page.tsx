import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-12">
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Empowering Small Businesses</h2>
        <p className="text-lg">We help small businesses grow with professional websites.</p>
        <Link href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </Link>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">Website Development</h4>
            <p>Custom websites tailored to your business needs.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">SEO & Marketing</h4>
            <p>Grow your audience with effective strategies.</p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">Support & Maintenance</h4>
            <p>Reliable support to keep your website running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
