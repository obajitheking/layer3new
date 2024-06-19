import CompanyPop from "./CompanyPop";


export const CompanyPopup = () => {
    return (
      <div className="flex flex-col items-start gap-3 max-w-[343px]">
        <CompanyPop
          title="About us"
          href="/about-us"
        />
        <CompanyPop
          title="Leadership"
          href="/about-us/#teams"
        />
          <CompanyPop
          title="Careers"
          href="/careers"
        />
          <CompanyPop
          title="Our Clients"
          href="/services/professional-services"
        />
          <CompanyPop
          title="News and Events"
          href="https://layer3.joseph.name.ng/news/"
        />
          <CompanyPop
          title="Blog"
          href="https://layer3.joseph.name.ng/blog/"
        />
      </div>
    );
  };