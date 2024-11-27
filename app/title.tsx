type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <div className="title w-full text-5xl font-extrabold inline-grid fit-content">
      <span
        data-text={children}
        className="blur-xl bg-clip-text row-start-1 col-start-1"
      ></span>
      <h1 className="bg-clip-text row-start-1 col-start-1 w-fit">{children}</h1>
    </div>
  );
}