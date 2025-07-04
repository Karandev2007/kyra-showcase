export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-900/20">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-gray-300">
            <p>Last updated: July 5, 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
              <p>
                We prioritize your privacy. KyraDock A3 collects only the minimal data necessary to provide its features effectively. We may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Basic user identifiers (e.g., name, email address) if you opt into certain features</li>
                <li>Device data such as OS version and hardware ID for performance optimization</li>
                <li>Usage logs and voice commands (locally or optionally with cloud services)</li>
                <li>Custom configurations (e.g., smart modules, preferences)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
              <p>
                We use your information solely to deliver and improve the KyraDock experience. Specifically, we use data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enable core system functionality and voice control</li>
                <li>Optimize user experience across devices</li>
                <li>Store your preferences for personalization</li>
                <li>Send optional updates or alerts (only if subscribed)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
              <p>
                Your data security is a top priority. We apply encryption, secure access controls, and local-only storage
                for most features. Remote data transmission occurs only when necessary and is always encrypted.
              </p>
              <p>
                We do not sell or share your personal data with third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Third-Party Integrations</h2>
              <p>
                KyraDock A3 may optionally connect with third-party services (e.g., AI APIs, smart home platforms). When you
                use such integrations, your data may be handled by those providers based on their own privacy policies.
              </p>
              <p>
                We recommend reviewing those policies before enabling any external features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Your Rights & Choices</h2>
              <p>
                You are in full control of your data. You may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of stored information</li>
                <li>Withdraw consent from optional data collection or third-party features</li>
              </ul>
              <p>
                To exercise these rights, contact us directly via our support or website channels.
              </p>
            </section>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-xl" />
      </div>
    </div>
  );
}
