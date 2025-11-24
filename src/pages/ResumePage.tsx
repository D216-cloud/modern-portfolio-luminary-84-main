const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto pt-8 pb-16">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Deepak Maheta's Resume
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View or download my resume below
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/deepak maheta/mahetadeepak_cv(1.0).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white px-4 py-2 rounded-lg transition-colors"
            >
              Open in New Tab
            </a>
            <a 
              href="/deepak maheta/mahetadeepak_cv(1.0).pdf" 
              download="mahetadeepak_cv(1.0).pdf"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-coral text-coral hover:bg-coral/10 px-4 py-2 rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe 
            src="/deepak maheta/mahetadeepak_cv(1.0).pdf" 
            className="w-full h-screen min-h-[800px]"
            title="Deepak Maheta's Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;