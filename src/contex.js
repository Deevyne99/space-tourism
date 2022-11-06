import React, { useContext, useRef, useState, useEffect } from 'react'
import data from './data.json'
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [info, setData] = useState(data)
  const [sidebar, setSidebar] = useState(false)
  const [count, setCount] = useState(0)
  const [teamCount, setTeamCount] = useState(0)
  const [techCount, setTechCount] = useState(0)
  const [isActive, setIsactive] = useState()
  const [active, setActive] = useState()
  const [activeBtn, setActiveBtn] = useState()

  const btnRef = useRef([])
  //const linkRef = useRef([])

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  const handleSlide = (unique) => {
    const btns = btnRef.current

    btns.map((btn) => {
      if (parseInt(btn.id) === unique) {
        setCount(unique)
      }

      return btn
    })
  }
  const handleTeam = (id) => {
    setTeamCount(id)
  }
  const handleTech = (id) => {
    setTechCount(id)
  }

  useEffect(() => {
    setIsactive(count)
  }, [count])
  useEffect(() => {
    setActive(teamCount)
  }, [teamCount])
  useEffect(() => {
    setActiveBtn(techCount)
  }, [techCount])
  return (
    <AppContext.Provider
      value={{
        info,
        sidebar,
        count,
        teamCount,
        techCount,
        btnRef,
        handleSlide,
        isActive,
        toggleSidebar,
        handleTeam,
        active,
        handleTech,
        activeBtn,
        //linkRef,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
