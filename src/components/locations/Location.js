import React from "react"

export const Location = ({ loc }) => (
  <section className="location">
    <h3 className="location__address">Address: {loc.address}</h3>
    <div className="location__area">Sqaure Feetage: {loc.area}</div>
    <div className="location__accessible">Accessible: {loc.accessible}</div>
  </section>
)
