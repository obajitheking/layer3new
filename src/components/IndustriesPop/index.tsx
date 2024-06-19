import InpopupItem from "./InpopupItem";


export const IndustriesPopup = () => {
    return (
      <div className="flex flex-col items-start gap-3 max-w-[343px]">
        <InpopupItem
          title="Higher Education"
          href="/services/managed-services"
        />
        <InpopupItem
          title="Energy"
          href="/services/professional-services"
        />
          <InpopupItem
          title="Health Care"
          href="/services/professional-services"
        />
          <InpopupItem
          title="Service Providers"
          href="/services/professional-services"
        />
          <InpopupItem
          title="Financial institution"
          href="/services/professional-services"
        />
          <InpopupItem
          title="Public sector & NGO's"
          href="/services/professional-services"
        />
      </div>
    );
  };
  