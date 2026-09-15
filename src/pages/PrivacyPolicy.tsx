import BackToHome from '@/components/BackToHome'

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: '',
    body: `SMS Champion / UNION MARKETING REALTY INC. ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you provide when using our website, services, and communications.

This Privacy Policy explains what information we collect, how we use it, how we protect it, and how you can contact us regarding your information.`,
  },
  {
    heading: '1. Information We Collect',
    body: `We may collect personal information that you voluntarily provide to us, including:

Name
Email address
Phone number
Account registration information
Information you provide when contacting us or using our services
SMS subscription and consent information
Other information you voluntarily submit through our website

We may also automatically collect certain technical information when you use our website, such as IP address, browser type, device information, and information about how you interact with our website.`,
  },
  {
    heading: '2. How We Use Your Information',
    body: `We may use the information we collect to:

Create and manage your account
Provide and improve our services
Respond to questions and customer support requests
Send account-related and service-related communications
Send SMS/MMS messages when you have provided the required consent
Send promotional or marketing communications when you have separately opted in to receive them
Maintain the security and functionality of our website
Comply with applicable laws and legal requirements

We do not use your personal information for purposes that are incompatible with those described in this Privacy Policy without providing appropriate notice or obtaining consent where required by law.`,
  },
  {
    heading: '3. SMS and Mobile Communications',
    body: `If you provide your phone number and affirmatively opt in to receive SMS/MMS messages from us, we may use your phone number to send the types of messages described during the opt-in process.

SMS messages may include account-related communications, service information, customer communications, and, where separately consented to, promotional or marketing messages.

Message and data rates may apply. Message frequency may vary.

You can opt out of SMS communications at any time by replying STOP to a message from us. You may also reply HELP for assistance.

Your consent to receive marketing text messages is not a condition of purchasing any goods or services.

We maintain records of SMS consent and opt-out requests as necessary to administer our messaging program and comply with applicable requirements.`,
  },
  {
    heading: '4. SMS Consent and Mobile Information',
    body: `We collect and process mobile phone numbers and SMS consent information for the purposes described in this Privacy Policy and our SMS/MMS Mobile Message Marketing Program Terms and Conditions.

We do not sell or share your mobile phone number or SMS consent information with third parties for their own promotional or marketing purposes.

Where necessary to provide our services or operate our messaging program, information may be shared with service providers that process information on our behalf, such as technology, communications, hosting, or messaging service providers. These providers may use the information only to provide services to us and as permitted by applicable law.`,
  },
  {
    heading: '5. Information Sharing',
    body: `We may share personal information with:

Service providers that help us operate our website and services
Messaging and communications providers that send SMS/MMS messages on our behalf
Hosting, technology, analytics, and customer-support providers
Professional advisers where reasonably necessary
Government authorities or other parties when required by law

We do not sell personal information for monetary consideration.

We do not share mobile phone numbers or SMS consent information with third parties for their own marketing or promotional purposes.`,
  },
  {
    heading: '6. Data Security',
    body: `We use reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, or destruction.

However, no method of transmitting or storing information online can be guaranteed to be completely secure.`,
  },
  {
    heading: '7. Data Retention',
    body: `We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing our services, maintaining business records, resolving disputes, enforcing agreements, and complying with legal obligations.

SMS consent and opt-out records may be retained as necessary to demonstrate compliance with applicable messaging requirements.`,
  },
  {
    heading: '8. Your Choices',
    body: `You may choose not to provide certain personal information. However, some information may be necessary to create an account or use particular features of our services.

For SMS communications, you may opt out at any time by replying STOP to the SMS message.

For assistance with SMS communications, reply HELP or contact us using the information below.`,
  },
  {
    heading: '9. Third-Party Services and Links',
    body: `Our website may contain links to websites or services operated by third parties. We are not responsible for the privacy practices of those third parties.

We encourage you to review the privacy policies of third-party websites and services before providing them with personal information.`,
  },
  {
    heading: "10. Children's Privacy",
    body: `Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.

If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete that information.`,
  },
  {
    heading: '11. Changes to This Privacy Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes to our services, legal requirements, or privacy practices.

When we make changes, we will update the Last Updated date at the top of this page. Your continued use of our website after an updated Privacy Policy is posted constitutes acceptance of the updated policy to the extent permitted by applicable law.`,
  },
  {
    heading: '12. Contact Us',
    body: `If you have questions about this Privacy Policy, your personal information, or our SMS communications, please contact us.

UNION MARKETING REALTY INC.`,
  },
]

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <BackToHome />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1
          className="text-2xl md:text-3xl font-normal mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: September 15, 2026</p>
        <div className="h-px w-12 bg-(--color-primary) mb-10" />

        {SECTIONS.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading && (
              <h2 className="text-sm tracking-[0.1em] uppercase font-semibold mb-2">
                {section.heading}
              </h2>
            )}
            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrivacyPolicy
