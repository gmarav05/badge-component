import Badge from './Badge'

export default function App() {

  const badgeColours = [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink"
  ]

  const pillBadge = badgeColours.map((color) => (
    <>
    <Badge key={color} shape={"pill"} color={color}>
      Badge
    </Badge>
    </>

  ))

  const squareBadge = badgeColours.map((color) => (
    <>
    <Badge key={color} shape={"square"} color={color}>
      Badge
    </Badge>
    </>

  ))


  return (
    <>
     <div className="flex flex-wrap gap-2" id='element'>{pillBadge}</div>
    <div className="flex flex-wrap gap-2" id='elements'>{squareBadge}</div>
    </>
  )
}


