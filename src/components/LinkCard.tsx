export type LinkItem = {
  id: string;
  label: string;
  href: string;
  emoji: string;
};

type LinkCardProps = Omit<LinkItem, "id">;

export default function LinkCard({ label, href, emoji }: LinkCardProps) {
  // mailto: 는 새 탭으로 열면 빈 탭이 남아서 외부 링크일 때만 적용
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-ivory/10 bg-plum/70 px-5 py-4 text-center text-base font-medium text-ivory shadow-[inset_0_1px_0_rgba(255,244,248,0.07)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-flamingo/60 hover:bg-plum hover:shadow-[0_10px_28px_-10px_rgba(241,70,160,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flamingo active:translate-y-0"
    >
      <span
        aria-hidden="true"
        className="text-lg transition-transform duration-200 group-hover:scale-110"
      >
        {emoji}
      </span>
      {label}
    </a>
  );
}
