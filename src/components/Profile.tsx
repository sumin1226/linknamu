import Image from "next/image";

export type ProfileData = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileData) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatarUrl}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        unoptimized
        className="h-32 w-32 rounded-full object-cover ring-1 ring-black/10 sm:h-36 sm:w-36 dark:ring-white/15"
      />
      <h1 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
        {name}
      </h1>
      <p className="mt-1.5 text-sm text-black/60 sm:text-base dark:text-white/60">
        {bio}
      </p>
    </header>
  );
}
