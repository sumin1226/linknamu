export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

type LinkCardProps = Omit<LinkItem, "id">;

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-center text-base font-medium transition hover:-translate-y-0.5 hover:bg-black/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current active:translate-y-0 dark:border-white/15 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
    >
      {label}
    </a>
  );
}
