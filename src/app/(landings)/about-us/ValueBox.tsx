function ValueBox({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="value flex flex-col gap-4 flex-1 w-full md:max-w-[507px]">
      <div className="title flex flex-col gap-3">
        {icon}
        <h6 className="text-2xl font-medium leading-[30px] text-white">
          {title}
        </h6>
      </div>
      <p className="text-xl font-light leading-[25px] text-white">{children}</p>
    </div>
  );
}

export default ValueBox;
