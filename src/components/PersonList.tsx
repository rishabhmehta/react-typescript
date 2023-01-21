import { Name } from "./Person.types"

type PersonListProps = {
  names: Name[]
}

// This is a test commit to check global alias

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        )
      })}
    </div>
  )
}
