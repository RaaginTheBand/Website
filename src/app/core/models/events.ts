import { Timestamp } from "firebase/firestore";

export interface Past {
  dateTime: Timestamp;
  description: string;
  imageURL: string;
  name: string;
}

export interface Upcoming extends Past {
  location: EventLocation;
  ticketUrl?: string;
}

interface EventLocation {
  latLong: string;
  line1: string;
  line2: string;
  name: string;
}
