import { Status as ReactWrapperStatus } from "@googlemaps/react-wrapper";

export default function Status(status: ReactWrapperStatus) {
  return <h1>{status}</h1>;
}
