const BoxCard = (children, title = "Title Default") => {
  return (
    <div>
      <div className="text-3xl sm:text-[60px]">{title}</div>
      {children}
    </div>
  );
};

export default BoxCard;
