import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TiMail } from "react-icons/ti";

export default function ContactSection() {
  return (
    <section className="bg-violet3 text-white" id="contacts">
      <div className="py-20 md:py-20 md:max-w-screen-lg mx-auto px-8">
        <h1 className="section-header mb-16">Contact Me.</h1>
        <div className="flex justify-center">
          <div>
            <ul>
              <li>
                <span className="flex items-center justify-start gap-2 hover:scale-110 origin-[0%_50%] text-[16px] md:text-[20px] mb-2">
                  <TiMail className="h-[30px] w-[30px]" />
                  E-mail: kukurua.tuni@gmail.com
                </span>
              </li>
              <li>
                <a
                  href={`https://t.me/bequine`}
                  className="flex items-center justify-start gap-2 hover:scale-110 origin-[0%_50%] text-[16px] md:text-[20px]  mb-2"
                >
                  <Image
                    src="/img/icons/social-media/telegram.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  Telegram: @bequine
                </a>
              </li>
              <li>
                <Link
                  href={`https://wa.me/79629030141`}
                  className="flex items-center justify-start gap-2 hover:scale-110 origin-[0%_50%] text-[16px] md:text-[20px]"
                >
                  <Image
                    src="/img/icons/social-media/whatsapp.svg"
                    width={30}
                    height={30}
                    alt=""
                    className=""
                  />
                  WhatsApp: +7-962-903-01-41
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
