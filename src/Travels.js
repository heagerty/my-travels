import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: "Kinsale",
        country: "Ireland",
        photo: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/002/large/29389e7762514c88846da0ae79c22006/ireland-kinsale-town-052418-po.jpg",
        distance: "800 miles"
    },
    {
        destination: "Portland",
        country: "United States",
        photo: "https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/TextwithImage-Banners/GettyImages-182138111_medium.jpg/_jcr_content/renditions/cq5dam.web.900.450.jpeg",
        distance: "5000 miles"
    },
    {
        destination: "Marseille",
        country: "France",
        photo: "https://thegloss.ie/wp-content/uploads/2018/02/The-Gloss-Magazine-Travel-Marseille-Tim-Magee.jpg",
        distance: "300 miles"
    },
    {
        destination: "Kosice",
        country: "Slovakia",
        photo: "https://farm1.staticflickr.com/471/31885443985_3de9f4150f_c.jpg",
        distance: "1000 miles"
    },
    {
        destination: "Rome",
        country: "Italy",
        photo: "https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200",
        distance: "1000 miles"
    },

];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;