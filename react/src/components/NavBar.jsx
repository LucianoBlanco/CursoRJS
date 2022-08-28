import React, {useState, useEffect} from "react"
export default function NavBar() {
  <Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="#"
    label="Home"
    icon={<HomeIcon fontSize="small" />}
  />
  <StyledBreadcrumb component="a" href="#" label="Catalog" />
  <StyledBreadcrumb
    label="Accessories"
    deleteIcon={<ExpandMoreIcon />}
    onDelete={handleClick}
  />
</Breadcrumbs>
}
