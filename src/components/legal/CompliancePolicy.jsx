import { policyLogo } from "@/assets";
import Image from "next/image";

export default function CompliancePolicy() {
  return (
    <div className=" pt-[70px] pb-[50px] leading-[32px] md:px-[50px] px-[37px] lg:px-[170px] text-darkPurple font-cairo text-justify text-lg capitalize ">
      <div>
        <h2 className=" mb-6 text-[35px] text-[#240046] font-barlow font-bold leading-[147.429%] w-full lg:w-[44.5%]">
          Terra Switch is PCI DSS Level 1 Certified
        </h2>
        <div className=" flex justify-between flex-wrap mb-6">
          <p className=" w-full lg:w-[44.5%]">
            At TerraSwitch, we uphold legal compliance as a cornerstone of our
            operations, proudly holding the PCI DSS Level 1 Certification, the
            highest level of security standard in the payment industry.{" "}
            <br></br>
            Our unwavering commitment to legal and regulatory standards is
            reflected in every facet of our payment switching and processing
            services<br></br>With a dedicated legal team rigorously ensuring
            adherence to global regulations, TerraSwitch provides a secure,
            reliable, and compliant platform, empowering clients to confidently
            manage their financial transactions with utmost trust and integrity.
          </p>
          <div>
            <Image src={policyLogo} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3 className=" text-[600] font-[600] text-[25px] leading-[198%] ">
          Privacy Policy
        </h3>
        <p>
          Terra Switching and Processing Company Limited (&apos;
          TerraSwitch&apos; , &apos;Company&apos; , &apos we&apos; ,
          &apos;us&apos; or &apos;our&apos; ) is committed to protecting the
          privacy of our customers, partners, and visitors to our website. This
          Privacy and Cookie Policy (&apos;Privacy Policy&apos; ) describes how
          we collect, use, store, share, and protect personal data from Data
          Subjects who engage with our services, including:
        </p>
        <ul className=" list-inside">
          <li>Website Visitors: Individuals who visit our website.</li>
          <li>
            Customers: Businesses and organizations that use our payment
            processing services.
          </li>
          <li>
            Partners: Third-party companies that we work with to provide our
            services.
          </li>
        </ul>

        <h4 className=" text-bold">Collection of Personal Data</h4>
        <p>
          We collect personal data from Data Subjects in a variety of ways,
          including:
        </p>
        <ul className=" list-inside">
          <li className=" ">
            Information You Provide Directly: We collect personal data that you
            provide to us directly, such as when you:
            <ul className=" list-inside px-7">
              <li>Create an account with us.</li>
              <li>Contact us for support.</li>
              <li>Submit a form on our website.</li>
              <li>Use our payment processing services</li>
            </ul>
          </li>
        </ul>
        <ul className=" list-inside">
          <li>
            Information Collected Automatically: We collect personal data about
            you automatically, such as:
            <ul className=" list-inside px-7">
              <li>Your IP address.</li>
              <li>Your device type and browser information..</li>
              <li>Your website usage information.</li>
              <li>
                Your location information (if you enable location services).
              </li>
            </ul>
          </li>
        </ul>

        <ul className=" list-inside">
          <li>
            Information from Third-Party Sources: We may collect personal data
            about you from third-party sources, such as:
            <ul className=" list-inside px-7">
              <li>Credit bureaus.</li>
              <li>Fraud prevention services.</li>
              <li>Publicly available sources..</li>
            </ul>
          </li>
        </ul>

        <h4 className=" text-bold">Use of Personal Data</h4>
        <p>We use personal data for a variety of purposes, including:</p>

        <ul className=" list-inside">
          <li>Providing and improving our services..</li>
          <li>Processing payments.</li>
          <li>Verifying your identity.</li>
          <li>Preventing fraud.</li>
          <li>Sending you marketing communications.</li>
          <li>Complying with laws and regulations.</li>
        </ul>
        <h4 className=" text-bold">Sharing of Personal Data</h4>
        <p>
          We may share personal data with third-party service providers, such
          as:
        </p>

        <ul className=" list-inside">
          <li>Payment processors.</li>
          <li>Fraud prevention services.</li>
          <li>Cloud service providers.</li>
        </ul>
        <p>
          We may also share personal data with government agencies or law
          enforcement officials if we are required to do so by law.
        </p>
        <h4 className=" text-bold">Data Retention</h4>
        <p>
          We retain personal data for as long as it is necessary to fulfill the
          purposes for which it was collected unless otherwise required by law.
        </p>
        <h4 className=" text-bold">Data Security</h4>
        <p>
          We use a variety of security measures to protect personal data from
          unauthorized access, use, disclosure, alteration, or destruction.
        </p>
        <h4 className=" text-bold">Your Choices</h4>
        <p>
          You have a number of choices regarding your personal data, including:
        </p>

        <ul className="list-inside">
          <li>Accessing your personal data..</li>
          <li>Correcting your personal data.</li>
          <li>Deleting your personal data.</li>
          <li>Opting out of marketing communications.</li>
        </ul>
        <h4 className=" text-bold">Changes to this Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. If we make any
          material changes, we will notify you by email or by posting a notice
          on our website.
        </p>
      </div>
    </div>
  );
}
