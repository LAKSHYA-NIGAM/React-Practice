import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://www.bing.com/th/id/OIP.WIKxXy-qK0pWIwhQVAB-PwHaHa?w=240&h=211&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=193&h=135&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.BEUTMsqITs1iT6S9QzThYAHaHa?pid=ImgDet&w=192&h=192&c=7&o=7&rm=3",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.UB7pR-gAzuRlJGTbURYkUwHaEK?w=193&h=135&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$38/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Remote"
  }
];
  return (
    <div className='parent'>
    {jobs.map((job, index) => (
      <div key={index}>
      <Card
        img={job.brandLogo}
        company={job.company}
        datePosted={job.datePosted}
        post={job.post}
        tag1={job.tag1}
        tag2={job.tag2}
        pay={job.pay}
        location={job.location}
      />
      </div>
    ))}
    </div>
  )
}

export default App
