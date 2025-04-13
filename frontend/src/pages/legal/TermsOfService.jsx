import React from 'react';
import { Container } from "@/components/ui/container";

const TermsOfService = () => {
  return (
    <div className="bg-background py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Terms of Service</h1>
          <p className="text-muted-foreground text-center mb-12">
            Last Updated: June 1, 2023
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to TAGHYEER Fitness. These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To access certain features of our Services, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself.
              </p>
              <p className="text-muted-foreground mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring that you exit from your account at the end of each session when accessing our Services on a shared computer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Membership Terms</h2>
              <p className="text-muted-foreground mb-4">
                TAGHYEER Fitness offers various membership plans with different features and pricing. By purchasing a membership, you agree to the following terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Membership fees are charged according to the plan you select</li>
                <li>Membership fees are non-refundable except as required by law or as specified in our refund policy</li>
                <li>We reserve the right to modify membership fees with notice to you</li>
                <li>Memberships automatically renew until cancelled by you</li>
                <li>Cancellation requests require a 30-day notice period</li>
                <li>Membership benefits are non-transferable and for personal use only</li>
              </ul>
              <p className="text-muted-foreground">
                For detailed information about our current membership plans, fees, and benefits, please visit our Memberships page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                By providing a payment method, you authorize us to charge the applicable membership fees to that payment method. If your payment method cannot be charged for any reason, we reserve the right to suspend or terminate your access to our Services.
              </p>
              <p className="text-muted-foreground">
                You are responsible for keeping your payment information up to date. If your payment method expires or changes, you must update your account information to avoid interruption of your membership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Facility Rules and Code of Conduct</h2>
              <p className="text-muted-foreground mb-4">
                When using our physical facilities, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Comply with all posted rules and staff instructions</li>
                <li>Use equipment properly and safely</li>
                <li>Respect the rights and comfort of other members</li>
                <li>Wear appropriate athletic attire and footwear</li>
                <li>Practice good hygiene and wipe down equipment after use</li>
                <li>Not engage in any illegal activities or behaviors that disrupt others</li>
                <li>Not bring prohibited items (weapons, alcohol, illegal substances) onto the premises</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to refuse service, terminate memberships, or remove individuals from our facilities for violations of these rules or for any behavior we deem inappropriate or dangerous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Health and Safety</h2>
              <p className="text-muted-foreground mb-4">
                You acknowledge that exercise and use of fitness facilities involve inherent risks. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Consulting with a physician before beginning any exercise program</li>
                <li>Disclosing any medical conditions that may affect your ability to exercise safely</li>
                <li>Exercising within your physical capabilities and limitations</li>
                <li>Using equipment properly and following safety guidelines</li>
                <li>Reporting any equipment malfunctions or safety concerns to staff immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-4">
                Our Services and their contents, features, and functionality are owned by TAGHYEER Fitness and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent, except for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Temporary storage of copies solely as necessary to view our Services</li>
                <li>Storage of files that are automatically cached by your browser for display enhancement</li>
                <li>Printing reasonable numbers of pages from our Services for personal, non-commercial use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by law, TAGHYEER Fitness shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
              </p>
              <p className="text-muted-foreground">
                In no event shall our total liability exceed the amount you have paid to us in the six months prior to the event giving rise to the liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless TAGHYEER Fitness, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-muted-foreground">Email: legal@taghyeerfitness.com</p>
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

export default TermsOfService;