export type EventItem = {
  image: string
  title: string
  slug: string
  location: string
  date: string
  time: string
}

const events = [
  {
    image: "/images/event1.png",
    title: "React Summit 2025",
    slug: "react-summit-2025",
    location: "San Francisco, CA, USA",
    date: "2025-06-15",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Online / Global",
    date: "2025-10-24",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "JSWorld Conference",
    slug: "jsworld-conference",
    location: "Amsterdam, Netherlands",
    date: "2025-02-28",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Node.js Interactive",
    slug: "nodejs-interactive",
    location: "Austin, TX, USA",
    date: "2025-08-12",
    time: "09:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "TypeScript Congress",
    slug: "typescript-congress",
    location: "Berlin, Germany",
    date: "2025-04-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "Vuejs Amsterdam",
    slug: "vuejs-amsterdam",
    location: "Amsterdam, Netherlands",
    date: "2025-03-12",
    time: "09:00 AM",
  },
]

export default events