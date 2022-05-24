import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
  faExclamation,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import Transition from "./Transition"
import Button from "./Button"

function Modal({
  className = "",
  title = "",
  text = "",
  confirmButtonText = "OK",
  showCancelButton = false,
  cancelButtonText = "Cancel",
  type = "",
  reverseButtons = false,
  onClose = () => {},
  ...newProps
}) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 1)
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = "unset")
  }, [])
  const slowClose = (result = false) => {
    setShow(false)
    setTimeout(() => onClose(result), 150)
  }
  let Icon = null
  if (type === "success") {
    Icon = (
      <div className="w-12 h-12 rounded-sm flex justify-center items-center bg-green-300 mb-4 mx-auto">
        <FontAwesomeIcon icon={faCheck} className="text-2xl text-green-700" />
      </div>
    )
  } else if (type === "warning") {
    Icon = (
      <div className="w-12 h-12 rounded-sm flex justify-center items-center bg-yellow-300 mb-4 mx-auto">
        <FontAwesomeIcon
          icon={faExclamation}
          className="text-2xl text-yellow-700"
        />
      </div>
    )
  } else if (type === "error") {
    Icon = (
      <div className="w-12 h-12 rounded-sm flex justify-center items-center bg-red-300 mb-4 mx-auto">
        <FontAwesomeIcon icon={faTimes} className="text-2xl text-red-700" />
      </div>
    )
  }
  const el = (
    <>
      <Transition show={show}>
        <Transition
          enter="transition-opacity duration-150 linear transform"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 linear transform"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-blue-800 bg-opacity-75 origin-center flex justify-center items-center"
          >
            <Transition
              enter="transition-transform duration-300 ease-out transform"
              enterFrom="-translate-y-64"
              enterTo="translate-y-0"
              leave="transition-transform duration-300 ease-out transform"
              leaveFrom="-translate-y-64"
              leaveTo="translate-y-0"
            >
              <div
                className={`${className} bg-white w-11/12 max-w-md text-center pt-10 rounded-sm shadow-lg`}
                {...newProps}
              >
                {Icon}
                {(title || text) && (
                  <div className="px-4 mb-4">
                    {title && <h2 className="text-3xl font-medium">{title}</h2>}
                    {text && (
                      <p className="mt-2 w-10/12 max-w-6xl max-w-full mx-auto text-gray-800 text-base">
                        {text}
                      </p>
                    )}
                  </div>
                )}
                <div
                  className={`flex mt-10 justify-center py-4 px-4 border-t border-gray-300 ${
                    reverseButtons && " flex-row-reverse"
                  }`}
                >
                  {showCancelButton && (
                    <Button
                      onClick={slowClose}
                      text={cancelButtonText}
                      className="mx-4"
                      type="secondary"
                    />
                  )}
                  <Button
                    onClick={() => slowClose(true)}
                    text={confirmButtonText}
                    className={`mx-4 ${!showCancelButton && " w-full"}`}
                    type="primary"
                  />
                </div>
              </div>
            </Transition>
          </div>
        </Transition>
      </Transition>
    </>
  )
  return ReactDOM.createPortal(el, document.body)
}

export default Modal