"use client";

interface ProfileImageProps {
  src?: string;
  alt?: string;
}

export default function ProfileImage({
  src = "/sid.png",
  alt = "Profile",
}: ProfileImageProps) {
  return (
    <div
      className="
        rounded-md border-3 border-primary-medium md:rounded-full bg-primary-light overflow-hidden flex items-center justify-center shadow-lg
        w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          h-full w-full object-cover
          filter grayscale translate-y-1
          transition-all duration-300 ease-in-out
          hover:scale-95
        "
      />
    </div>
  );
}
