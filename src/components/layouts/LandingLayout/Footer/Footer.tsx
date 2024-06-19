"use client";
import { footerItems } from "@/app/(landings)/common/data";
import { openNotification } from "@/common/utils";
import SubmitButton from "@/components/SubmitButton";
import { useSubmitNewsletterFormMutation } from "@/redux/services/forms.api";
import LinkedIn from "@assets/icons/linkedin.svg";
import XP from "@assets/icons/x.svg";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  const [submit, { isLoading }] = useSubmitNewsletterFormMutation();
  const handleFormSubmission = async (
    { email }: { email: string },
    formikBag: FormikHelpers<{ email: string }>
  ) => {
    try {
      if (!email) {
        openNotification({ type: "error", message: "Email is required" });
        return;
      }
      await submit({ email }).unwrap();
      formikBag.resetForm({ values: { email: "" } });
      openNotification({ type: "success", message: "Thanks for subscribing" });
    } catch (error) {}
  };
  return (
    <footer className="bg-black text-white py-10">
      <div className="container">
        <div className="py-10 px-5 lg:px-0 flex justify-between flex-col-reverse lg:flex-row">
          <div className="footer max-w-[623px]">
            {Object.entries(footerItems).map(([key, items]) => (
              <nav key={key} className="space-y-5 gap-0">
                <h6
                  data-aos="flip-up"
                  style={{textTransform:'none'}}
                  className="footer-title text-white opacity-100 text-base mb-0"
                >
                  {key}
                </h6>
                {items.map((item, index) => (
                  <Link
                    data-aos="flip-down"
                    href={item.link}
                    key={index}
                    className="link link-hover text-white text-opacity-60"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
          <Formik onSubmit={handleFormSubmission} initialValues={{ email: "" }}>
            <Form className="w-full max-w-[375px] mb-4 lg:mb-0">
              <h6
                data-aos="flip-down"
                className="footer-title text-base text-white opacity-100"
              >
                Newsletter
              </h6>
              <p
                data-aos="flip-down"
                className="text-sm text-white text-opacity-80"
              >
                Sign up for our newsletter to receive exclusive offers and
                updates.
              </p>

              <fieldset className="form-control w-full mt-6">
                <label data-aos="flip-down" className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <div data-aos="flip-down" className="mb-5">
                  <Field
                    disabled={isLoading}
                    name="email"
                    type="email"
                    required
                    placeholder="username@site.com"
                    className="input border h-[50px] placeholder:text-sm border-[#FFFFFF66] join-item bg-transparent rounded-[10px] w-full"
                  />
                </div>
                <SubmitButton data-aos="fade" className="!btn !btn-outline w-full max-w-[227px] rounded-xl text-white border-[#F3F4F299]">
                  Subscribe
                </SubmitButton>
              </fieldset>
            </Form>
          </Formik>
        </div>
        <div className="flex flex-col  space-y-4 sm:sapce-y-0 sm:flex-row justify-between items-center text-sm font-[300] text-[#FFFFFFB2] px-10 py-[46px] border-t border-[#FFFFFF29]">
          <aside className="items-center grid-flow-col text-center sm:text-left">
            <p>©{new Date().getFullYear()} Layer3. All rights reserved.</p>
          </aside>

          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link target="_blank" href="https://twitter.com/Layer3NIGERIA">
                <XP />
              </Link>
              <Link href="https://www.facebook.com/layer3nigeria/">
                <BsFacebook className="h-8 w-8" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/layer3_2"
              >
                <LinkedIn />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
