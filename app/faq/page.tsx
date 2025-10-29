export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide web development, SEO & marketing, and support & maintenance for small businesses."
    },
    {
      question: "How much does a website cost?",
      answer: "Our pricing is flexible depending on the complexity and features of your website."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide continuous support and maintenance packages."
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <h2 className="font-bold">{faq.question}</h2>
          <p className="mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}
