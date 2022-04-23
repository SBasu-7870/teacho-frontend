import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import NavSearchMenu from "./elements/NavSearchMenu"
import SideFilters from "./elements/SideFilters"
import Alert from "./components/Alert"
import  SimpleCard  from "./components/SimpleCard"
import { restaurants } from "./sub/teachers"

function TeacherSearch() {
  const AllRestaurants = restaurants.map(r => {
    const { image, name, rating, cuisine, distance, price } = r
    return (
      <a href="#">
        <SimpleCard
          key={name}
          image={image}
          className="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm"
          html={
            <div className="text-sm">
              <h3 className="font-bold text-base">{name}</h3>
              <div className="flex items-center text-indigo-400">
                <FontAwesomeIcon icon={faStar} className="mr-2" /> {rating}
              </div>
              <p className="mt-1">
                {cuisine.map((c, index) => (
                  <span key={`${c}${name}`}>
                    {c} {index === cuisine.length - 1 ? "" : `\u00B7 `}
                  </span>
                ))}
              </p>
              <p>
                {distance} miles away &middot; {price}
              </p>
            </div>
          }
        />
      </a>
    )
  })
  return (
    <div>
      <NavSearchMenu />
      <div className="w-full flex flex-col lg:flex-row lg:px-6">
        <SideFilters />
        <div className="flex-1 lg:pl-12 py-6 px-6 lg:px-0">
          <Alert content="We are now offering contactless delivery in light of COVID-19." type="info"/>
          <div className="mt-12">
            <h1 className="text-3xl font-bold">Recommended For You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {AllRestaurants}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherSearch