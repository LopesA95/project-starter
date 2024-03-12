import { Container } from "./slyles";

export function ButtonText({title, isActive = false, ...rest}){
  return(<Container
    type="button"
    is-Active={isActive.toString()}
    {...rest}
  >
    {title}
  </Container>
  )
}