const actionPoints = [
  {
    title: "Develop Fleet Management Module",
    description: "Create a module where each car has a profile including registration, model, year, ...",
    category: "feature",
    priority: "HIGH",
    acceptance: "Profiles are accessible with registration, model, etc.; User can update car status..."
  },
  {
    title: "Implement Booking System",
    description: "Build a system for staff to check car availability by date range, etc.",
    category: "feature",
    priority: "HIGH",
    acceptance: "Booking system allows staff to check car availability, etc."
  },
  {
    title: "Design Customer Management Module",
    description: "Develop a CRM module that includes customer profiles, document uploads, etc.",
    category: "feature",
    priority: "MEDIUM",
    acceptance: "Customer profiles store name, contact information, etc."
  },
  {
    title: "Set Up Branch-Level Access Control",
    description: "Implement access control so each branch can see its own data, etc.",
    category: "feature",
    priority: "MEDIUM",
    acceptance: "Branch users can only access data specific to their branch."
  },
  {
    title: "Create Payment and Invoicing Module",
    description: "Record manual payments against bookings, generate invoices, etc.",
    category: "feature",
    priority: "MEDIUM",
    acceptance: "Payments can be recorded, invoices generated, etc."
  },
  {
    title: "Develop Handover and Return Checklist",
    description: "Create a mobile-friendly checklist for vehicle handover and return, etc.",
    category: "feature",
    priority: "HIGH",
    acceptance: "Checklist for handover and return via mobile, etc."
  },
  {
    title: "Build Public Booking Inquiry Form",
    description: "Design a booking inquiry form on the website, etc.",
    category: "feature",
    priority: "LOW",
    acceptance: "Public can access a booking inquiry form, etc."
  },
  {
    title: "Design Owner Dashboard and Reports",
    description: "Create a dashboard with widgets for daily operations, etc.",
    category: "ui",
    priority: "LOW",
    acceptance: "Dashboard displays daily widgets, analytics, etc."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen py-10 px-6 bg-white">
      <main className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-3 text-accent">Car Rental CRM</h1>
          <h2 className="text-lg text-center text-gray-600">DriveEase Rentals</h2>
        </header>
        <section className="grid gap-6">
          {actionPoints.map((point, index) => (
            <article key={index} className="shadow-lg rounded-lg p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-2xl font-medium text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-700 mb-4">{point.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  {point.category.toUpperCase()}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                  {point.priority}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{point.acceptance}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}