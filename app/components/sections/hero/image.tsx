"use client"

interface ProfileImageProps {
  src?: string
  alt?: string
  size?: number 
}

export default function ProfileImage({
  src = "/sid.png",
  alt = "Profile",
  size = 128, 
}: ProfileImageProps) {
  return (
    <div
      className="rounded-full bg-primary-light overflow-hidden flex items-center justify-center shadow-lg"
      style={{
        height: size,
        width: size,
      }}
    >
  <img
    src="/sid.png"
    alt="Profile"
    className="
      h-full w-full object-cover
      filter grayscale
      transition-transform duration-300 ease-in-out
      hover:scale-90
      translate-y-2
    "
  />
    </div>
  )
}
