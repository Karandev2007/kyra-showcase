export default function TermsPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-900/20">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
  
            <div className="space-y-6 text-gray-300">
              <p>Last updated: July 5, 2025</p>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                <p>
                  Welcome to KyraDock A3. By accessing or using our product, services, or software, you agree to be bound by these Terms and Conditions.
                  Please read them carefully. If you do not agree, you may not use KyraDock.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">2. Use of Service</h2>
                <p>
                  KyraDock is built for personal, developer, and research-based usage. You agree to use KyraDock only for lawful purposes and in a way
                  that does not infringe on the rights of others or restrict anyone else's use.
                </p>
                <p>
                  Misuse of services such as unauthorized remote control, code injection, or tampering with protected APIs is strictly prohibited.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">3. Privacy</h2>
                <p>
                  We value your privacy. KyraDock is designed with a privacy-first approach and stores minimal user data. Our software avoids cloud
                  dependency where possible and only sends data externally when features require it (e.g., cloud-based AI).
                </p>
                <p>
                  Please refer to our Privacy Policy for more information about data handling, local storage, and third-party APIs.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">4. Intellectual Property</h2>
                <p>
                  KyraDock, its UI, features, branding, and associated components are protected under copyright and intellectual property laws.
                  You may not reproduce, distribute, or modify any part of the system without written permission.
                </p>
                <p>
                  Any open-source modules used in KyraDock retain their original licenses and attributions.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">5. User Contributions</h2>
                <p>
                  You may add modules or extensions to KyraDock as long as they do not interfere with the core system or violate any terms.
                  We are not responsible for third-party code or external scripts you run.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">6. Warranties & Limitations</h2>
                <p>
                  KyraDock is provided “as-is” without warranties of any kind. We make no guarantees regarding uptime, AI response accuracy,
                  or compatibility with third-party hardware.
                </p>
                <p>
                  We are not liable for any damages or data loss resulting from misuse or modification of the system.
                </p>
              </section>
  
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">7. Updates and Changes</h2>
                <p>
                  We may update these Terms from time to time. Continued use of KyraDock after any modifications implies your acceptance of the revised terms.
                  We recommend reviewing this page regularly.
                </p>
              </section>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-xl" />
        </div>
      </div>
    );
  }  