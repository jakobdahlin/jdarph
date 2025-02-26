import { Check, X } from "lucide-react"

export default function LicenseComparison() {
  const features = [
    { name: "Low-res images", standard: true, extended: true, exclusive: true },
    { name: "High-res images", standard: false, extended: true, exclusive: true },
    { name: "Websites", standard: true, extended: true, exclusive: true },
    { name: "Blogs", standard: true, extended: true, exclusive: true },
    { name: "Social Media", standard: true, extended: true, exclusive: true },
    { name: "Magazines", standard: false, extended: true, exclusive: true },
    { name: "Large-Scale Marketing", standard: false, extended: true, exclusive: true },
    { name: "Full Ownership Rights", standard: false, extended: false, exclusive: true },
  ]

  return (
    <div className="p-4">
      <div className="rounded-xl border border-neutral-800 bg-card w-full max-w-6xl mx-auto space-y-4
      text-card-foreground shadow-sm overflow-hidden">
        <div className="overflow-x-auto ">
          <table className="w-full border-collapse text-sm ">
            <thead>
    <tr className="border-b transition-colors border-neutral-800">
      <th className="h-12 px-6 align-middle font-bold text-lg text-muted-foreground bg-neutral-800/50 text-center w-1/4">
        Usage
      </th>
      <th className="h-12 px-6 align-middle font-bold text-lg text-muted-foreground bg-neutral-800/50 text-center w-1/4 whitespace-nowrap">
        Standard License
      </th>
      <th className="h-12 px-6 align-middle font-bold text-lg text-muted-foreground bg-neutral-800/50 text-center w-1/4 whitespace-nowrap">
        Extended License
      </th>
      <th className="h-12 px-6 align-middle font-bold text-lg text-muted-foreground bg-neutral-800/50 text-center w-1/4 whitespace-nowrap">
        Exclusive License
      </th>
    </tr>
  </thead>
  <tbody>
  {features.map((feature, index) => (
    <tr key={feature.name} className="border-b border-neutral-800 transition-colors hover:bg-muted/50">
      <td className="p-4 align-middle font-medium">{feature.name}</td>

      <td className="p-4 align-middle text-center">
        {feature.standard ? (
          <Check className="h-6 w-6 text-green-500 mx-auto" />
        ) : (
          <X className="h-6 w-6 text-red-500 mx-auto" />
        )}
      </td>

      <td className="p-4 align-middle text-center">
        {feature.extended ? (
          <Check className="h-6 w-6 text-green-500 mx-auto" />
        ) : (
          <X className="h-6 w-6 text-red-500 mx-auto" />
        )}
      </td>

      <td className="p-4 align-middle text-center">
        {feature.exclusive ? (
          <Check className="h-6 w-6 text-green-500 mx-auto" />
        ) : (
          <X className="h-6 w-6 text-red-500 mx-auto" />
        )}
      </td>
    </tr>
  ))}
</tbody>


          </table>
        </div>
      </div>
    </div>
  )
}

