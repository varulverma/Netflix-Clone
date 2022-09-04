import React from "react";
import AccordianItem from "../AccordianItem/AccordianItem";
import AccordianTitle from "../AccordianTitle/AccordianTitle";
import AccordianText from "../AcoordianText/AccordianText";



function AccordianComponent({ children, ...restProps }) {
  const accordianData = [
    {
      title: "What is Netflix ?",
      text: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices. \n You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix Cost ?",
      text: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch Netflix ?",
      text: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do i cancel ?",
      text: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime.",
    },
    {
      title: "What can i watch on Netflix ?",
      text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good For kids ?",
      text: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. \n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you donot want kids to see.",
    },
  ];

  return (
    <div className="accordianComponent" {...restProps}>
      <h1> Frequently Asked Questions</h1>
      {accordianData.map(item => (
        <>
        {console.log(item)}
        <AccordianItem>
          <AccordianTitle>{item.title}</AccordianTitle>
          <AccordianText>{item.text}</AccordianText>
        </AccordianItem>
        </>
      ))}
    </div>
  );
}

export default AccordianComponent;
