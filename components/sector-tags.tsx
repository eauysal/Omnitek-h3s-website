// Sektör etiketleri (pill): sektör sayfası hero'sunda ve ana sayfadaki sektör kartlarında aynı bileşen kullanılır.
// Her etiket ayrı bir <li>; sondaki boşluk düz metin çıkarımında etiketlerin birbirine yapışmasını önler.
const sizes = {
  sm: "text-xs px-2.5 py-1",
  md: "text-sm px-3 py-1.5 font-medium",
}

export function SectorTags({
  tags,
  size = "sm",
  className = "",
}: {
  tags: string[]
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className={`bg-primary/10 text-primary rounded-full ${sizes[size]}`}>
          {tag}{" "}
        </li>
      ))}
    </ul>
  )
}
