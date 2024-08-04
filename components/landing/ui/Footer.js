import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
// import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="not-prose border-t text-white bg-primary">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/" className="inline-block w-max">
              <h3 className="sr-only">Dudes Get Dates</h3>
              {/* <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image> */}
              LOGO
            </Link>
            <p>
              <Balancer>
                Dudes Get Dates will save you time by putting your texting game on
                autopilot. Text less date more!
              </Balancer>
            </p>
            {/* <div className="mb-6 flex flex-col gap-4 text-sm underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div> */}
            <p className="">
              ©{" "}
              <a href="https://dudesgetdates.com">Dudes Get Dates</a>.
              All rights reserved. {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
