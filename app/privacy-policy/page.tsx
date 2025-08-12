import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#030303] text-white/80">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-semibold text-white">
              <span className="text-white">Nexora Hub</span>
            </div>
          </Link>
          <nav>
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Privacy Policy
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our Privacy Policy for Trevomedia.online
            </p>
          </div>

          {/* Privacy Policy Section */}
          <section className="space-y-6 bg-white/[0.03] p-8 rounded-xl border border-white/10">
            <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>

            <div className="space-y-6 text-white/70">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  1. Introduction
                </h3>
                <p>
                  Welcome to Trevomedia.online. We respect your privacy and are
                  committed to protecting your personal data. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  2. Information We Collect
                </h3>
                <p>
                  We may collect personal identification information, including
                  but not limited to your name, email address, phone number, and
                  business information when you voluntarily submit such
                  information to us through contact forms, email, or other means
                  of communication.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  3. How We Use Your Information
                </h3>
                <p>We may use the information we collect from you to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our services</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you about our services, updates, and other
                    information
                  </li>
                  <li>Process transactions and send related information</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  4. Cookies and Tracking Technologies
                </h3>
                <p>
                  We may use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. Cookies
                  are files with a small amount of data which may include an
                  anonymous unique identifier. You can instruct your browser to
                  refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  5. Third-Party Services
                </h3>
                <p>
                  We may employ third-party companies and individuals to
                  facilitate our services, provide services on our behalf,
                  perform service-related tasks, or assist us in analyzing how
                  our services are used. These third parties have access to your
                  personal information only to perform these tasks on our behalf
                  and are obligated not to disclose or use it for any other
                  purpose.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  6. Data Security
                </h3>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information. However, please
                  be aware that no method of transmission over the internet or
                  method of electronic storage is 100% secure, and we cannot
                  guarantee its absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  7. Contact Information
                </h3>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:{" "}
                  <a
                    href="mailto:sanazaman267@gmail.com"
                    className="text-indigo-300 hover:underline"
                  >
                    trevomediasup@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          </div>
          </main>

    </div>
  );
}
