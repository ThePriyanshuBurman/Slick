import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import productData from "./productData";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-transparent main">

              <div className="overflow-hidden border-2 border-gray">
                <img src={d.url} alt="" className="hover:scale-105 hover:duration-700" />
              </div>


              <p className="flex justify-items-start font-bold text-lg">{d.name}</p>
              <p className="flex justify-items-start pt-3 text-base mt-7">{d.description}
              </p>
              <p className="flex justify-items-start pb-3 text-base ">{d.description2}</p>
              <div className="flex justify-items-start gap-1 items-center">
                <p className="text-base text-darkGray">{d.rating}</p>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" className="bi bi-star-fill h-4 text-pinkyOrange" viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <span className="text-black text-base">{d.review}</span>
              </div>
              <div className="flex justify-items-start pt-4 font-bold text-base text-green">{d.price}</div>

            </div>,


            {/* <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div> */}
          ))}
        </Slider>
      </div>

    </div >
  );
}

const data = [
  {
    id: 1,
    imageurl:
      `./bodyWash.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
  {
    id: 2,
    imageurl:
      `./bodyButter.webp`,
    name: `Choco Body Butter - 250g`,
    description: `Intense Moisturization | Reduces Stretch`,
    description2: `Marks | Heals Dry Skin`,
    rating: `4.7`,
    review: `(1448 reviews)`,
    price: `Rs. 645`,
  },
  {
    id: 3,
    imageurl:
      `./faceSerum.webp`,
    name: `Green Tea & 15% Vitamin C Face`,
    description: `Enhances Glow | Reduces Dark Spots &`,
    description2: `Pigmentation | Boosts Sun Protection`,
    rating: `4.8`,
    review: `(252 reviews)`,
    price: `Rs. 699`,
  },
  {
    id: 4,
    imageurl:
      `./faceWash.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
  {
    id: 5,
    imageurl:
      `./hydrogel.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
  {
    id: 6,
    imageurl:
      `./scrub.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
  {
    id: 7,
    imageurl:
      `./shimmer.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
  {
    id: 8,
    imageurl:
      `./bodyButter.webp`,
    name: `Coffee Face Wash - 100 ml`,
    description: `Deeply Cleanses | Removes Tan, Oil & Dirt`,
    description2: `| Hydrates`,
    rating: `4.8`,
    review: `(912 reviews)`,
    price: `Rs. 349`,
  },
];


// const data = [
//   {
//     name: `John Morgan`,
//     img: `/students/John_Morgan.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Ellie Anderson`,
//     img: `/students/Ellie_Anderson.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Nia Adebayo`,
//     img: `/students/Nia_Adebayo.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Rigo Louie`,
//     img: `/students/Rigo_Louie.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
// ];

export default App;