import Link from "next/link"

export default function LegalPage() {
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
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
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
            Terms of Service
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Terms of Service for Trevomedia.online
            </p>
          </div>



          {/* Terms of Service Section */}
          <section className="space-y-6 bg-white/[0.03] p-8 rounded-xl border border-white/10">
            <h2 className="text-3xl font-bold text-white">Terms of Service</h2>

            <div className="space-y-6 text-white/70">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h3>
                <p>
                  By accessing or using the services provided by Trevomedia.online, you agree to be bound by these Terms
                  of Service. If you do not agree to all the terms and conditions, you may not access or use our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Services</h3>
                <p>
                  Trevomedia.online offers services including website design, website development, SaaS design, SaaS
                  development, funnel design, and Figma design. The specific details, deliverables, and timelines for
                  each service will be outlined in a separate agreement or statement of work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Client Responsibilities</h3>
                <p>
                  Clients are responsible for providing necessary content, feedback, and approvals in a timely manner.
                  Delays in providing required materials may result in project delays. Clients are also responsible for
                  ensuring they have the necessary rights to all content provided to us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">4. Payment Terms</h3>
                <p>
                  Payment terms will be specified in the project agreement. Unless otherwise stated, we typically
                  require a deposit before beginning work, with the remaining balance due upon project completion. Late
                  payments may incur additional fees and result in work suspension.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5. Intellectual Property Rights</h3>
                <p>
                  Upon full payment, clients will receive rights to the final deliverables as specified in the project
                  agreement. Trevomedia.online retains the right to display and link to completed projects as part of
                  our portfolio unless otherwise agreed upon in writing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">6. Limitation of Liability</h3>
                <p>
                  Trevomedia.online shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of or inability to use our services. In no event shall our
                  liability exceed the amount paid by you for the services in question.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">7. Termination</h3>
                <p>
                  Either party may terminate the service agreement with written notice. If the client terminates the
                  agreement, they shall pay for all services rendered up to the termination date. If Trevomedia.online
                  terminates the agreement, we will provide a prorated refund for any prepaid services not rendered.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">8. Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which Trevomedia.online operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">9. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                  by updating the &quot;Last Updated&quot; date at the top of this page or by other means as determined by us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">10. Contact Information</h3>
                <p>
                  For any questions regarding these Terms of Service, please contact us at:{" "}
                  <a href="mailto:sanazaman267@gmail.com" className="text-indigo-300 hover:underline">
                    sanazaman267@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Trevomedia.online. All rights reserved.</p>
          <p className="mt-2">
            For inquiries, contact:{" "}
            <a href="mailto:sanazaman267@gmail.com" className="text-indigo-300 hover:underline">
              sanazaman267@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

