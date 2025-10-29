export default function Contact() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea className="w-full p-2 border rounded" rows={5}></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  )
}
