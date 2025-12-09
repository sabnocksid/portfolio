export default function ResponsiveLogo() {
  return (
    <div
      className="
        absolute 
        top-6 
        md:top-5
        left-1/2 transform -translate-x-1/2 
        md:left-10 md:transform-none
        z-10
        px-4      
      "
    >
      <img
        src="/sid.svg"
        alt="Logo"
        className="h-12 md:h-12 object-contain"
      />
    </div>
  );
}
