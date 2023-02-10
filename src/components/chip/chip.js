import React, { useEffect, useRef, useState } from "react"
import Chip from "@material-ui/core/Chip"
import "./chip.scss"

const Chip = () => {
  return (  
    <div className={"chip-container"}>
      <Chip
        label=""
        onClick={handleClick}
        className={"chip-style"}
      />
    </div>
  )
}

export default Chip;