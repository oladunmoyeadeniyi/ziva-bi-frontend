/**
 * ==============================================================
 * Ziva BI — Frontend Shell (Landing Page)
 * --------------------------------------------------------------
 * This is the very first visible screen when the frontend runs.
 * 
 * Later it will be replaced by:
 *  - Authentication (Login)
 *  - Tenant onboarding flow
 *  - Employee dashboard
 * 
 * For now, this page only acts as a visual confirmation that:
 *  - Next.js is working
 *  - Styling is working
 *  - The project runs successfully
 * ==============================================================
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold">Ziva BI</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Your intelligent, fully automated, multi-tenant business platform.
        </p>

        <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Frontend Operational</h2>
          <p className="mt-2 text-gray-700">
            This starter confirms your Next.js frontend is installed correctly.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          (More modules loading soon: Vendor Onboarding, AP, AR, HR, Tax Engine...)
        </p>
      </div>
    </div>
  );
}