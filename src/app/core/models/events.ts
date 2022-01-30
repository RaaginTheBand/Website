import { Timestamp } from "firebase/firestore";

export interface Past {
  events: Event[];
  title: string;
}

export interface Upcoming extends Past {
  title: string;
}

interface Event {
  dateTime: Timestamp;
  description: string;
  imageUrl: string;
  location?: EventLocation;
  name: string;
  ticketUrl?: string;
}

interface EventLocation {
  mapUrl: string;
  line1: string;
  line2: string;
  name: string;
}
