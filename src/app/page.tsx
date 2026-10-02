import LinkCard, { type LinkItem } from "@/components/LinkCard";
import Profile, { type ProfileData } from "@/components/Profile";

const profile: ProfileData = {
  name: "박수민",
  bio: "풀스택 개발자: AI 공부 중",
  avatarUrl: "/profile.svg",
};

const links: LinkItem[] = [
  {
    id: "github",
    label: "깃허브",
    href: "https://github.com/sumin1226",
    emoji: "📀",
  },
  {
    id: "blog",
    label: "블로그",
    href: "https://blog.naver.com/jjkh34777",
    emoji: "📟",
  },
  {
    id: "email",
    label: "이메일",
    href: "mailto:parksumin0126@gmail.com",
    emoji: "📨",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-12 sm:py-16">
      <Profile {...profile} />

      <nav aria-label="링크 목록" className="mt-8 flex flex-col gap-4 sm:mt-10">
        {links.map(({ id, label, href, emoji }) => (
          <LinkCard key={id} label={label} href={href} emoji={emoji} />
        ))}
      </nav>
    </main>
  );
}
