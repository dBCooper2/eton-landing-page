// app/page.js
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-white">Deck & Fencing Company</h1>
      <p className="text-lg md:text-2xl mt-4 text-white">Your trusted partner for all your deck and fencing needs</p>

      {/* Contact Section */}
      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Call Us Now!</h2>
        <p className="text-xl font-semibold text-gray-800 mt-2">(XXX) XXX-XXXX</p> {/* Placeholder for phone number */}
        <div className="mt-4 text-center max-w-lg">
          <p className="text-lg text-gray-800">
            We provide top-quality deck and fencing services with a commitment to excellence and customer satisfaction. Contact us today to transform your outdoor space.
          </p>
        </div>
      </section>

      {/* Image Cards */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 my-10">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-4">
          <div className="bg-gray-200 h-48 flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p> {/* Placeholder for future image */}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Deck Services</h3>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-4">
          <div className="bg-gray-200 h-48 flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p> {/* Placeholder for future image */}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Fencing Services</h3>
        </div>
      </section>
    </div>
  );
}
