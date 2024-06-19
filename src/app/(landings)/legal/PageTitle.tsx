function PageTitle({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h1 className="text-[30px] font-normal leading-[62.5px] mb-4 text-brand-dark">
        {title}
      </h1>
      <p className="text-brand-dark text-opacity-40 text-xl font-[300]">
        {subtitle}
      </p>
    </div>
  );
}

export default PageTitle;
