import LinkCard, { type LinkItem } from "@/components/LinkCard";
import Profile, { type ProfileData } from "@/components/Profile";

// TODO: 보여주기용 더미 데이터 — 실제 프로필/링크로 교체 예정
const profile: ProfileData = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/profile.svg",
};

const links: LinkItem[] = [
  { id: "github", label: "GitHub", href: "https://github.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { id: "blog", label: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-12 sm:py-16">
      <Profile {...profile} />

      <nav aria-label="링크 목록" className="mt-8 flex flex-col gap-4 sm:mt-10">
        {links.map(({ id, label, href }) => (
          <LinkCard key={id} label={label} href={href} />
        ))}
      </nav>
    </main>
  );
}
