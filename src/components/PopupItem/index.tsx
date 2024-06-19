import AccessIcon from "@assets/icons/popup/network.svg";
import CloudIcon from "@assets/icons/popup/upload.svg";
import NetworkIcon from "@assets/icons/popup/wifi.svg";
import SecuredIcon from "@assets/icons/popup/secured.svg";
import ManagedIcon from "@assets/icons/popup/managed.svg";
import ProfessionalIcon from "@assets/icons/popup/professional.svg";
import Image from "next/image";
import PopupItem from "./PopupItem";
import { Col, Row } from "antd";

export const SolutionPopup = () => {
  return (
    <div className="flex items-center gap-3">
      <Row
        gutter={[16, 16]}
        className="flex flex-wrap items-center max-w-[686px]"
      >
        <Col xs={24} md={12}>
          <PopupItem
            title="Network Solutions"
            description="Build a robust network infrastructure with Layer3's solutions. Trust us for smart AI networks and comprehensive security."
            icon={<NetworkIcon />}
            href="/solutions/network"
          />
        </Col>
        <Col xs={24} md={12}>
          <PopupItem
            title="Cybersecurity Solutions"
            description="Protect your digital assets with Layer3's Cybersecurity Solutions. Stay ahead of evolving threats for peace of mind."
            icon={<CloudIcon />}
            href="/solutions/cybersecurity"
          />
        </Col>
        <Col xs={24} md={12}>
          <PopupItem
            title="Cloud Solutions"
            description="Elevate your business with Layer3's Cloud Solutions. Experience flexibility, security, and reliability for seamless growth."
            icon={<SecuredIcon />}
            href="/solutions/cloud"
          />
        </Col>
        <Col xs={24} md={12}>
          <PopupItem
            title="Access Solutions"
            description="Enjoy seamless connectivity with Layer3's Access Solutions. Benefit from high-speed internet tailored to your needs."
            icon={<AccessIcon />}
            href="/solutions/access"
          />
        </Col>
      </Row>
      <div className="relative">
        <Image width={156} height={216} src="/img/vr.png" alt="image" />
      </div>
    </div>
  );
};

export const ServicesPopup = () => {
  return (
    <div className="flex flex-col items-center gap-3 max-w-[343px]">
      <PopupItem
        title="Managed Services"
        description="Simplify IT management with Layer3's Managed Services. Focus on core activities while we handle complexities."
        icon={<ManagedIcon />}
        href="/services/managed-services"
      />
      <PopupItem
        title="Professional Services"
        description="Gain strategic insights with Layer3's Professional Services. Drive innovation and maximize value with our expertise."
        icon={<ProfessionalIcon />}
        href="/services/professional-services"
      />
    </div>
  );
};


