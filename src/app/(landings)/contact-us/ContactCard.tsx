export interface IContactCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

function ContactCard({ icon, title, description, content }: IContactCardProps) {
  return (
    <div className="border-[#FFFFFF1A] min-h-[304px] border rounded py-10 px-6">
      <span className="mb-4 inline-block text-white">{icon}</span>
      <h4 className="text-white font-medium text-2xl">{title}</h4>
      <p className="text-white text-lg my-5 font-[300]">{description}</p>
      <div>{content}</div>
    </div>
  );
}

export default ContactCard;
