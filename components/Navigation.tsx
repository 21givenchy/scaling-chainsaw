"use client"

import NavLinks from "./NavLinks"
import SecondaryLinks from "./SecondaryLinks"

export default function Navigation() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4 my-4"
      style={{ gridArea: "nav" }}
    >
      <div className="col-span-2 md:col-span-2">
        <NavLinks />
      </div>
      <div className="col-span-2 md:col-span-2 flex items-start pt-3">
        <SecondaryLinks />
      </div>
    </div>
  )
}
