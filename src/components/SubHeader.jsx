import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

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

  {/* SEARCH AND FILTER */}
    
</div>
 <div className="mx-auto flex max-w-6xl flex-col mb-5 gap-4 rounded-2xl border border-gray-200 bg-white px-1 py-5 shadow-sm md:flex-row md:items-center lg:px-20">

  {/* Search */}
  <div className="flex-1">
    <SearchBar />
  </div>

  {/* Divider (desktop only) */}
  <div className="hidden h-10 w-px bg-gray-200 md:block"></div>

  {/* Category */}
  <div className="w-full md:w-64">
    <CategoryFilter />
  </div>

</div>
        </>
    )
}

export default SubHeader;