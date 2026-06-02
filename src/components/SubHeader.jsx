
const SubHeader = () => {

    return(
        <>
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-16 py-10 lg:grid-cols-3">

  {/* LEFT SIDE (CONTENT) */}
  <div className="lg:col-span-2">
    {/* Badge */}
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
      Built with React + JSON Server
    </div>

    {/* Title */}
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
      Product Catalogue
    </h1>

    {/* Subtitle */}
    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
      A modern e-commerce product listing built with React, powered by a mock REST API using JSON Server.
      Clean UI, responsive design, and scalable architecture.
    </p>

    {/* Tags */}
    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
      <span className="rounded-lg bg-gray-100 px-3 py-1">⚛️ React Frontend</span>
      <span className="rounded-lg bg-gray-100 px-3 py-1">🗄️ JSON Server API</span>
      <span className="rounded-lg bg-gray-100 px-3 py-1">🛒 E-commerce UI</span>
      <span className="rounded-lg bg-gray-100 px-3 py-1">📱 Fully Responsive</span>
    </div>

    {/* Divider */}
    <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  </div>

  {/* RIGHT SIDE (FILTER PANEL) */}


</div>
        </>
    )
}

export default SubHeader;