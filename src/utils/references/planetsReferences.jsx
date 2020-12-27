import {
  img1,  img2,  img3,  img4,  img5,  img6,  img7,  img8,  img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, 
  img21, img22, img23, img24, img25, img26, img27,        img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45,        img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
  notFound
} from "../helpers/imports/planetsImports"
// At this point, it is one switch refactored !!!
export default function getPlanets(url){
  const response = {
    "https://swapi.dev/api/planets/1/":{ id: 1, img: img1, name: "Tatooine" },
    "https://swapi.dev/api/planets/2/":{ id: 2, img: img2, name: "Alderaan" },
    "https://swapi.dev/api/planets/3/":{ id: 3, img: img3, name: "Yavin IV" },
    "https://swapi.dev/api/planets/4/":{ id: 4, img: img4, name: "Hoth" },
    "https://swapi.dev/api/planets/5/":{ id: 5, img: img5, name: "Dagobah" },
    "https://swapi.dev/api/planets/6/":{ id: 6, img: img6, name: "Bespin" },
    "https://swapi.dev/api/planets/7/":{ id: 7, img: img7, name: "Endor" },
    "https://swapi.dev/api/planets/8/":{ id: 8, img: img8, name: "Naboo" },
    "https://swapi.dev/api/planets/9/":{ id: 9, img: img9, name: "Coruscant" },
    "https://swapi.dev/api/planets/10/":{ id: 10, img: img10, name: "Kamino" },
    "https://swapi.dev/api/planets/11/":{ id: 11, img: img11, name: "Geonosis" },
    "https://swapi.dev/api/planets/12/":{ id: 12, img: img12, name: "Utapau" },
    "https://swapi.dev/api/planets/13/":{ id: 13, img: img13, name: "Mustafar" },
    "https://swapi.dev/api/planets/14/":{ id: 14, img: img14, name: "Kashyyyk" },
    "https://swapi.dev/api/planets/15/":{ id: 15, img: img15, name: "Polis Massa" },
    "https://swapi.dev/api/planets/16/":{ id: 16, img: img16, name: "Mygeeto" },
    "https://swapi.dev/api/planets/17/":{ id: 17, img: img17, name: "Felucia" },
    "https://swapi.dev/api/planets/18/":{ id: 18, img: img18, name: "Cato Neimoidia" },
    "https://swapi.dev/api/planets/19/":{ id: 19, img: img19, name: "Saleucami" },
    "https://swapi.dev/api/planets/20/":{ id: 20, img: notFound, name: "Stewjon" },
    "https://swapi.dev/api/planets/21/":{ id: 21, img: img21, name: "Eriadu" },
    "https://swapi.dev/api/planets/22/":{ id: 22, img: img22, name: "Corellia" },
    "https://swapi.dev/api/planets/23/":{ id: 23, img: img23, name: "Rodia" },
    "https://swapi.dev/api/planets/24/":{ id: 24, img: img24, name: "Nal Hutta" },
    "https://swapi.dev/api/planets/25/":{ id: 25, img: img25, name: "Dantooine" },
    "https://swapi.dev/api/planets/26/":{ id: 26, img: img26, name: "Bestine IV" },
    "https://swapi.dev/api/planets/27/":{ id: 27, img: img27, name: "Ord Mantell" },
    "https://swapi.dev/api/planets/28/":{ id: 28, img: notFound, name: "Unknown" },
    "https://swapi.dev/api/planets/29/":{ id: 29, img: img29, name: "Trandosha" },
    "https://swapi.dev/api/planets/30/":{ id: 30, img: img30, name: "Socorro" },
    "https://swapi.dev/api/planets/31/":{ id: 31, img: img31, name: "Mon Cala" },
    "https://swapi.dev/api/planets/32/":{ id: 32, img: img32, name: "Chandrila" },
    "https://swapi.dev/api/planets/33/":{ id: 33, img: img33, name: "Sullust" },
    "https://swapi.dev/api/planets/34/":{ id: 34, img: img34, name: "Toydaria" },
    "https://swapi.dev/api/planets/35/":{ id: 35, img: img35, name: "Malastare" },
    "https://swapi.dev/api/planets/36/":{ id: 36, img: img36, name: "Dathomir" },
    "https://swapi.dev/api/planets/37/":{ id: 37, img: img37, name: "Rylot" },
    "https://swapi.dev/api/planets/38/":{ id: 38, img: img38, name: "Aleen Minor" },
    "https://swapi.dev/api/planets/39/":{ id: 39, img: img39, name: "Vulpter" },
    "https://swapi.dev/api/planets/40/":{ id: 40, img: img40, name: "Troiken" },
    "https://swapi.dev/api/planets/41/":{ id: 41, img: img41, name: "Tund" },
    "https://swapi.dev/api/planets/42/":{ id: 42, img: img42, name: "Haruun Kal" },
    "https://swapi.dev/api/planets/43/":{ id: 43, img: img43, name: "Cerea" },
    "https://swapi.dev/api/planets/44/":{ id: 44, img: img44, name: "Glee Anselm" },
    "https://swapi.dev/api/planets/45/":{ id: 45, img: img45, name: "Iridonia" },
    "https://swapi.dev/api/planets/46/":{ id: 46, img: notFound, name: "Tholoth" },
    "https://swapi.dev/api/planets/47/":{ id: 47, img: img47, name: "Iktotch" },
    "https://swapi.dev/api/planets/48/":{ id: 48, img: img48, name: "Quermia" },
    "https://swapi.dev/api/planets/49/":{ id: 49, img: img49, name: "Dorin" },
    "https://swapi.dev/api/planets/50/":{ id: 50, img: img50, name: "Champala" },
    "https://swapi.dev/api/planets/51/":{ id: 51, img: img51, name: "Mirial" },
    "https://swapi.dev/api/planets/52/":{ id: 52, img: img52, name: "Serenno" },
    "https://swapi.dev/api/planets/53/":{ id: 53, img: img53, name: "Concord Dawn" },
    "https://swapi.dev/api/planets/54/":{ id: 54, img: img54, name: "Zolan" },
    "https://swapi.dev/api/planets/55/":{ id: 55, img: img55, name: "Ojom" },
    "https://swapi.dev/api/planets/56/":{ id: 56, img: img56, name: "Skako" },
    "https://swapi.dev/api/planets/57/":{ id: 57, img: img57, name: "Muunilinst" },
    "https://swapi.dev/api/planets/58/":{ id: 58, img: img58, name: "Shili" },
    "https://swapi.dev/api/planets/59/":{ id: 59, img: img59, name: "Kalee" },
    "https://swapi.dev/api/planets/60/":{ id: 60, img: img60, name: "Umbara" },
    "default": notFound,
  }
  return (response[url]||response["default"]);
}