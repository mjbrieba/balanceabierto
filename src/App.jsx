export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BalanceAbierto.com</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#empresas" className="hover:underline">Empresas</a>
            <a href="#analisis" className="hover:underline">Análisis</a>
            <a href="#aprende" className="hover:underline">Aprende</a>
            <a href="#contribuye" className="hover:underline">Contribuye</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Transparencia Financiera para Todos</h2>
          <p className="text-lg text-gray-700 mb-6">Accede, entiende y compara balances financieros de grandes empresas en Chile y el mundo.</p>
          <a href="#explorar" className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800">Explora los datos</a>
        </div>
      </section>

      <section id="empresas" className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">Empresas Destacadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-4">
            <h4 className="font-semibold text-lg">Falabella</h4>
            <p className="text-sm text-gray-600">Último balance: Q1 2025</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h4 className="font-semibold text-lg">Codelco</h4>
            <p className="text-sm text-gray-600">Último balance: Año 2024</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h4 className="font-semibold text-lg">Tesla</h4>
            <p className="text-sm text-gray-600">Último balance: Q2 2025</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">¿Quieres entender cómo leer un balance?</h3>
        <p className="text-gray-700 mb-6">Accede a recursos gratuitos para aprender contabilidad básica y análisis financiero.</p>
        <a href="#aprende" className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800">Ir a la sección educativa</a>
      </section>

      <footer className="bg-gray-900 text-white p-6 text-sm mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <p>&copy; 2025 BalanceAbierto.com</p>
          <div className="space-x-4">
            <a href="#politica" className="hover:underline">Política de Privacidad</a>
            <a href="#terminos" className="hover:underline">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
