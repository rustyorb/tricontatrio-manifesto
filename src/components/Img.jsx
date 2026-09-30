/**
 * Image that fills its container. `fit="cover"` crops to fill the box,
 * `fit="contain"` shows the whole image inside it.
 */
export default function Img({ src, alt, fit = "cover", className = "" }) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
      />
    </span>
  );
}
