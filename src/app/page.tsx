export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold">
              <span className="text-orange-500">Camex</span>
              <span className="text-yellow-500">Go</span>
            </h1>
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
              <a href="#" className="hover:text-orange-500">Bosh sahifa</a>
              <a href="#" className="hover:text-orange-500">Katalog</a>
              <a href="#" className="hover:text-orange-500">Nasiya</a>
              <a href="#" className="hover:text-orange-500">Biz haqimizda</a>
            </nav>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600">
            +998 90 123 45 67
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Qurilish mollari uyingizgacha<br/>eng arzon kuryer bilan!
          </h2>
          <p className="text-xl mb-10">Sement, g'isht, profil, qum, shifer — hammasi bir joyda</p>
          <button className="bg-white text-orange-600 px-10 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 shadow-lg">
            Katalogga o'tish →
          </button>
        </div>
      </section>

      {/* Mahsulotlar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Eng ko'p sotiladiganlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Sement M400", "Qizil g'isht", "Profil quvur", "Shifer 8 to'lqinli", "Alyuminiy radiator", "Plitka yelim", "Qo'l arra", "Mikser 1400W"].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-2xl font-bold text-orange-600 mt-2">85 000 so'm</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600">
                  Savatga
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">Camex</span>
            <span className="text-yellow-500">Go</span>
          </h1>
          <p>© 2025 CamexGo. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </>
  );
}
