import React from 'react';
import { Container } from "@/components/ui/container";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>
          <p className="text-muted-foreground text-center mb-12">
            Last Updated: June 1, 2023
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At TAGHYEER Fitness, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or interact with our services.
              </p>
              <p className="text-muted-foreground">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Purchase a membership or product</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us with inquiries</li>
                <li>Participate in promotions or surveys</li>
                <li>Use our fitness tracking features</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name, email address, phone number, and billing address</li>
                <li>Payment information (credit card details, billing information)</li>
                <li>Date of birth, gender, and profile picture</li>
                <li>Health and fitness information (height, weight, fitness goals)</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you access our services, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device information (device type, operating system, browser type)</li>
                <li>IP address and location information</li>
                <li>Usage data (pages visited, time spent, click-through data)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Create and manage your account</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues, fraud, or illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Sharing Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with the following parties:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, data analysis, email delivery, hosting services)</li>
                <li><strong>Business Partners:</strong> Companies with whom we partner to offer joint promotional offers or related products and services</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or similar legal process</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li><strong>With Your Consent:</strong> In other ways described to you at the point of data collection or with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="text-muted-foreground mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
              <p className="text-muted-foreground">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of our services</li>
                <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our services</li>
                <li><strong>Functionality Cookies:</strong> Enable us to personalize content and remember your preferences</li>
                <li><strong>Targeting Cookies:</strong> Record your visit to our services, the pages you have visited, and the links you have followed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
              <p className="text-muted-foreground">
                Although we will do our best to protect your personal information, transmission of personal information to and from our services is at your own risk. You should only access our services within a secure environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following data protection rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification (to correct or update your personal information)</li>
                <li>The right to object (to the processing of your personal information)</li>
                <li>The right of restriction (to request that we restrict the processing of your personal information)</li>
                <li>The right to data portability (to receive a copy of your personal information in a structured, machine-readable format)</li>
                <li>The right to withdraw consent (where we rely on your consent to process your personal information)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise any of these rights, please contact us using the contact information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-muted-foreground">Email: privacy@taghyeerfitness.com</p>
                <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                <p className="text-muted-foreground">Address: 123 Fitness Street, Gym City, GC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;