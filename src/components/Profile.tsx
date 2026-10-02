import Image from "next/image";

export type ProfileData = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileData) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative">
        {/* 아바타 뒤 핑크 글로우 */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-full bg-flamingo/30 blur-2xl"
        />
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          priority
          unoptimized
          className="relative h-32 w-32 rounded-full object-cover ring-2 ring-flamingo/70 ring-offset-4 ring-offset-ink sm:h-36 sm:w-36"
        />
      </div>

      <h1 className="mt-6 text-2xl font-bold tracking-tight text-ivory sm:text-3xl">
        {name}
      </h1>
      <p className="mt-2 text-sm text-ivory/60 sm:text-base">{bio}</p>

      {/* 골드 포인트 장식 */}
      <span
        aria-hidden="true"
        className="mt-5 h-px w-14 bg-gradient-to-r from-transparent via-gold/80 to-transparent"
      />
    </header>
  );
}
