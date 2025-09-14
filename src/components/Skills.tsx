export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">
          Skills
        </h2>
         <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center m-8 " 
>A versatile blend of programming, AI, and professional skills, bridging technology with problem-solving and creativity.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Programming & Development */}
          <div className="shadow-md rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Programming & Development
            </h3>
            <p>
              <span className="font-medium">Languages:</span> Python, Java, C,
              JavaScript, HTML5, CSS, MySQL, LaTeX
            </p>
            <p>
              <span className="font-medium">Core Concepts:</span> OOP,
              Competitive Programming, Debugging, File Management, Problem
              Solving, Problem Analysis
            </p>
          </div>

          {/* AI & Emerging Tech */}
          <div className="shadow-md rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              AI & Emerging Tech
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>AI & Machine Learning (Python)</li>
              <li>Generative AI & LLMs</li>
              <li>Prompt Engineering</li>
              <li>AI Data Annotation & Data Classification</li>
              <li>Responsible AI (Google Cloud Certified)</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="shadow-md rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Tools & Platforms
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Git, GitHub, Microsoft Office</li>
              <li>Video Editing Tools</li>
              <li>Social Media Marketing Platforms</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="shadow-md rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Soft Skills & Professional Development
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Leadership Development & Team Management</li>
              <li>Effective Communication & Presentation</li>
              <li>Decision-Making & Team Collaboration</li>
              <li>Interpersonal Skills & Marketing Awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
