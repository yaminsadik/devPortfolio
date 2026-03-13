import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "GapWalk Privacy Policy | Sadik Yamin",
  description:
    "Privacy Policy for GapWalk — a schedule-aware micro-walking app. Explains how Google Calendar data is accessed, used, and protected.",
};

const EFFECTIVE_DATE = "March 13, 2025";
const SUPPORT_EMAIL = "syam46484@gmail.com";

export default function GapWalkPrivacyPage() {
  return (
    <article className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/projects/gapwalk"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          GapWalk
        </Link>

        <header className="mt-6 sm:mt-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
            Effective Date: {EFFECTIVE_DATE} &nbsp;&middot;&nbsp; Last Updated:{" "}
            {EFFECTIVE_DATE}
          </p>
        </header>

        <Separator className="my-8 sm:my-10" />

        <div className="space-y-0">
          <p className="mb-4 leading-7 text-muted-foreground">
            This Privacy Policy explains how GapWalk (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
            protects your information when you use the GapWalk mobile
            application (&ldquo;the App&rdquo;). By using GapWalk, you agree to
            the practices described in this policy.
          </p>

          {/* Section 1 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            1. Information We Collect
          </h2>

          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            a. Google Account Information
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            When you sign in with Google, we receive your Google account email
            address and display name. This is used only to identify your account
            within the app and to display your name in the interface.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            b. Google Calendar Data
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            With your permission, GapWalk accesses your Google Calendar to read
            event start times, end times, and event status (confirmed, tentative,
            or cancelled). This data is used in real time to identify free gaps
            in your daily schedule. We do not read event titles, descriptions,
            attendee lists, video conferencing links, or any other event
            metadata.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            c. App Settings and Preferences
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            We store your in-app preferences locally on your device. These
            include your minimum gap duration, reminder lead time, and which
            Google Calendar you have chosen to monitor. This data is not
            transmitted to any server.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            d. Walk Session Data
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            If you start a timed walk session, the duration of that session may
            be stored locally on your device for display in the app. This data
            does not leave your device.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            e. Device and Diagnostic Information
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            We do not collect device identifiers, crash analytics, or usage
            telemetry in the current version of the app. If this changes in a
            future version, this policy will be updated before the change is
            deployed.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 2 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            2. How We Use Google Calendar Data
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk uses your Google Calendar data for one purpose only: to
            calculate free windows in your schedule where a short walk is
            possible.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            Specifically, the app queries your selected calendar for events
            occurring during the current day, computes the time gaps between
            those events, and presents a list of walking opportunities. This
            calculation happens entirely on your device. The raw calendar event
            data is held in application memory only for the duration of this
            calculation and is discarded immediately after.
          </p>
          <p className="mb-2 leading-7 text-muted-foreground font-semibold text-foreground">
            We do not:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-muted-foreground">
            <li className="leading-7">
              Store your calendar events on our servers or any external system
            </li>
            <li className="leading-7">
              Transmit your calendar data to any third party
            </li>
            <li className="leading-7">
              Read your event titles, descriptions, attendees, or any content
              beyond timing and status
            </li>
            <li className="leading-7">
              Use your calendar data for analytics, advertising, or any purpose
              other than gap detection
            </li>
          </ul>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk&apos;s use of information received from Google APIs adheres
            to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 3 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            3. Legal Basis for Processing
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk processes your Google Calendar data based on your explicit
            consent. When you connect your Google account, you are shown
            Google&apos;s OAuth consent screen that describes the specific access
            being requested. You may withdraw this consent at any time without
            affecting your ability to continue using the non-calendar features
            of the app.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 4 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            4. Data Storage and Retention
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            Calendar event data is <strong className="font-semibold text-foreground">not stored</strong>. It is fetched at
            runtime, used to compute gaps, and discarded. No calendar data is
            written to device storage or transmitted to any server.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            Your account preferences (stored locally on your device) are
            retained until you uninstall the app or manually clear the
            app&apos;s data.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            If you disconnect your Google account from GapWalk, the OAuth tokens
            used to access your calendar are revoked immediately and removed from
            device storage.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 5 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            5. Third-Party Services
          </h2>
          <h3 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-foreground">
            Google Calendar API (Google LLC)
          </h3>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk uses the Google Calendar API to read your calendar events.
            This integration is subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Google&apos;s Privacy Policy
            </a>
            . GapWalk&apos;s use of information received from Google APIs
            adheres to the Google API Services User Data Policy, including the
            Limited Use requirements.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk does not currently use advertising networks, crash reporting
            services, or analytics platforms that collect user data.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 6 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            6. User Rights and Choices
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            You have the following rights regarding your data:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
            <li className="leading-7">
              <strong className="font-semibold text-foreground">Access:</strong>{" "}
              You can view the account connected to GapWalk at any time from the
              Settings screen.
            </li>
            <li className="leading-7">
              <strong className="font-semibold text-foreground">
                Correction:
              </strong>{" "}
              If your account information is incorrect, update it through your
              Google account settings.
            </li>
            <li className="leading-7">
              <strong className="font-semibold text-foreground">
                Deletion:
              </strong>{" "}
              Uninstalling the app removes all locally stored preferences. Since
              we do not store calendar data, there is no calendar data to delete
              from our systems.
            </li>
            <li className="leading-7">
              <strong className="font-semibold text-foreground">
                Portability:
              </strong>{" "}
              All walk session data stored locally is accessible on your device.
              We do not hold additional data to export.
            </li>
            <li className="leading-7">
              <strong className="font-semibold text-foreground">
                Objection:
              </strong>{" "}
              You can stop calendar access at any time by disconnecting your
              account.
            </li>
          </ul>

          <Separator className="my-8 border-border/60" />

          {/* Section 7 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            7. Revoking Google Calendar Access
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            You can revoke GapWalk&apos;s access to your Google Calendar at any
            time through one of the following methods:
          </p>
          <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">
            <li className="leading-7">
              Open GapWalk, go to Settings, and tap &ldquo;Disconnect
              Calendar.&rdquo;
            </li>
            <li className="leading-7">
              Visit{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                myaccount.google.com/permissions
              </a>
              , find GapWalk in the list of connected apps, and select
              &ldquo;Remove access.&rdquo;
            </li>
          </ol>
          <p className="mb-4 leading-7 text-muted-foreground">
            Revoking access immediately terminates all calendar-related
            functions. The app will not attempt to re-request access until you
            explicitly tap &ldquo;Connect Calendar&rdquo; again.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 8 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            8. Security
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk uses Google&apos;s OAuth 2.0 protocol for authentication. We
            never see or store your Google account password. Access to your
            calendar is governed by a short-lived OAuth token that is stored in
            your device&apos;s secure storage.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            We take reasonable technical precautions to protect the data stored
            on your device. Because we do not operate servers that store your
            personal or calendar data, there is no server-side data at risk of
            breach from our systems.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 9 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            9. Children&apos;s Privacy
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            GapWalk is not directed at children under the age of 13. We do not
            knowingly collect personal information from children under 13. If you
            believe a child under 13 has connected a Google account through
            GapWalk, please contact us at the address below so we can take
            appropriate action.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 10 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            10. Changes to This Policy
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            We may update this Privacy Policy from time to time. When we do, we
            will update the &ldquo;Last Updated&rdquo; date at the top of this
            page. If the change is material, we will notify users through an
            in-app notice before the change takes effect.
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            Your continued use of the app after any changes constitutes your
            acceptance of the updated policy.
          </p>

          <Separator className="my-8 border-border/60" />

          {/* Section 11 */}
          <h2 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            11. Contact Information
          </h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            If you have questions about this Privacy Policy or how your data is
            handled, please contact us:
          </p>
          <p className="mb-4 leading-7 text-muted-foreground">
            <strong className="font-semibold text-foreground">Email:</strong>{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        <Separator className="my-8 sm:my-10" />

        <footer className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <Link
            href="/projects/gapwalk"
            className="transition-colors hover:text-foreground"
          >
            GapWalk
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link
            href="/projects/gapwalk/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <span aria-hidden="true">&middot;</span>
          <span>GapWalk is not affiliated with or endorsed by Google LLC.</span>
        </footer>
      </div>
    </article>
  );
}
