import React from "react"

import Button from "../../Authentication/Student/components/Button"

function SimpleCard({
  className = "",
  image = "",
  title = "",
  text = "",
  buttonText = null,
  onClick= ()=>{},
  html = null,
  user=false,
  ...newProps
}) {
  let finalClass = `${className}  max-w-full border ${user?null : 'blur-sm'} border-gray-300 rounded-sm bg-white`
  return (
    <div className={finalClass}>
      {image && (
        <div className="w-full h-72">
          <img src={image} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && <h5 className="text-lg font-medium">{title}</h5>}
        {text && <p className={`${title && "mt-2"}`}>{text}</p>}
        {html}
        {buttonText && (
          <div className="mt-4 flex">
            <Button text={buttonText} onClick={user?onClick:null} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleCard