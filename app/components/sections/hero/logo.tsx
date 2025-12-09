export default function ResponsiveLogo() {
  return (
    <div
      className="
        w-16 md:w-22  
        h-auto 
        flex items-center
      "
    >
      <img
        src="/sid.svg"
        alt="Logo"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
