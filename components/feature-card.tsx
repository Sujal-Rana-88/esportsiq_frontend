export function FeatureCard({
  title,
  subtitle,
  description,
  color,
}: {
  title: string
  subtitle: string
  description: string
  color: string
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
      <div className={`h-32 bg-gradient-to-r ${color}`} />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <h4 className="font-medium text-gray-300 mb-3">{subtitle}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}

